import express from 'express';
const router = express.Router();

// Criar planeta
router.post('/', (req, res) => {
  res.send('Planeta criado!');
});

// Listar todos os planetas
router.get('/', (req, res) => {
  res.send('Listando todos os planetas!');
});

// Obter detalhes de um planeta específico
router.get('/:id', (req, res) => {
  res.send(`Detalhes do planeta ${req.params.id}`);
});

// Atualizar planeta
router.put('/:id', (req, res) => {
  res.send(`Planeta ${req.params.id} atualizado!`);
});

// Deletar planeta
router.delete('/:id', (req, res) => {
  res.send(`Planeta ${req.params.id} deletado!`);
});

export default router;
