'use strict';

/**
 * @ngdoc function
 * @name sdpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdpApp
 */
angular.module('sdpApp')
  .controller('CommunicationCtrl', function ($scope,appDataSvc, $state,$stateParams) {


        $scope.docNames = appDataSvc.docNames;

        var count = 0;
        //Get the correct loan from the loan number
        angular.forEach(appDataSvc.loanData, function(value,index){
          if(value.loanNum == $stateParams.LoanID){
            $scope.loanCurrent = value;
            $scope.docNext = appDataSvc.loanData[count + 1]
          }
          count ++;
        });

        if(!$scope.loanCurrent){
          $scope.loanCurrent = appDataSvc.loanData[0];
        }

console.log($scope.loanCurrent);

  });
