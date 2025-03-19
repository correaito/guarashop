const supabase = require('../config/database');
const { v4: uuidv4 } = require('uuid');

// Exibe o formulário de cadastro de clientes
exports.showCadastroForm = (req, res) => {
  res.render('cadastro-cliente', {
    title: 'GuaraShop - Cadastro de Cliente',
    errorMessage: null,
    successMessage: null,
    cliente: {
      nome: '',
      email: '',
      telefone: '',
      endereco: ''
    }
  });
};

// Salva um novo cliente no banco de dados
exports.cadastrarCliente = async (req, res) => {
  try {
    const { nome, email, telefone, endereco } = req.body;
    
    // Validação básica
    if (!nome || nome.trim() === '') {
      return res.render('cadastro-cliente', {
        title: 'GuaraShop - Cadastro de Cliente',
        errorMessage: 'O nome é obrigatório',
        successMessage: null,
        cliente: { nome, email, telefone, endereco }
      });
    }
    
    // Verifica se o cliente já existe com o mesmo email (se fornecido)
    if (email && email.trim() !== '') {
      const { data: clienteExistente } = await supabase
        .from('cliente')
        .select('id')
        .eq('email', email)
        .limit(1);
        
      if (clienteExistente && clienteExistente.length > 0) {
        return res.render('cadastro-cliente', {
          title: 'GuaraShop - Cadastro de Cliente',
          errorMessage: 'Este email já está cadastrado',
          successMessage: null,
          cliente: { nome, email, telefone, endereco }
        });
      }
    }
    
    // Prepara o objeto de cliente para inserção
    const novoCliente = {
      id: uuidv4(),
      nome,
      email: email || null,
      telefone: telefone || null,
      endereco: endereco || null,
      data_cadastro: new Date().toISOString(),
      data_atualizacao: new Date().toISOString()
    };
    
    // Insere o cliente no Supabase
    const { error } = await supabase
      .from('cliente')
      .insert([novoCliente]);
      
    if (error) {
      throw error;
    }
    
    // Redireciona com mensagem de sucesso
    return res.render('cadastro-cliente', {
      title: 'GuaraShop - Cadastro de Cliente',
      errorMessage: null,
      successMessage: 'Cliente cadastrado com sucesso!',
      cliente: {
        nome: '',
        email: '',
        telefone: '',
        endereco: ''
      }
    });
    
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    
    return res.render('cadastro-cliente', {
      title: 'GuaraShop - Cadastro de Cliente',
      errorMessage: 'Erro ao cadastrar cliente. Por favor, tente novamente.',
      successMessage: null,
      cliente: req.body
    });
  }
};

// Lista todos os clientes
exports.listarClientes = async (req, res) => {
  try {
    const { data: clientes, error } = await supabase
      .from('cliente')
      .select('*')
      .order('nome', { ascending: true });
      
    if (error) {
      throw error;
    }
    
    res.render('lista-clientes', {
      title: 'GuaraShop - Lista de Clientes',
      clientes
    });
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    res.render('lista-clientes', {
      title: 'GuaraShop - Lista de Clientes',
      clientes: [],
      errorMessage: 'Erro ao carregar lista de clientes'
    });
  }
};