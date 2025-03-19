# 🛍️ GuaraShop

<div align="center">
  
  ![GuaraShop Logo](https://via.placeholder.com/200x200?text=GuaraShop)
  
  [![GitHub license](https://img.shields.io/github/license/correaito/guarashop)](https://github.com/correaito/guarashop/blob/main/LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/correaito/guarashop)](https://github.com/correaito/guarashop/stargazers)
  [![GitHub issues](https://img.shields.io/github/issues/correaito/guarashop)](https://github.com/correaito/guarashop/issues)
  [![GitHub forks](https://img.shields.io/github/forks/correaito/guarashop)](https://github.com/correaito/guarashop/network)
  
  **Uma plataforma de e-commerce moderna, segura e eficiente para suas compras online**
  
  [Demo](https://guarashop.vercel.app) | [Documentação](https://github.com/correaito/guarashop/wiki) | [Reportar Bug](https://github.com/correaito/guarashop/issues) | [Solicitar Feature](https://github.com/correaito/guarashop/issues)
  
</div>

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Funcionalidades](#-funcionalidades)
- [Roadmap](#-roadmap)
- [Começando](#-começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configuração](#configuração)
  - [Execução](#execução)
- [Uso](#-uso)
- [Testes](#-testes)
- [Deployment](#-deployment)
- [Contribuição](#-contribuição)
- [Código de Conduta](#-código-de-conduta)
- [Licença](#-licença)
- [Contato](#-contato)
- [Agradecimentos](#-agradecimentos)

## 🚀 Sobre o Projeto

GuaraShop é uma plataforma de e-commerce completa desenvolvida para proporcionar uma experiência de compra online excepcional. Combinando design moderno com funcionalidades avançadas, o GuaraShop oferece uma solução completa tanto para lojistas quanto para consumidores.

### 💡 Motivação

O projeto nasceu da necessidade de criar uma plataforma de e-commerce que fosse ao mesmo tempo fácil de usar e poderosa o suficiente para atender às demandas do comércio digital moderno. Com foco em performance, segurança e experiência do usuário, o GuaraShop se destaca como uma alternativa inovadora no mercado.

### 🎯 Objetivos

- Proporcionar uma experiência de compra fluida e intuitiva
- Oferecer ferramentas de gestão eficientes para lojistas
- Garantir transações seguras e confiáveis
- Fornecer insights valiosos através de análise de dados
- Ser escalável para atender desde pequenos negócios até grandes operações

## 🖥️ Demonstração

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=GuaraShop+Demo" alt="GuaraShop Demo">
</div>

Acesse nossa [versão demo](https://guarashop.vercel.app) para experimentar o GuaraShop em ação!

Credenciais para teste:
- **Cliente**: usuario@teste.com / senha123
- **Admin**: admin@guarashop.com / admin123

## 🔧 Tecnologias

O GuaraShop foi desenvolvido com um stack tecnológico moderno e robusto:

### Frontend
- **Next.js 14** - Framework React com SSR e SSG
- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **React Query** - Gerenciamento de estado e cache
- **Zustand** - Gerenciamento de estado global
- **Axios** - Cliente HTTP baseado em Promises

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **Prisma** - ORM para Node.js e TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Redis** - Armazenamento em cache
- **Next Auth** - Autenticação completa para Next.js

### Pagamentos e Integrações
- **Stripe** - Processamento de pagamentos
- **PayPal** - Alternativa de pagamento
- **Correios API** - Cálculo de frete
- **SendGrid** - Envio de emails transacionais

### DevOps
- **Docker** - Containerização
- **GitHub Actions** - CI/CD
- **Jest** - Framework de testes
- **Cypress** - Testes end-to-end
- **ESLint/Prettier** - Linting e formatação de código

## 📐 Arquitetura

O GuaraShop segue uma arquitetura moderna baseada em microserviços e API RESTful:

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│  Client Layer   │◄────►│   API Layer     │◄────►│  Service Layer  │
│  (Next.js/React)│      │  (Express/Node) │      │(Business Logic) │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
                                                          │
                                                          ▼
                                             ┌─────────────────────────┐
                                             │                         │
                                             │     Database Layer      │
                                             │   (PostgreSQL/Redis)    │
                                             │                         │
                                             └─────────────────────────┘
```

- **Arquitetura Limpa (Clean Architecture)** para separação de responsabilidades
- **Design orientado por domínio (DDD)** para modelagem de negócios complexos
- **CQRS** (Command Query Responsibility Segregation) para otimização de leitura/escrita
- **Event Sourcing** para rastreabilidade e auditoria

## ✨ Funcionalidades

### Para Clientes
- 🔐 **Autenticação** - Registro, login e recuperação de senha
- 👤 **Perfil de Usuário** - Gerenciamento de dados pessoais e endereços
- 🛒 **Carrinho de Compras** - Adição, remoção e atualização de itens
- 💳 **Checkout** - Processo de compra simplificado em etapas
- 💸 **Múltiplos Métodos de Pagamento** - Cartão, boleto, Pix, PayPal
- 📦 **Rastreamento de Pedidos** - Acompanhamento em tempo real
- 🔍 **Busca Avançada** - Filtros por categoria, preço, avaliação, etc.
- ⭐ **Sistema de Avaliações** - Comentários e notas para produtos
- ❤️ **Lista de Desejos** - Salvamento de produtos para compra futura
- 🔔 **Notificações** - Alertas sobre promoções e status de pedidos

### Para Administradores
- 📊 **Dashboard** - Visão geral das métricas do negócio
- 📝 **Gestão de Produtos** - Cadastro, edição e remoção
- 🏷️ **Gestão de Categorias** - Organização hierárquica
- 🏪 **Gestão de Estoque** - Controle de disponibilidade
- 💰 **Gestão de Preços** - Definição de preços e promoções
- 📋 **Gestão de Pedidos** - Processamento e acompanhamento
- 👥 **Gestão de Clientes** - Visualização e edição de dados
- 📈 **Relatórios** - Análises de vendas, clientes e produtos
- 🎯 **Marketing** - Cupons de desconto e campanhas

## 📅 Roadmap

- [x] MVP com funcionalidades básicas de e-commerce
- [x] Integração com gateway de pagamento
- [x] Sistema de avaliações e comentários
- [ ] App mobile (React Native)
- [ ] Marketplace com múltiplos vendedores
- [ ] Sistema de afiliados
- [ ] Integração com redes sociais para venda
- [ ] IA para recomendação de produtos
- [ ] Suporte a internacionalização
- [ ] PWA para experiência offline

## 🏁 Começando

Siga estas instruções para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- Node.js 18.x ou superior
- npm 8.x ou superior
- PostgreSQL 14.x ou superior
- Conta no Stripe para processamento de pagamentos
- Variáveis de ambiente configuradas

### Instalação

```bash
# Clone o repositório
git clone https://github.com/correaito/guarashop.git

# Entre no diretório
cd guarashop

# Instale as dependências
npm install
```

### Configuração

1. Copie o arquivo de exemplo de variáveis de ambiente:
```bash
cp .env.example .env.local
```

2. Configure as variáveis de ambiente no arquivo `.env.local`:
```
# Base de Dados
DATABASE_URL=postgresql://usuario:senha@localhost:5432/guarashop

# Autenticação
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua_chave_secreta_muito_segura

# Stripe
STRIPE_PUBLIC_KEY=pk_test_sua_chave_publica
STRIPE_SECRET_KEY=sk_test_sua_chave_secreta
STRIPE_WEBHOOK_SECRET=whsec_seu_secret_webhook

# Upload de imagens
CLOUDINARY_CLOUD_NAME=seu_cloudname
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=seu_api_secret
```

3. Configure o banco de dados:
```bash
# Execute as migrações do Prisma
npx prisma migrate dev

# Popule o banco com dados iniciais (opcional)
npm run seed
```

### Execução

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start
```

Acesse `http://localhost:3000` para ver a aplicação em funcionamento.

## 📖 Uso

### Como Cliente

1. **Registro/Login**: Crie uma conta ou faça login na plataforma
2. **Navegação**: Explore produtos por categorias ou use a busca
3. **Compra**: Adicione produtos ao carrinho e prossiga para o checkout
4. **Pagamento**: Escolha o método de pagamento e finalize a compra
5. **Acompanhamento**: Monitore o status do seu pedido na área "Meus Pedidos"

### Como Administrador

1. **Acesso ao Painel**: Faça login com credenciais de administrador
2. **Gestão de Catálogo**: Adicione, edite ou remova produtos e categorias
3. **Processamento de Pedidos**: Atualize status e gerencie entregas
4. **Relatórios**: Visualize métricas de vendas e comportamento do cliente

## 🧪 Testes

O GuaraShop possui uma ampla cobertura de testes para garantir a qualidade e robustez do código:

```bash
# Executar testes unitários
npm run test

# Executar testes de integração
npm run test:integration

# Executar testes end-to-end
npm run test:e2e

# Verificar cobertura de testes
npm run test:coverage
```

## 🚢 Deployment

O GuaraShop está configurado para fácil deployment em várias plataformas:

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Docker
```bash
# Construir a imagem
docker build -t guarashop .

# Executar o container
docker-compose up -d
```

### Heroku
```bash
heroku create guarashop
git push heroku main
```

## 👥 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/incrivel`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona feature incrível'`)
4. Faça push para a branch (`git push origin feature/incrivel`)
5. Abra um Pull Request

Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e o processo para enviar pull requests.

## 📜 Código de Conduta

Este projeto segue o [Código de Conduta Contributor Covenant](CODE_OF_CONDUCT.md). Ao participar, espera-se que você respeite esse código.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

Alan Corrêa - [@correaito](https://twitter.com/correaito) - alan@guarashop.com

Link do Projeto: [https://github.com/correaito/guarashop](https://github.com/correaito/guarashop)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - O framework que torna o desenvolvimento React mais produtivo
- [Tailwind CSS](https://tailwindcss.com/) - Por simplificar o design de interfaces
- [Prisma](https://www.prisma.io/) - Pela excelente experiência de desenvolvimento com bancos de dados
- [Vercel](https://vercel.com/) - Pela incrível plataforma de deployment
- [Stripe](https://stripe.com/) - Pela robusta API de pagamentos
- A todos os contribuidores que ajudaram a tornar este projeto realidade

---

<div align="center">
  <sub>Feito com ❤️ por <a href="https://github.com/correaito">Alan Corrêa</a></sub>
</div>