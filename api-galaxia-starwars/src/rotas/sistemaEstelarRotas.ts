import express from 'express';
const router = express.Router();

// Criar sistema estelar
router.post('/', (req, res) => {
  res.send('Sistema estelar criado!');
});

// Listar todos os sistemas estelares
router.get('/', (req, res) => {
  res.send('Listando todos os sistemas estelares!');
});

// Obter detalhes de um sistema estelar específico
router.get('/:id', (req, res) => {
  res.send(`Detalhes do sistema estelar ${req.params.id}`);
});

// Atualizar sistema estelar
router.put('/:id', (req, res) => {
  res.send(`Sistema estelar ${req.params.id} atualizado!`);
});

// Deletar sistema estelar
router.delete('/:id', (req, res) => {
  res.send(`Sistema estelar ${req.params.id} deletado!`);
});

export default router;
