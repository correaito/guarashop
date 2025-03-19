const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Rotas
const clienteRoutes = require('./routes/clienteRoutes');

// Carregar variáveis de ambiente
require('dotenv').config();

// Configuração do EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Registrar rotas
app.use('/clientes', clienteRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'GuaraShop - Sucos Energéticos',
    products: [
      { name: 'Guaraná Power', description: 'Energia natural do guaraná amazônico', image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5lcmd5JTIwZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', price: 'R$ 9,90' },
      { name: 'Açaí Boost', description: 'Energia e antioxidantes em um só produto', image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 'R$ 10,90' },
      { name: 'Maracujá Relax', description: 'Energia sem nervosismo', image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 'R$ 8,90' },
      { name: 'Limão Detox', description: 'Energia e desintoxicação', image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', price: 'R$ 9,50' }
    ]
  });
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});