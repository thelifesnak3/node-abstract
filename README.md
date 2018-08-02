# gestagio-backend-ms

Aplicação responsável pelos micro serviços para o sistema Gestagio.


## Iniciando a aplicação
Use `npm run dev` para a configuração de desenvolvimento ser iniciada. Serviços estarão rodando na url: `http://localhost:8000`.
Use `npm start` para a configuração de produção ser iniciada. Serviços estarão rodando na url: `http://localhost:8000`.
Não existe diferença de comando para rodar em Windows ou Linux, por conta da utilização da lib cross-env.

## Utilização da aplicação
Para criação de novos serviços, inicialmente é necessário criar um novo arquivo no caminho src > models.
Onde deverá ser configurado de acordo com o modelo a seguir:
```javascript
const sequelize = require('sequelize')                      // Requisitando a lib sequelize que é responsável pela comunicação com banco de dados.
const seq = require('../../config/db/postgres.js')          // Requisitando as configurações de acesso ao banco de dados

const Usuario = seq.define('usuario', {                     // Nome da variável, deverá seguir o padrão de acordo com o nome do novo serviço, seguido do nome da tabela no banco de dados dentro do seq.define('AQUI', ...
    seq_usuario: {                                          // Nome das colunas de acordo com o banco de dados.
        type: sequelize.INTEGER,                            // Definindo o tipo do campo       
        primaryKey: true,                                   // Definindo o campo como primary key
        autoIncrement: true                                 // adicionando atributo de auto increment
    },
    nom_usuario: sequelize.STRING,                          // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.
    nom_senha: sequelize.STRING,                            // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.
    nom_login: sequelize.STRING,                            // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.
    ind_status: sequelize.CHAR,                             // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.
    cod_grupo_usuario: sequelize.INTEGER,                   // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.    
    cod_pessoa: sequelize.INTEGER,                          // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.
    nom_email: sequelize.STRING,                            // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.
    num_telefone: sequelize.STRING,                         // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.
    img_usuario: sequelize.STRING                           // Nome das colunas de acordo com o banco de dados seguido do tipo da coluna.
    },{
    schema: 'sistema',                                      // Esquema no qual a tabela de encontra no banco de dados
    tableName: 'usuario',                                   // Nome da tabela no banco de dados
    timestamps: false                                       // Desligando o timestamp
});

module.exports = Usuario                                    // Exportando a variável MODEL configurada para ser acessada quando for requerida.
```

Após a criação do arquivo MODEL, deverá ser criado um novo arquivo no caminho src -> abstract_execute.
Onde deverá ser configurado de acordo com o modelo a seguir:
```javascript
module.exports = app => {                                                   // Linha padrão
    
    const $abs = require('../../utils/Abstract.js')                         // Requerindo o abstract o caminho apenas irá mudar no caso do arquivo está dentro de outra pasta, para melhor oranização
    const Usuario = require('../models/Usuario.js')                         // Requerindo o model o caminho apenas irá mudar no caso do arquivo está dentro de outra pasta, para melhor oranização
    
    const U_abs = $abs.create(app, Usuario, `${app.usuario_route_base}`)    // Criando todos os serviços padrões disponibilizados pelo abstract PARAM1 = nunca irá mudar; PARAM2 = nome da variável utilizada no requerimento da model 
                                                                            // PARAM3 = nome da rota, buscando sempre utilizar as rotas padrões como base que estão definidas no arquivo app.js    
}                                                                           // Linha padrão
```

Para gerar serviços personalizados que o Abstract não disponibiliza seguir o seguinte modelo:
```javascript
module.exports = app => {
    
    const $abs = require('../../utils/Abstract.js')
    const Usuario = require('../models/Usuario.js')
    
    const U_abs = $abs.create(app, Usuario, `${app.usuario_route_base}`)

    U_abs.app.get(`${app.route_base}/teste`, (req, res) => {         
        
        // Dentro deste parametro será realizado o serviço desejado
        
    })

}
```

Seguinte o modelo a cima você terá os seguintes serviços, disponíveis nas seguintes rotas
```bash
getAll http://localhost:8000/management/usuario
getById http://localhost:8000/management/usuario/:id
getByParam http://localhost:8000/management/usuario/search
postCreate http://localhost:8000/management/usuario
putUpdate http://localhost:8000/management/usuario/:id
delete http://localhost:8000/management/usuario/:id
```

### getAll
Requisição do tipo get, retornará todos os usuários cadastrados no banco. Não é necessário nenhum paramêtro.


### getById
Requisição do tipo get, retornará o usuário de acordo com o ID passado pela url.


### getByParam
Requisição do tipo post, retornará o usuário de acordo com o paramêtro passado.
Modelo do paramêtro -> {nom_nome: "Felipe"}, objeto com atributo de acordo com o banco de dados + valor a ser pesquisado.


### postCreate
Requisição do tipo post, irá cadastrar o usuário no banco. Recebe objeto como paramêtro, o objeto deve segui o modelo do banco de dados.
Exemplo:
```javascript
{
    nom_nome: "Felipe",
    num_idade: 25,
    num_nivel_programacao: -99999
}
```


### putUpdate
Requisição do tipo put, irá realizar update no usuário. Recebe o id do usuário a ser alterado pela url + objeto com os campos a serem modificados de a cordo com o exemplo abaixo:
```javascript
{
    nom_nom: "Saul Bagano",
    num_idade: 24,
    num_nivel_programacao: 99999999999999999,
}
```


### delete
Requisição do tipo delete, irá deletar o usuário do banco. Recebe como paramêtro o id pela url.