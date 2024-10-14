<h1>API Galáxia Star Wars</h1>

<p>Este projeto é uma API para gerenciamento de entidades do universo de Star Wars, como planetas, sistemas estelares, personagens e naves espaciais. A API permite criar, listar, obter detalhes, atualizar e deletar cada uma dessas entidades, oferecendo um ponto de partida para explorar dados do universo Star Wars.</p>

    Pré-requisitos
        Node.js (versão 12 ou superior)
        MongoDB (servidor local ou serviço online)
        npm ou yarn
        Postman (opcional, para testes)

    
<h2>Como Executar a API</h2>

    Baixe os arquivos ou faça um fork e clone os aqruivos, depois disso escolha uma IDE para uso (eu usei VScode) e abra os mesmos na sua IDE
        
    Instale as dependências:
        npm install

    Crie um arquivo .env na raiz do projeto com o seguinte conteúdo, configurando a URL do seu banco de dados MongoDB:
        MONGODB_URI=mongodb://localhost:27017/nome-do-banco-de-dados(Eu coloquei sem o nome do banco de dados)
        PORT=3000

    Obs: Baixe o MongoDBCompass

    Inicie o servidor (em TypeScript):
        npx ts-node api-galaxy-starwars/src/app.ts

    Abra o Postman e teste as rotas listadas acima, conforme necessário. Use http://localhost:3000 como base para as URLs.
        localhost:3000/Personagem
        localhost:3000/planetas
        localhost:3000/naveEspacial
        localhost:3000/sistemaEstelar

    OBS: Ao criar ou atualizar Personagem e sistemaEstelar, o campo planetaNatal e planetas deve conter um ObjectId de um planeta já existente no banco de dados. Esse campo não pode ser preenchido com um valor de texto simples. Certifique-se de que o valor fornecido para planetaNatal(quando for criar um Personagem) e planetas(quando for criar um sistemaEstelar) seja um ID válido de um documento de planeta previamente inserido. O OnjectID é o ID que o banco de dados mostra (Exemplo:"planetaNatal": "61616c6f626f6c2d616e74726f706f" ou "planetas": "61616c6f626f6c2d616e74726f706f"). Lembre que esse ID é dado quando você cria um planeta.


<h2>Estrutura do Projeto</h2>

Src/: Contém todo o código-fonte do projeto.
   
Controladores/: Funções que implementam a lógica de cada rota.
    
Modelos/: Define os esquemas do Mongoose para as entidades.

Rotas/: Define as rotas e associa as funções do controlador.

App.ts: Arquivo principal que configura o servidor e define as rotas.

  

        Rotas
            Planetas
        POST /planetas: Cria um novo planeta.
        GET /planetas: Lista todos os planetas.
        GET /planetas/: Obtém detalhes de um planeta específico.
        PUT /planetas/: Atualiza um planeta específico.
        DELETE /planetas/: Deleta um planeta específico.
            Sistemas Estelares
        POST /sistemaEstelar: Cria um novo sistema estelar.
        GET /sistemaEstelar: Lista todos os sistemas estelares.
        GET /sistemaEstelar/: Obtém detalhes de um sistema estelar específico.
        PUT /sistemaEstelar/: Atualiza um sistema estelar específico.
        DELETE /sistemaEstelar/: Deleta um sistema estelar específico.
            Personagens
        POST /Personagem: Cria um novo personagem.
        GET /Personagem: Lista todos os personagens.
        GET /Personagem/: Obtém detalhes de um personagem específico.
        PUT /Personagem/: Atualiza um personagem específico.
        DELETE /Personagem/: Deleta um personagem específico.
            Naves Espaciais
        POST /naveEspacial: Cria uma nova nave espacial.
        GET /naveEspacial: Lista todas as naves espaciais.
        GET /naveEspacial/: Obtém detalhes de uma nave espacial específica.
        PUT /naveEspacial/: Atualiza uma nave espacial específica.
        DELETE /naveEspacial/: Deleta uma nave espacial específica.

<h2>Problemas Comuns</h2>

Erro de Conexão com o MongoDB0
        Certifique-se de que o MongoDB está em execução localmente ou que a URL do banco de dados em .env está correta.
        Se estiver recebendo um erro de MongooseServerSelectionError, verifique a configuração da porta e a conectividade do MongoDB.

Erro ao Iniciar o Servidor
      Se estiver usando TypeScript e npx ts-node src/app.ts não funciona, verifique se o 
        TypeScript está instalado globalmente (npm install -g typescript ts-node).


<h2>Tecnologias Utilizadas</h2>

 Node.js: Ambiente de execução do JavaScript no lado do servidor.

 Express.js: Framework para construção de APIs.
 
 TypeScript: Superset do JavaScript que adiciona tipagem estática.
 
 MongoDB: Banco de dados NoSQL para armazenamento dos dados.
 
 Mongoose: ODM para MongoDB, utilizado para modelar dados.
