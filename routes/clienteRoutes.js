const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para exibir formulário de cadastro
router.get('/cadastro', clienteController.showCadastroForm);

// Rota para processar o cadastro
router.post('/cadastro', clienteController.cadastrarCliente);

// Rota para listar todos os clientes
router.get('/lista', clienteController.listarClientes);

module.exports = router;