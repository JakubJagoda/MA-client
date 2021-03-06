//modules required for application bootstrap
import appRoutesConfig from './app.routes';
import { appConfigPhase, appRunPhase } from './app.config';
import constants from './constants';

//bootstrap the modules
angular.module('MA', [
        'MA.core',
        'MA.user',
        'MA.shoppingList',
        'MA.appState',
        'MA.sync',
        'MA.rating'
    ])
    .config(appConfigPhase)
    .config(appRoutesConfig)
    .run(appRunPhase);

angular.module('MA.core', [
    'MA.constants',
    'ui.router',
    'angularLocalStorage',
    'angular-jwt'
]);

//add constants
const constantsModule = angular.module('MA.constants', []);
constants.forEach((value:any, name:string) => constantsModule.constant(name, value));

//import modules
import './modules/user/user.module';
import './modules/shoppingList/shoppingList.module';
import './modules/appState/appState.module';
import './modules/rating/rating.module.ts';
