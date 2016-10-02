var colors = require('colors');
module.exports = {

    CORDOVA_NOT_INSTALLED : "\nCordova não está instalado, execute o comando: ".red + "npm install -g cordova ".white,
    VERSION_INSTALED: "Versão instalada",
    ERROR_EXEC_MOCKAPP: "Ops :(\nErro no mockapp\n",
    WRITE_LANG_NOT_FOUND: "Não foi encontrado a mensagem a ser exibida!".red,
    START_NEW_APP: "Criando um novo aplicativo...".green,
    ERROR_CORDOVA: "Erro ao executar cordova: ".red,
    APP_NAME_NOT_FOUND_NEW_APP: " Ops! ".bgRed.white + " Você deve informar o nome do aplicativo, exemplo: mockapp new MyFirstApp.",
    APP_NAME_NOT_FOUND_DELETE_APP: " Ops! ".bgRed.white + " Você deve informar o nome do aplicativo, exemplo: mockapp delete MyFirstApp.",
    PARAMS_INCORRECT_NEW_APP: " Ops! ".bgRed.white + " O nome do app foi informado de forma incorreta, exemplos: \nmock new MyFirstApp \nou \nmockapp new \"My First app\"",
    APP_CREATED_SUCCESS: " Show! ".bgGreen.black + " App criado com sucesso :)",
    APP_DELETED_SUCCESS: " Show! ".bgGreen.black + " App deletado com sucesso :)",
    ID_APP_INVALID: " Ops! ".bgRed.white + " O id informado não é valido, tente usar outro.",
    APP_EXISTS: " Ops! ".bgRed.white + " Um app com este nome já existe neste diretório, escolha outro nome ou delete o existente.",
    START_DELETE_APP: "Deletando aplicativo...".green,
    APP_NOT_EXIST_IN_DIRECTORY: " Ops! ".bgRed.white + " Este app não existe neste diretório.",
    NOT_DELETED_APP: " Ops! ".bgRed.white + " Não foi possível excluir o aplicativo.",
    CONFIRMATION_DELETE_APP: "Você quer mesmo excluir este app? (sim/não) ",
    ANSWER_YES: "sim",
    ANSWER_NO: "não",
    COMMAND_NOT_FOUND: " Ops! ".bgRed.white + " Comando inválido, para verificar a documentação digite: mockapp docs.",
    YOU_NOT_INTO_PROJECT: " Ops! ".bgRed.white + " Você não esta dentro da pasta de um projeto.",
    UPDATE_CONFIG: " Atenção! ".bgYellow.black + " Deixe em branco para não alterar!",
    UPDATE_CONFIG_NEW_ID: "Digite um novo valor para id: ",
    UPDATE_CONFIG_NEW_NAME: "Digite um novo valor para nome: ",
    UPDATE_CONFIG_NEW_VERSION: "Digite um novo valor para versão: ",
    UPDATE_CONFIG_FAILED:  " Ops! ".bgRed.white + " Não foi possível alterar configurações :(",
    UPDATE_CONFIG_SUCCESS:  " Show! ".bgGreen.black + " Configurações alteradas com sucesso :)",

    THERE_IS_NEW_VERSION: function(packageJson){
      console.log("                                               ".bgYellow.black);
      console.log("  Opaaa! Existe uma nova versão: ".bgYellow.black + packageJson.version.bgYellow.black + "         ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
      console.log("  Sem pânico, apenas faça o update:            ".bgYellow.black);
      console.log("  npm install -g mockapp                       ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
    },
    SHOW_MESSAGE_FROM_REPO: function(msg){
      console.log(msg["pt"] ? msg["pt"].bgYellow.black : msg[lang].bgYellow.black);
    },
    SHOW_CONFIG_APP: function (config){
      console.log(" Info! ".bgCyan.black + " Configuração do seu app: ");
      console.log("id: "+config.id);
      console.log("nome: "+config.name);
      console.log("versão: "+config.version);
    }
}
