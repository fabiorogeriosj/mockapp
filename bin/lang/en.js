var colors = require('colors');
module.exports = {

    CORDOVA_NOT_INSTALLED : "\nCordova not installed, run command: ".red + "npm install cordova -g".white,
    VERSION_INSTALED: "Version instaled",
    ERROR_EXEC_MOCKAPP: "OMG :(\nError in mockapp\n",
    WRITE_LANG_NOT_FOUND: "Message to show not found!".red,
    START_NEW_APP: "Creating new app...".green,
    START_PREVIEW_APP: "Starting preview app...".green,
    START_BUILD_APP: "Starting build app...".green,
    START_ADD_PLATFORM: "Adding platform...".green,
    START_JAVA_INSTALL: "Starting install Java JDK...".green,
    START_ANDROID_INSTALL: "Starting install Android SDK...".green,
    START_ADD_ICONS_APP: "Adding icons pack...".green,
    ERROR_CORDOVA: "Error exec cordova: ".red,
    APP_NAME_NOT_FOUND_NEW_APP: " Ops! ".bgRed.white + " You must enter the name of the app, eg mockapp new MyFirstApp.",
    APP_NAME_NOT_FOUND_DELETE_APP: " Ops! ".bgRed.white + " You must enter the name of the app, eg mockapp delete MyFirstApp.",
    PARAMS_INCORRECT_NEW_APP: " Ops! ".bgRed.white + " The app's name was reported incorrectly, examples: \nmockapp new MyFirstApp \nor \nmockapp new \"My First app\"",
    APP_CREATED_SUCCESS: " Cool! ".bgGreen.black + " Successfully created app :)",
    APP_DELETED_SUCCESS: " Cool! ".bgGreen.black + " Successfully deleted app :)",
    BUILD_SUCCESS: " Cool! ".bgGreen.black + " Build successfully app :)",
    INSTALL_JAVA_SUCCESS: " Cool! ".bgGreen.black + " Java JDK successfully installed :)",
    INSTALL_ANDROID_SUCCESS: " Cool! ".bgGreen.black + " Android SDK successfully installed :)",
    ADD_ICONS_SUCESS: " Cool! ".bgGreen.black + " Pack icons successfully added :)\nRun: mockapp icons to see your icons!",
    ID_APP_INVALID: " Ops! ".bgRed.white + " Informed id is not available, try another.",
    APP_EXISTS: " Ops! ".bgRed.white + " An app with this name already exists in this directory, choose another name or delete the existing one.",
    START_DELETE_APP: "Deleting application...".green,
    APP_NOT_EXIST_IN_DIRECTORY: " Ops! ".bgRed.white + " This app does not exist in this directory.",
    NOT_DELETED_APP: " Ops! ".bgRed.white + " Could not delete the application.",
    CONFIRMATION_DELETE_APP: "Do you want to delete the application? (yes/no) ",
    ANSWER_YES: "yes",
    ANSWER_NO: "no",
    COMMAND_NOT_FOUND: " Ops! ".bgRed.white + " Command not found, for check docs mockapp run: mockapp docs.",
    YOU_NOT_INTO_PROJECT: " Ops! ".bgRed.white + " You are not in the folder of a project.",
    UPDATE_CONFIG: " Warning! ".bgYellow.black + " Leave blank for no change!",
    UPDATE_CONFIG_NEW_ID: "Enter a new value for id: ",
    UPDATE_CONFIG_NEW_NAME: "Enter a new value for name: ",
    UPDATE_CONFIG_NEW_VERSION: "Enter a new value for version: ",
    UPDATE_CONFIG_FAILED:  " Ops! ".bgRed.white + " Unable to change settings :(",
    UPDATE_CONFIG_SUCCESS:  " Cool! ".bgGreen.black + " Successfully changed configs :)",
    PREVIEW_RUNING_ON:  " Cool! ".bgGreen.black + " Preview running on port: ",
    PREVIEW_STOP: " Warning! ".bgYellow.black + " Press Ctrl+c to stop the preview!",
    COMPONENT_NOT_INSTALLED: "This component not installed!",
    PLATFORM_NOT_INFORMED_BUILD: " Ops! ".bgRed.white + " You must enter the platform, eg mockapp build android.",
    PLATFORM_ADDED: " Cool! ".bgGreen.black + " Platform successfully added!",
    PLATFORM_NOT_SUPPORTED: " Ops! ".bgRed.white + " Unsupported informed platform, see documentation for more details: mockapp docs.",
    DOWNLOAD_ANDROID_SDK: "Downloading android sdk for your S.O...".green,
    DOWNLOAD_FAILED: " Ops! ".bgRed.white + " Download failed :(\nPlease try again later or make manual installation SDK, see: mockapp docs.",
    DOWNLOADING: " Progress",
    BUIDING_APP: "Building app...",
    INSTALLING_JAVA: "Installing Java JDK...",
    INSTALLING_ANDROID: "Installing Android SDK...",
    VERIFY_ENVIRONMENT: "Checking dependencies...".green,
    TYPE_NOT_FOUND_ADD: " Ops! ".bgRed.white + " You must tell what will add the app.",
    TYPE_NOT_EXIST_ADD: " Ops! ".bgRed.white + " The type entered is not valid.",
    NAME_NOT_FOUND_ADD_CONTROLLER: " Ops! ".bgRed.white + " You must inform the controller name.",
    NAME_NOT_FOUND_ADD_SERVICE: " Ops! ".bgRed.white + " You must inform the service name.",
    NAME_NOT_FOUND_ADD_PAGE: " Ops! ".bgRed.white + " You must inform the page name.",
    ADD_CONTROLLER_FAILED: " Ops! ".bgRed.white + " Could not create controller :(",
    ADD_SERVICE_FAILED: " Ops! ".bgRed.white + " Could not create service :(",
    ADD_PAGE_FAILED: " Ops! ".bgRed.white + " Could not create a new page :(",
    ADD_ICONS_FAILED: " Ops! ".bgRed.white + " Unable to add the icon pack :(",
    CONTROLLER_EXISTS_THIS_NAME: " Ops! ".bgRed.white + " There is already a controller with that name.",
    SERVICE_EXISTS_THIS_NAME: " Ops! ".bgRed.white + " There is already a service with that name.",
    PAGE_EXISTS_THIS_NAME: " Ops! ".bgRed.white + " There is already a page with that name.",
    ICONS_EXISTS_THIS_NAME: " Ops! ".bgRed.white + " There is already an icon pack added to the name.",
    PARAMS_INCORRECT_ADD_CONTROLLER: " Ops! ".bgRed.white + " The controller's name was reported incorrectly, eg: \nmockapp add controller userController",
    PARAMS_INCORRECT_ADD_SERVICE: " Ops! ".bgRed.white + " The service's name was reported incorrectly, eg: \nmockapp add service userService",
    PARAMS_INCORRECT_ADD_PAGE: " Ops! ".bgRed.white + " The page's name was reported incorrectly, eg: \nmockapp add page user",
    PARAMS_INCORRECT_ADD_ICONS: " Ops! ".bgRed.white + " The URL of the icon pack was informed incorrectly, eg: \nmockapp add icons http://www.flaticon.com/packs/material-design",
    ADD_PAGE_SUCCESS: " Cool! ".bgGreen.black + " Page created successfully :) ",
    ADD_ROUTE_SUCCESS: " Cool! ".bgGreen.black + " Route added successfully :) ",
    NAME_NOT_FOUND_ADD_ICONS: " Ops! ".bgRed.white + " You must enter the URL of the icon pack.",

    THERE_IS_NEW_VERSION: function(packageJson){
      console.log("                                               ".bgYellow.black);
      console.log("  Hey bro, there is a new version: ".bgYellow.black + packageJson.version.bgYellow.black + "       ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
      console.log("  No panic, just update mockapp:               ".bgYellow.black);
      console.log("  npm install -g mockapp                       ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
    },
    ADD_CONTROLLER_SUCCESS: function(obj){
      console.log(" Cool! ".bgGreen.black + " Controller successfully created :)");
      console.log("Path:", obj.fileName.yellow);
      if(!obj.notShowMessage){
        console.log("Add the attribute down in his element:");
        console.log("<div ", "ng-controller=\"".yellow+obj.name.yellow+"\"".yellow, "></div> ");
      }
    },
    EXAMPLE_GOTO_PAGE: function(name){
      console.log("Add the attribute down in his element:");
      console.log("<button ", "ng-click=\"goToPage(".yellow+obj.name.yellow+")\"".yellow, "></button> ");
    },
    ADD_SERVICE_SUCCESS: function(obj){
      console.log(" Cool! ".bgGreen.black + " Service successfully created :)");
      console.log("Path:", obj.fileName.yellow);
      console.log("Import the service in your controller:");
      console.log("app.controller('nameController', ['$scope,', '"+obj.name.yellow+"', function($scope, "+obj.name.yellow+") { ");
    },
    SHOW_MESSAGE_FROM_REPO: function(msg){
      console.log(msg["en"] ? msg["en"].bgYellow.black : msg[lang].bgYellow.black);
    },
    SHOW_CONFIG_APP: function (config){
      console.log(" Info! ".bgCyan.black + " Config your app: ");
      console.log("id: "+config.id);
      console.log("name: "+config.name);
      console.log("version: "+config.version);
    },
    NEED_INSTALL_ENVIRONMENT: function (){
      console.log("");
      console.log("                                               ".bgYellow.black);
      console.log("  Your environment is not prepared to generate ".bgYellow.black);
      console.log("  the final application, but without panic!    ".bgYellow.black);
      console.log("  Let mockapp care of it :)                    ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
      console.log("  Relax and wait completion of the install!    ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
      console.log("");
    },
    CHANGE_INDEX_ADD_CONTROLLER_FAILED: function (file){
      console.log(" Ops! ".bgRed.white + " Unable to import file.");
      console.log(" Add the index.html file the code below: ");
      console.log(' <script src="js/controllers/'+file+'"></script> ');
    },
    CHANGE_INDEX_ADD_CSS_FAILED: function (file){
      console.log(" Ops! ".bgRed.white + " Unable to import file.");
      console.log(" Add the index.html file the code below: ");
      console.log(' <link rel="stylesheet" type="text/css" href="icons/'+file+'.css"> ');
    }
}
