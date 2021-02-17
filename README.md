# GerenciamentoUsuarios-RESTAPI
Projeto criado com ajuda do curso de Javascript da HCODE, o objetivo era integrar dois projetos anteriores em um só, sendo um projeto de gerenciamento de usuários e o outro uma API em REST através de AJAX, fazendo um sistema que cria, lê, atualiza e deleta (CRUD) usuários através de um servidor. As informações são salvas em um servidor local baseado em NeDB.

Inicialmente, é notável que a API foi criada utilizando Node.Js, portanto, é importante que ao clonar o repositório para propósito de testes, o usuário baixe todos os módulos do Node usados no projeto. Para fazer tal, é necessário instalar o Node, ir até os diretórios do programa e executar o comando "npm install", infelizmente eu cometi um erro de instalar dependências conforme a parte do projeto, portanto o comando deve ser realizado 3 vezes, uma vez na pasta raíz do projeto, uma vez na pasta cliente-server e, por fim, uma vez na pasta ApiRest.

Após isso, os servidores precisam ser levantados, o servidor da API está configurado na porta 4000 e o servidor dá pagina de Gerenciamento de usuários está configurado para a porta 3000, logo ambas precisam estar disponíveis para o uso efetivo de ambas partes do projeto. Para iniciar os servidores, os seguintes comandos devem ser executados:<br />
`GerenciamentoUsuarios-RESTAPI\ApiRest node index` - Inicia a API REST <br />
`GerenciamentoUsuarios-RESTAPI\cliente-server npm start` - Inicia o site de gerenciamento de usuários <br />
Para acessar, então, deve ser colocado no navegador o seguinte endereço: https://localhost:3000

O projeto não está perfeito, tendo sido criado principalmente como uma maneira de aperfeiçoar meus conhecimentos em Javascript, APIs para Web e Banco de Dados. Pretendo no futuro fazer mais como esse, com funcionalidades mais complexos e código mais limpo.