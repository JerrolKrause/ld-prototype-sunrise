'use strict';

/**
 * @ngdoc function
 * @name sdpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdpApp
 */
angular.module('sdpApp')
  .controller('CommunicationCtrl', function ($scope,appDataSvc) {

    $scope.docs = appDataSvc.docs;

  });
