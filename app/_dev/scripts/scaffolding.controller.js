'use strict';

/**
 * @ngdoc function
 * @name sdpApp.controller:DemosCtrl
 * @description
 * # DemosCtrl
 * Controller of the sdpApp
 */
angular.module('sdpApp')
        /**
         * Manages logic for the scaffolding page
         * @param {type} $scope
         * @param {type} scaffolding
         * @param {type} $sanitize
         * @returns {undefined}
         */
        .controller('ScaffoldsCtrl', function ($scope, scaffolding, $sanitize, $q) {



            //Wait for all promises to resolve
            $q.all([scaffolding.get('messages'), scaffolding.get('messages')]).then(function (results) {
                $scope.messages     = results[0];
            });

            //Return a list of messages from the server and populate the content on the page
            $scope.update = function () {
                scaffolding.messages().query(function (value) {
                    $scope.messages = value;
                });
            }; //end update


            //Sends a message from the tool to the server
            $scope.addMessage = function () {
                //Reset status on every submit attempt
                $scope.status = null;

                //If a message is not present or is empty, show error message
                if (!$scope.message && $scope.message !== '') {
                    $scope.status = 'warning';

                    //If message is present  
                } else {
                    //Save message to the server
                    //{message:  $sanitize($scope.message.content), email: 'saimon@devdactic.com'}
                    scaffolding.messages().save({}, {
                        'name': 'Martin Testco',
                        'isCustomer': true,
                        'date': 'Just Now',
                        'new': true,
                        'message': $sanitize($scope.message.content)
                    },
                    //On success
                            function () {
                                $scope.status = 'success';
                                //Empty message text box
                                $scope.message = null;
                                $scope.update(true);
                            },
                            //On failure
                                    function (value) {
                                        $scope.status = 'error';
                                        console.log(value);
                                    });
                        }
            }; //end addMessage

            $scope.update();




        });