"use strict";

var app = angular.module("Bangazon_Client", ["ngRoute"]).constant('apiUrl', "http://localhost:8000");

angular.module("Bangazon_Client").config(['$interpolateProvider', '$routeProvider',
 function($interpolateProvider, $routeProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');

	$routeProvider
		.when('/', {
			controller: "AuthController",
			templateURL: "/partials/login.html"
		})
		.when('/register', {
			controller: "RegisterController",
			templateURl: "/partials/register.html"
		})
		.when('/products', {
			controller: "ProductController",
			templateURL: "/partials/products.html"
		})
		.when('/types', {
			controller: "ProductTypesContoller",
			tmplateURL: "/partials/producttype.html"
		});

}]);