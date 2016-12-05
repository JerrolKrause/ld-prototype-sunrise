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
        $scope.MessageData = appDataSvc.messages;
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

        angular.forEach($scope.loanCurrent.docs, function(value,index){
          if(value.queueStatus === 'declined' || value.queueStatus2 === 'declined'){
            value.hasAction = true;
          }

        });


      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

      console.log($scope.loanCurrent);

  });
