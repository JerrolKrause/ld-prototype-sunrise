'use strict';

/**
 * @ngdoc service
 * @name sdpApp.contacts
 * @description
 * # contacts
 * Service in the sdpApp.
 */
angular.module('sdpApp')
        /**
         * Passes rest API between between the controllers and the template cache
         * @param {type} cacheResource - Angular service that manages the template cache
         * @returns {scaffolding_L14.data}
         */
        .service('scaffolding', function (cacheResource, $q) {

            var params = {userID: 1};

            var data = {
                messages: function () {
                    return cacheResource('/api/messages/:userID', params);
                }
            };
            
            
            /**
             * Perform a get request against an API and returns a promise
             * @param {type} resource - Name of the API found in this file
             * @returns {$q@call;defer.promise} - Returns a promise
             */
            data.get = function (resource) {
                var d = $q.defer();
                var result = data[resource]().get({}, function () {
                    d.resolve(result);
                });
                return d.promise;
            };
            
            return data;
        });