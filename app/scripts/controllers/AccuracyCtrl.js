'use strict';

/**
 * @ngdoc function
 * @name sdpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdpApp
 */
angular.module('sdpApp')
  .controller('AccuracyCtrl', function ($scope,appDataSvc) {

    var docs = appDataSvc.docs;


      $scope.loanData = appDataSvc.loanData;

      $scope.stats = appDataSvc.stats;

      console.log($scope.stats)
  });
