﻿
(function () {
    "use strict";

    // get existing module
    angular.module("app-trips")
           .controller("tripsController", tripsController);

    function tripsController($http) {
        var vm = this;
        vm.trips = [];
        vm.errorMessage = "";
        vm.isBusy = true;

        $http.get("/api/trips")
             .then(function (response) {
                 // success
                 angular.copy(response.data, vm.trips);
             }, function (error) {
                 // failure
                 vm.errorMessage = "Failed to load data: " + error;
             })
             .finally(function () {
                 //vm.isBusy = false;
             });

        vm.newTrip = {};

        vm.addTrip = function () {
            vm.isBusy = true;
            vm.errorMessage = "";

            $http.post("/api/trips", vm.newTrip)
                 .then(function (response) {
                     vm.trips.push(response.data);
                     vm.newTrip = {};
                 }, function () {
                     vm.errorMessage = "Failed to save trip";
                 })
                 .finally(function () {
                     vm.isBusy = false;
                 });
        };
    }

})();