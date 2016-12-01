angular.module('sdpApp')
  .controller('QualifyExamCtrl', function ($scope,appDataSvc, $state,$stateParams) {

    //Load default loan and docs into page
    $scope.loanCurrent = appDataSvc.loanData[0];
    $scope.docCurrent1 = $scope.loanCurrent.docs[0];

    $scope.docCurrent1.pane1 = true;

    $scope.pane1index = 0;
    $scope.pane2index = 0;


    /**
    * Load a document into pane 1 or pane 2. Used for doc index interaction on right sidebar
    */
    $scope.loadDocumentPane = function(doc, paneNum, index){

      $scope['pane' + paneNum + 'index'] = index;

      if(doc['pane'+paneNum]){
         doc['pane'+paneNum] = false;
         $scope['docCurrent'+paneNum] = null;
      } else {
          angular.forEach($scope.loanCurrent.docs, function(value,index){
              value['pane'+paneNum] = false;
          });
          doc['pane'+paneNum] = true;
          $scope['docCurrent'+paneNum] = doc;
        }
    }//end loadDocumentPane


    /**
    * Change the current document in a pane without knowing the current doc. Used for previous/next button
    */
    $scope.changeDoc = function(paneNum,newDocIndex){

      $scope['pane' + paneNum + 'index'] = newDocIndex;

      $scope['docCurrent'+paneNum] = $scope.loanCurrent.docs[newDocIndex];

      angular.forEach($scope.loanCurrent.docs, function(value,index){
          value['pane'+paneNum] = false;
      });
      $scope.loanCurrent.docs[newDocIndex]['pane'+paneNum] = true;
    }//end changeDoc


  });
