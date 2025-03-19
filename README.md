# GuaraShop - Loja de Sucos Energéticos Naturais

Este é um projeto de uma loja virtual de sucos energéticos naturais feitos com ingredientes da Amazônia brasileira.

## Sobre o Projeto

GuaraShop é uma aplicação web que oferece bebidas energéticas feitas com ingredientes naturais, como guaraná, açaí e outras frutas amazônicas. O projeto foi desenvolvido com Node.js, Express, EJS e integração com Supabase para banco de dados.

## Características

- Catálogo de produtos energéticos naturais
- Cadastro de clientes com armazenamento em banco de dados
- Listagem de clientes cadastrados
- Layout responsivo
- Seção de benefícios
- Depoimentos de clientes
- Formulário de contato
- Design moderno

## Tecnologias Utilizadas

- Node.js
- Express
- EJS (Embedded JavaScript templates)
- Supabase (Banco de dados PostgreSQL)
- HTML5
- CSS3
- JavaScript

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/correaito/guarashop.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd guarashop
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env.example`
   - Defina as variáveis `SUPABASE_URL` e `SUPABASE_KEY` com suas credenciais do Supabase

5. Inicie o servidor:
   ```
   npm start
   ```

6. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

## Estrutura do Banco de Dados

O projeto utiliza uma tabela `cliente` no Supabase com a seguinte estrutura:

- `id`: UUID (chave primária)
- `nome`: Text (obrigatório)
- `email`: Text
- `telefone`: Text
- `endereco`: Text
- `data_cadastro`: Timestamp
- `data_atualizacao`: Timestamp

## Estrutura do Projeto

- `index.js`: Arquivo principal da aplicação
- `config/`: Configurações (banco de dados)
- `controllers/`: Controladores da aplicação
- `routes/`: Definições de rotas
- `views/`: Templates EJS
- `public/`: Arquivos estáticos (CSS, JavaScript, imagens)
  - `public/css/`: Estilos CSS
  - `public/js/`: Scripts JavaScript
  - `public/images/`: Imagens do projeto

## Rotas da Aplicação

- `/`: Página inicial
- `/clientes/cadastro`: Formulário de cadastro de clientes
- `/clientes/lista`: Listagem de clientes cadastrados

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma nova branch para sua feature
3. Faça commit das suas alterações
4. Envie um pull request

## Licença

Este projeto está licenciado sob a licença ISC.