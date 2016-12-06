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

      $scope.step = 1;

        $scope.borrowerEmail = {};
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

          if(value.queueStatus === 'approved' && value.queueStatus2 === 'approved'){
            value.hasAction = true;
          }


        });


        $scope.removeDoc = function(doc){
          doc.deleted = true;
        }



      $scope.SendMessage = function(){
          var obj = {AddedBy:"Mark Hansen",AddedByType:"Borrower",AddedOn:"2016-12-03T15:55:15.603",Msg:$scope.Message.message};
          $scope.MessageData.Message.push(obj);
      }


      $scope.reviewDocData = {};
      $scope.requestDocs = function(){

        angular.forEach($scope.reviewDocData.isAcceptAs, function(value,key){
                var obj = {
                    label:value,
                    notes:$scope.reviewDocData.notes,
                    status:"requested"
                  };
                  $scope.loanCurrent.docs.unshift(obj);
        });
      }

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });

      $(function () {
        $('[data-toggle="popover"]').popover()
      })

      console.log($scope.loanCurrent);
  });
