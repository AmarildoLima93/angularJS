'use strict';

// Controller do index
var indexCtrl = function($scope) {

}

// Controller da home
var homeCtrl = function($scope) {
	$scope.page = 'Home Page';

	// Iniciando os valores
	$scope.names = [{name:'Nome1',sobrenome:'Sobrenome1'},{name:'Nome2',sobrenome:'Sobrenome2'},{name:'Nome3',sobrenome:'Sobrenome3'}]
}

// Controller da página about
var aboutCtrl = function($scope) {
	$scope.page = 'About Page';
}

// Controller da página contato
var contactCtrl = function($scope) {
	$scope.page = 'Contact Page';
}

// Declaração dos controllers
appStore
	.controller('indexCtrl',['$scope',indexCtrl])
	.controller('homeCtrl',['$scope',homeCtrl])
	.controller('aboutCtrl',['$scope',aboutCtrl])
	.controller('contactCtrl',['$scope',contactCtrl])