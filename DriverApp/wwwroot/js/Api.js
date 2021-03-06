﻿'use strict';

(function () {
	var app = angular.module('app');
	app.service('Api', function ($http) {

		this.checkSession = function () {
			return $http.get('/api/manager');
		}

		this.authenticate = function (key) {
			return $http.post('/api/login/manager', { customerKey: key });
		}

		this.sendNewOrder = function(orders) {
			return $http.post('/api/manager/newOrders', {orders});
		}

		this.getOrders = function() {
			return $http.get('/api/routing/orders/unassigned').then(function(res) {
				return res.data;
			});
		}

		this.getDrivers = function() {
			return $http.get('/api/manager/drivers').then(function(res) {
				return res.data;
			});
		}

		this.triggerRouting = function(driverId) {
			return $http.post('/api/routing/trigger', {driverId});
		}

		this.assignOrders = function(orders, driverId) {
			return $http.post('/api/manager/assignOrders', {orders, driverId});
		}

		this.getTrips = function() {
			return $http.get('/api/manager/trips').then(function(res) {
				return res.data;
			});
		}

		this.getTripOrders = function(tripId) {
			return $http.get('/api/routing/orders/' + tripId);
		}

	});
})();
