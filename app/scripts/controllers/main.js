'use strict';

/**
 * @ngdoc function
 * @name sdpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdpApp
 */
angular.module('sdpApp')
  .controller('MainCtrl', function ($scope,appDataSvc, $timeout, $interval) {

    var docs = appDataSvc.docs;


      $scope.loanData = appDataSvc.loanData;

      $scope.stats = appDataSvc.stats;

      console.log($scope.stats)

      $scope.stats = {
        aq : {
          totalDocs : 1137,
          hourDocs  : 134,
          timeout   : 25
        },
        qq : {},
        cq : {}
      }


      $scope.statsAQ = {
        totalDocs : 1137,
        hourDocs  : 134,
        timeout   : 25,
        approved : 1465,
        markas  : 367,
        declined : 201
      }

      $scope.statsQQ = {
        totalDocs : 4453,
        hourDocs  : 334,
        timeout   : 25,
        approved : 512,
        markas  : 323,
        declined : 1245
      }

      $scope.statsCQ = {
        totalDocs : 6453,
        hourDocs  : 1260,
        timeout   : 25,
        approved : 512,
        markas  : 323,
        declined : 1245
      }

      $interval(updateStats, 3000);


      function updateStats() {
          var range = 30;
          $scope.statsAQ.totalDocs = 1137 + Math.floor((Math.random() * 200) + 1);
          $scope.statsAQ.hourDocs = 134 + Math.floor((Math.random() * range) + 1);
          $scope.statsAQ.timeout = 25 + Math.floor((Math.random() * range) + 1);

          $scope.statsQQ.totalDocs = 4453 + Math.floor((Math.random() * 200) + 1);
          $scope.statsQQ.hourDocs = 334 + Math.floor((Math.random() * range) + 1);
          $scope.statsQQ.timeout = 25 + Math.floor((Math.random() * range) + 1);

          $scope.statsCQ.totalDocs = 6453 + Math.floor((Math.random() * 200) + 1);
          $scope.statsCQ.hourDocs = 1260 + Math.floor((Math.random() * range) + 1);
          $scope.statsCQ.timeout = 25 + Math.floor((Math.random() * range) + 1);
      }

  });
