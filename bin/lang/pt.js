var colors = require('colors');
module.exports = {

    CORDOVA_NOT_INSTALLED : "\nCordova não está instalado, execute o comando: ".red + "npm install -g cordova ".white,
    VERSION_INSTALED: "Versão instalada",
    ERROR_EXEC_MOCKAPP: "Ops :(\nErro no mockapp\n",
    WRITE_LANG_NOT_FOUND: "Não foi encontrado a mensagem a ser exibida!".red,
    START_NEW_APP: "Criando um novo aplicativo...".green,
    START_PREVIEW_APP: "Iniciando preview app...".green,
    START_BUILD_APP: "Iniciando build do app...".green,
    START_ADD_PLATFORM: "Adicionando plataforma...".green,
    START_JAVA_INSTALL: "Iniciando instalação do Java JDK...".green,
    START_ANDROID_INSTALL: "Iniciando instalação do Android SDK...".green,
    START_ADD_ICONS_APP: "Adicionando pacote de ícones...".green,
    ERROR_CORDOVA: "Erro ao executar cordova: ".red,
    APP_NAME_NOT_FOUND_NEW_APP: " Ops! ".bgRed.white + " Você deve informar o nome do aplicativo, exemplo: mockapp new MyFirstApp.",
    APP_NAME_NOT_FOUND_DELETE_APP: " Ops! ".bgRed.white + " Você deve informar o nome do aplicativo, exemplo: mockapp delete MyFirstApp.",
    PARAMS_INCORRECT_NEW_APP: " Ops! ".bgRed.white + " O nome do app foi informado de forma incorreta, exemplos: \nmockapp new MyFirstApp \nou \nmockapp new \"My First app\"",
    APP_CREATED_SUCCESS: " Show! ".bgGreen.black + " App criado com sucesso :)",
    APP_DELETED_SUCCESS: " Show! ".bgGreen.black + " App deletado com sucesso :)",
    BUILD_SUCCESS: " Show! ".bgGreen.black + " Build concluído com sucesso :)",
    INSTALL_JAVA_SUCCESS: " Show! ".bgGreen.black + " Java JDK instalado com sucesso :)",
    INSTALL_ANDROID_SUCCESS: " Show! ".bgGreen.black + " Android SDK instalado com sucesso :)",
    ADD_ICONS_SUCESS: " Show! ".bgGreen.black + " Pacote de ícones adicionado com sucesso :)\nDigite: mockapp icons para ver seus ícones!",
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
    PREVIEW_RUNING_ON:  " Show! ".bgGreen.black + " Preview rodando na porta: ",
    PREVIEW_STOP: " Atenção! ".bgYellow.black + " Pressione Ctrl+c para parar o preview!",
    COMPONENT_NOT_INSTALLED: "Este componente não está instalado!",
    PLATFORM_NOT_INFORMED_BUILD: " Ops! ".bgRed.white + " Você deve informar a plataforma, exemplo: mockapp build android.",
    PLATFORM_ADDED: " Show! ".bgGreen.black + " Plataforma adicionada com sucesso!",
    PLATFORM_NOT_SUPPORTED: " Ops! ".bgRed.white + " Plataforma informada não suportada, veja documentaçao para mais detalhes: mockapp docs.",
    DOWNLOAD_ANDROID_SDK: "Baixando Android SDK para seu S.O...".green,
    DOWNLOAD_FAILED: " Ops! ".bgRed.white + " Download failed :(\nPor favor, tente mais tarde ou faça a instalação do SDK manual, veja em: mockapp docs.",
    DOWNLOADING: " Progresso",
    BUIDING_APP: "Building app...",
    INSTALLING_JAVA: "Instalando Java JDK...",
    INSTALLING_ANDROID: "Instalando Android SDK...",
    VERIFY_ENVIRONMENT: "Verificando dependências...".green,
    TYPE_NOT_FOUND_ADD: " Ops! ".bgRed.white + " Você deve informar o que vai adicionar no app.",
    TYPE_NOT_EXIST_ADD: " Ops! ".bgRed.white + " O tipo informado não é valido.",
    NAME_NOT_FOUND_ADD_CONTROLLER: " Ops! ".bgRed.white + " Você deve informar o nome do controller.",
    NAME_NOT_FOUND_ADD_SERVICE: " Ops! ".bgRed.white + " Você deve informar o nome do service.",
    NAME_NOT_FOUND_ADD_PAGE: " Ops! ".bgRed.white + " Você deve informar o nome da nova página.",
    ADD_CONTROLLER_FAILED: " Ops! ".bgRed.white + " Não foi possível criar controller :(",
    ADD_SERVICE_FAILED: " Ops! ".bgRed.white + " Não foi possível criar service :(",
    ADD_PAGE_FAILED: " Ops! ".bgRed.white + " Não foi possível criar uma nova página :(",
    ADD_ICONS_FAILED: " Ops! ".bgRed.white + " Não foi possível adicionar o pacote de ícone :(",
    CONTROLLER_EXISTS_THIS_NAME: " Ops! ".bgRed.white + " Já existe um controller com esse nome.",
    SERVICE_EXISTS_THIS_NAME: " Ops! ".bgRed.white + " Já existe um service com esse nome.",
    PAGE_EXISTS_THIS_NAME: " Ops! ".bgRed.white + " Já existe uma página com esse nome.",
    ICONS_EXISTS_THIS_NAME: " Ops! ".bgRed.white + " Já existe um pacote de ícones adicionado com esse nome.",
    PARAMS_INCORRECT_ADD_CONTROLLER: " Ops! ".bgRed.white + " O nome do controller foi informado de forma incorreta, exemplos: \nmockapp add controller userController.",
    PARAMS_INCORRECT_ADD_SERVICE: " Ops! ".bgRed.white + " O nome do service foi informado de forma incorreta, exemplos: \nmockapp add service userService.",
    PARAMS_INCORRECT_ADD_PAGE: " Ops! ".bgRed.white + " O nome da nova página foi informado de forma incorreta, exemplos: \nmockapp add page user.",
    PARAMS_INCORRECT_ADD_ICONS: " Ops! ".bgRed.white + " A URL do pacote de ícones foi informado de forma incorreta, exemplos: \nmockapp add icons http://www.flaticon.com/packs/material-design",
    ADD_PAGE_SUCCESS: " Show! ".bgGreen.black + " Página criada com sucesso :) ",
    ADD_ROUTE_SUCCESS: " Show! ".bgGreen.black + " Rota adicionada com sucesso :) ",
    NAME_NOT_FOUND_ADD_ICONS: " Ops! ".bgRed.white + " Você deve informar a URL do pacote de ícones.",


    THERE_IS_NEW_VERSION: function(packageJson){
      console.log("                                               ".bgYellow.black);
      console.log("  Opaaa! Existe uma nova versão: ".bgYellow.black + packageJson.version.bgYellow.black + "         ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
      console.log("  Sem pânico, apenas faça o update:            ".bgYellow.black);
      console.log("  npm install -g mockapp                       ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
    },
    ADD_CONTROLLER_SUCCESS: function(obj){
      console.log(" Show! ".bgGreen.black + " Controller criado com sucesso :)");
      if(commands.addController){
        console.log("Caminho:", obj.fileName.yellow);
        console.log("Adicione o atributo abaixo em seu elemento:");
        console.log("<div ", "ng-controller=\"".yellow+obj.name.yellow+"\"".yellow, "></div> ");
      }
    },
    EXAMPLE_GOTO_PAGE: function(name){
      console.log("\nAdicione o atributo abaixo em seu elemento:");
      console.log("<button ", "ng-click=\"goToPage('".yellow+name.yellow+"')\"".yellow, "></button> ");
    },
    ADD_SERVICE_SUCCESS: function(obj){
      console.log(" Show! ".bgGreen.black + " Service criado com sucesso :)");
      console.log("Caminho:", obj.fileName.yellow);
      console.log("Importe o service em seu controller:");
      console.log("app.controller('nameController', ['$scope', '"+obj.name.yellow+"', function($scope, "+obj.name.yellow+") { ");
    },
    SHOW_MESSAGE_FROM_REPO: function(msg){
      console.log(msg["pt"] ? msg["pt"].bgYellow.black : msg[lang].bgYellow.black);
    },
    SHOW_CONFIG_APP: function (config){
      console.log(" Info! ".bgCyan.black + " Configuração do seu app: ");
      console.log("id: "+config.id);
      console.log("nome: "+config.name);
      console.log("versão: "+config.version);
    },
    NEED_INSTALL_ENVIRONMENT: function (){
      console.log("");
      console.log("                                               ".bgYellow.black);
      console.log("  Seu ambiente não está preparado para gerar   ".bgYellow.black);
      console.log("  o aplicativo final, mas sem pânico!          ".bgYellow.black);
      console.log("  Deixe que o mockapp cuide disto :)           ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
      console.log("  Relaxe e aguarde a conclusão da instalação!  ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
      console.log("");
    },
    CHANGE_INDEX_ADD_CONTROLLER_FAILED: function (file){
      console.log(" Ops! ".bgRed.white + " Não foi possível importar arquivo.");
      console.log(" Adicione no arquivo index.html o código abaixo: ");
      console.log(' <script src="js/controllers/'+file+'"></script> ');
    },
    CHANGE_INDEX_ADD_CSS_FAILED: function (file){
      console.log(" Ops! ".bgRed.white + " Não foi possível importar arquivo.");
      console.log(" Adicione no arquivo index.html o código abaixo: ");
      console.log(' <link rel="stylesheet" type="text/css" href="icons/'+file+'.css"> ');
    }
}
