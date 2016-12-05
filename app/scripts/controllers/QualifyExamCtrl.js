angular.module('sdpApp')
  .controller('QualifyExamCtrl', function ($scope,appDataSvc, $state,$stateParams) {

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
      $scope.docNext = appDataSvc.loanData[1]
    }

    sortDocs();

    $scope.docCurrent1 = $scope.docsReviewing[0];

    if($scope.docCurrent1){
      $scope.docCurrent1.pane1 = true;
    }

    $scope.pane1index = 0;
    $scope.pane2index = 0;


    angular.forEach($scope.loanCurrent.docs, function(value,key){
      console.log(JSON.stringify(value));


    });



    /**
    * Load a document into pane 1 or pane 2. Used for doc index interaction on right sidebar
    */
    $scope.loadDocumentPane = function(paneNum, index){

      if($scope.loanCurrent.docs[index]['pane'+paneNum]){
        console.log('I exist already')
        $scope['docCurrent'+paneNum] = null;
        $scope.loanCurrent.docs[index]['pane'+paneNum] = false;
      } else {
      //Set the current active doc of the selected pane to this one
       $scope['docCurrent'+paneNum] = $scope.loanCurrent.docs[index];

       angular.forEach($scope.loanCurrent.docs, function(value,index){
           value['pane'+paneNum] = false;
       });
       //Set current doc to this pane true
       $scope.loanCurrent.docs[index]['pane'+paneNum] = true;
     }



    }//end loadDocumentPane


    /**
    * Change the current document in a pane without knowing the current doc. Used for previous/next button
    */
    $scope.changeDoc = function(paneNum,newDocIndex){
      $scope['pane' + paneNum + 'index'] = newDocIndex;
      $scope['docCurrent'+paneNum] = $scope.docsReviewing[newDocIndex];

      angular.forEach($scope.docsReviewing, function(value,index){
          value['pane'+paneNum] = false;
      });

      angular.forEach($scope.docsApproved, function(value,index){
          value['pane'+paneNum] = false;
      });

      if($scope.docsReviewing[newDocIndex]){
        $scope.docsReviewing[newDocIndex]['pane'+paneNum] = true;
      }
    }//end changeDoc


    /**
    * Change the status of a document. Supports approved, declined and new
    */
    $scope.changeStatus = function(doc,paneNum,newStatus){
      doc.status = newStatus;
      sortDocs();

      $scope.changeDoc(paneNum,0);
    }//end changeStatus


    /**
    * Go to the next loan
    */
    $scope.nextLoan = function(LoanID){
      $('.modal').on('hidden.bs.modal', function (e) {
        $state.go('qualify.examination',{ LoanID: LoanID });
      });
    }//end nextLoan


    function sortDocs(){
      $scope.docsReviewing = [];
      $scope.docsBorrower = [];
      $scope.docsApproved = [];

      //Loop through the docs in this loan and sort them based on their status
      angular.forEach($scope.loanCurrent.docs, function(value,key){
        value.id = key;
        if(value.status === 'new'){
          $scope.docsReviewing.push(value);
        } else if(value.status === 'requested'){
          $scope.docsBorrower.push(value);
        } else if(value.status === 'approved'){
          $scope.docsApproved.push(value);
        }
      });

      //Sort docs in this loan
      var sortedDocs = $scope.docsReviewing.sort(function(a,b){
           return a.status <b.status?1:a.status >b.status?-1:0
      });
    }


  });
