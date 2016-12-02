'use strict';

/**
 * @ngdoc function
 * @name sdpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdpApp
 */
angular.module('sdpApp')
  .controller('CommunicationExamCtrl', function ($scope,appDataSvc, $state,$stateParams) {

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
