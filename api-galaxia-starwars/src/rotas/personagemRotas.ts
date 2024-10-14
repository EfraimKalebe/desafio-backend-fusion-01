import express from 'express';
const router = express.Router();

// Criar personagem
router.post('/', (req, res) => {
  res.send('Personagem criado!');
});

// Listar todos os personagens
router.get('/', (req, res) => {
  res.send('Listando todos os personagens!');
});

// Obter detalhes de um personagem específico
router.get('/:id', (req, res) => {
  res.send(`Detalhes do personagem ${req.params.id}`);
});

// Atualizar personagem
router.put('/:id', (req, res) => {
  res.send(`Personagem ${req.params.id} atualizado!`);
});

// Deletar personagem
router.delete('/:id', (req, res) => {
  res.send(`Personagem ${req.params.id} deletado!`);
});

export default router;
