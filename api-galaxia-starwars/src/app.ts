import express from 'express';
import mongoose from 'mongoose';
import { criarPlaneta, listarPlanetas, obterPlaneta, atualizarPlaneta, deletarPlaneta } from './controladores/planetaControlador'; // Importando funções do controlador de Planeta
import {criarSistemaEstelar,listarSistemasEstelares, obterSistemaEstelar,atualizarSistemaEstelar,deletarSistemaEstelar} from './controladores/SistemaEstelarControlador';
import {criarPersonagem,listarPersonagens,obterPersonagem,atualizarPersonagem,deletarPersonagem} from './controladores/PersonagemControlador';
import {criarNaveEspacial,listarNavesEspaciais,obterNaveEspacial,atualizarNaveEspacial,deletarNaveEspacial} from './controladores/NaveEspacialControlador';

const app = express();
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017';
mongoose.connect(mongoURI).then(() => console.log('Conectado ao MongoDB!'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Rotas de Planeta
app.post('/planetas', criarPlaneta);
app.get('/planetas', listarPlanetas);
app.get('/planetas/:id', obterPlaneta);
app.put('/planetas/:id', atualizarPlaneta);
app.delete('/planetas/:id', deletarPlaneta);


// Rotas de Sistema Estelar
app.post('/sistemaEstelar', criarSistemaEstelar);
app.get('/sistemaEstelar', listarSistemasEstelares);
app.get('/sistemaEstelar/:id', obterSistemaEstelar);
app.put('/sistemaEstelar/:id', atualizarSistemaEstelar);
app.delete('/sistemaEstelar/:id', deletarSistemaEstelar);

// Rotas de Personagem
app.post('/Personagem', criarPersonagem);
app.get('/Personagem', listarPersonagens);
app.get('/Personagem/:id', obterPersonagem);
app.put('/Personagem/:id', atualizarPersonagem);
app.delete('/Personagem/:id', deletarPersonagem);

// Rotas de Nave Espacial
app.post('/naveEspacial', criarNaveEspacial);
app.get('/naveEspacial', listarNavesEspaciais);
app.get('/naveEscpacial/:id', obterNaveEspacial);
app.put('/naveEspacial/:id', atualizarNaveEspacial);
app.delete('/naveEspacial/:id', deletarNaveEspacial);

// Iniciar o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
