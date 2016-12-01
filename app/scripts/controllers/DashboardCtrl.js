'use strict';

/**
 * @ngdoc function
 * @name sdpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdpApp
 */
angular.module('sdpApp')
  .controller('DashboardCtrl', function ($scope,appDataSvc, $state,$stateParams) {

    var docNum = 0;
    $scope.vm = {reviewDocData:{}};
    $scope.docNames = appDataSvc.docNames;


    /**
    *Rotate an element using css3 transforms. Only rotates 90 degrees
    */
    var docPos = 0;
    $scope.rotate = function(int){

      if(int){
        docPos -= 90;
      } else {
        docPos += 90;
      }

      if(docPos >= 360 || docPos <= -360){
        docPos = 0;
      }

      if(docPos < 0){
        docPos = 360 - Math.abs(docPos);
      }

      $scope.docRotateClass = 'rot' + docPos;
    }//end $scope.rotate


    $scope.updateDocStatus = function(){
        docNum ++;
        $scope.vm.reviewDocData = {};
        docPos = 0;
        $scope.docRotateClass = '';
        $scope.documentActive = appDataSvc.loanData[docNum].docs[0];

    }
    $scope.updateDocStatus();


  });
