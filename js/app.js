'use strict';

// Função de tratamento das rotas
var appModule = function($routeProvider,$locationProvider) {
	// Tirando # e ! da url
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
	
	// ROTAS
	$routeProvider
		.when('/',{
			templateUrl: 'template/home.html',
			controller: 'homeCtrl'
		})
		.when('/about',{
			templateUrl: 'template/about.html',
			controller: 'aboutCtrl'
		})
		.when('/contact',{
			templateUrl: 'template/contact.html',
			controller: 'contactCtrl'
		})
		.otherwise({redirectTo:'/'});
}


// Declarando a variavel APP para todo o site
window.appStore = angular.module('angularJS',['ngRoute'])

// Iniciando o APP
appStore
	.config(appModule)