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

      $scope.searchDocs = function(){
        console.log('searching');
        $scope.titleText = 'Result Found';
        $scope.loanData = [appDataSvc.loanData[0]];
      }

      $scope.searchClear = function(){
        $scope.loanData = appDataSvc.loanData;
        $scope.titleText = null;
      }

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
  });
