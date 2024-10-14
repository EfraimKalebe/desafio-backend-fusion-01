<h2>API Galáxia Star Wars</h2>

<p>Este projeto é uma API para gerenciamento de entidades do universo de Star Wars, como planetas, sistemas estelares, personagens e naves espaciais. A API permite criar, listar, obter detalhes, atualizar e deletar cada uma dessas entidades, oferecendo um ponto de partida para explorar dados do universo Star Wars.</p>

    Pré-requisitos
        Node.js (versão 12 ou superior)
        MongoDB (servidor local ou serviço online)
        npm ou yarn
        Postman (opcional, para testes)
        Instalação

    Instale as dependências:
        npm install

    Crie um arquivo .env na raiz do projeto com o seguinte conteúdo, configurando a URL do seu banco de dados MongoDB:
        MONGODB_URI=mongodb://localhost:27017/nome-do-banco-de-dados
        PORT=3000

    Inicie o servidor (em TypeScript):
    npx ts-node src/app.ts


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
        POST /star-systems: Cria um novo sistema estelar.
        GET /star-systems: Lista todos os sistemas estelares.
        GET /star-systems/: Obtém detalhes de um sistema estelar específico.
        PUT /star-systems/: Atualiza um sistema estelar específico.
        DELETE /star-systems/: Deleta um sistema estelar específico.
            Personagens
        POST /characters: Cria um novo personagem.
        GET /characters: Lista todos os personagens.
        GET /characters/: Obtém detalhes de um personagem específico.
        PUT /characters/: Atualiza um personagem específico.
        DELETE /characters/: Deleta um personagem específico.
            Naves Espaciais
        POST /spaceships: Cria uma nova nave espacial.
        GET /spaceships: Lista todas as naves espaciais.
        GET /spaceships/: Obtém detalhes de uma nave espacial específica.
        PUT /spaceships/: Atualiza uma nave espacial específica.
        DELETE /spaceships/: Deleta uma nave espacial específica.

    Inicie o servidor de desenvolvimento com:
        npx ts-node src/app.ts

Abra o Postman e teste as rotas listadas acima, conforme necessário. Use http://localhost:3000 como base para as URLs.

        Problemas Comuns
        Erro de Conexão com o MongoDB
    Certifique-se de que o MongoDB está em execução localmente ou que a URL do banco de dados em .env está correta.
    Se estiver recebendo um erro de MongooseServerSelectionError, verifique a configuração da porta e a conectividade do MongoDB.

        Erro ao Iniciar o Servidor
    Se estiver usando TypeScript e npx ts-node src/app.ts não funciona, verifique se o TypeScript está instalado globalmente (npm install -g typescript ts-node).


<h2>Tecnologias Utilizadas</h2>
        Node.js: Ambiente de execução do JavaScript no lado do servidor.
        Express.js: Framework para construção de APIs.
        TypeScript: Superset do JavaScript que adiciona tipagem estática.
        MongoDB: Banco de dados NoSQL para armazenamento dos dados.
        Mongoose: ODM para MongoDB, utilizado para modelar dados.
