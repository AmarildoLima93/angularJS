'use strict';

// Controller do index
var indexCtrl = function($scope) {
}

// Controller da home
var homeCtrl = function($scope) {
}

// Controller da página about
var aboutCtrl = function($scope) {
}

// Controller da página contato
var contactCtrl = function($scope) {
}


// Declaração dos controllers
appStore
	.controller('indexCtrl',['$scope',indexCtrl])
	.controller('homeCtrl',['$scope',homeCtrl])
	.controller('aboutCtrl',['$scope',aboutCtrl])
	.controller('contactCtrl',['$scope',contactCtrl])