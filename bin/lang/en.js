var colors = require('colors');
module.exports = {

    CORDOVA_NOT_INSTALLED : "\nCordova not installed, run command: ".red + "npm install cordova -g".white,
    VERSION_INSTALED: "Version instaled",
    ERROR_EXEC_MOCKAPP: "OMG :(\nError in mockapp\n",
    WRITE_LANG_NOT_FOUND: "Message to show not found!".red,
    START_NEW_APP: "Starting preview app...".green,
    START_PREVIEW_APP: "Starting preview app...".green,
    START_BUILD_APP: "Starting build app...".green,
    START_ADD_PLATFORM: "Adding platform...".green,
    ERROR_CORDOVA: "Error exec cordova: ".red,
    APP_NAME_NOT_FOUND_NEW_APP: " Ops! ".bgRed.white + " You must enter the name of the app, eg mockapp new MyFirstApp.",
    APP_NAME_NOT_FOUND_DELETE_APP: " Ops! ".bgRed.white + " You must enter the name of the app, eg mockapp delete MyFirstApp.",
    PARAMS_INCORRECT_NEW_APP: " Ops! ".bgRed.white + " The app's name was reported incorrectly, examples: \nmockapp new MyFirstApp \nor \nmockapp new \"My First app\"",
    APP_CREATED_SUCCESS: " Cool! ".bgGreen.black + " Successfully created app :)",
    APP_DELETED_SUCCESS: " Cool! ".bgGreen.black + " Successfully deleted app :)",
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


    THERE_IS_NEW_VERSION: function(packageJson){
      console.log("                                               ".bgYellow.black);
      console.log("  Hey bro, there is a new version: ".bgYellow.black + packageJson.version.bgYellow.black + "       ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
      console.log("  No panic, just update mockapp:               ".bgYellow.black);
      console.log("  npm install -g mockapp                       ".bgYellow.black);
      console.log("                                               ".bgYellow.black);
    },
    SHOW_MESSAGE_FROM_REPO: function(msg){
      console.log(msg["en"] ? msg["en"].bgYellow.black : msg[lang].bgYellow.black);
    },
    SHOW_CONFIG_APP: function (config){
      console.log(" Info! ".bgCyan.black + " Config your app: ");
      console.log("id: "+config.id);
      console.log("name: "+config.name);
      console.log("version: "+config.version);
    }

}
