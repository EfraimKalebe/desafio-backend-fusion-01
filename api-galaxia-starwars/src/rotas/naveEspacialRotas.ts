import express from 'express';
const router = express.Router();

// Criar nave espacial
router.post('/', (req, res) => {
  res.send('Nave espacial criada!');
});

// Listar todas as naves espaciais
router.get('/', (req, res) => {
  res.send('Listando todas as naves espaciais!');
});

// Obter detalhes de uma nave espacial específica
router.get('/:id', (req, res) => {
  res.send(`Detalhes da nave espacial ${req.params.id}`);
});

// Atualizar nave espacial
router.put('/:id', (req, res) => {
  res.send(`Nave espacial ${req.params.id} atualizada!`);
});

// Deletar nave espacial
router.delete('/:id', (req, res) => {
  res.send(`Nave espacial ${req.params.id} deletada!`);
});

export default router;
