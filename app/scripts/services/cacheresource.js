'use strict';

/**
 * @ngdoc service
 * @name sdpApp.cacheResource
 * @description - This service serves as a caching mechanism for REST API calls so that POST/PUT/DELETE automatically refreshes the cache.
 * # cacheResource
 Cache invalidation on post/put/delete
 http://stackoverflow.com/questions/25117388/invalidate-resource-cache-after-post-request
 http://plnkr.co/edit/lIQw4uogcoMpcuHTWy2U?p=preview
 */
angular.module('sdpApp')
        /**
         * Caches rest API calls and stores in angular cache factory. Removes cache listing on post/put/delete
         * @param {type} $resource
         * @param {type} $cacheFactory
         * @returns {Function}
         */
        .service('cacheResource', function ($resource, $cacheFactory) {

            //Create a cache factory
            var cache = $cacheFactory('resourceCache');

            //Remove an element from the cache factory
            var interceptor = {
                response: function (response) {
                    cache.remove(response.config.url);
                    console.log('cache removed:', response.config.url);
                    return response;
                }
            };

            //This is the main RESTFUL API call with the interceptor loaded
            //If put/post/delete is specified then the API call is made and the cache element is refreshed automatically
            //Get request only return from the cache
            return function (url, paramDefaults, actions, options) {
                actions = angular.extend({}, actions, {
                    'get': {method: 'GET', cache: cache},
                    'query': {method: 'GET', cache: cache, isArray: true},
                    'create': {method: 'POST', interceptor: interceptor},
                    'update': {method: 'PUT', interceptor: interceptor},
                    'remove': {method: 'DELETE', interceptor: interceptor},
                    'delete': {method: 'DELETE', interceptor: interceptor}
                });

                var resource = $resource(url, paramDefaults, actions, options);
                return resource;
            };
        })


        /**
         * Alternative method of caching get requests
         * @param {type} $resource
         * @param {type} $cacheFactory
         * @returns {Function}
         */
        .service('cacheResource2', function ($resource, $cacheFactory,$http) {

            var data = {};
            //Create a cache factory
            var cache = $cacheFactory('cp');
                /*
                 * Get all documents for this user
                 */
                data.getDocs = function (update) {
                    var docAPI = '/DocPortal/GetDocumentList';
                    //If update is true, remove cached version
                    if (update) {cache.remove(docAPI);}
                    //If cache version is avaiable return that, if not perform HTTP request
                    return cache.get(docAPI) || cache.put(docAPI, $http.get(docAPI).then(function (response) {
                        return response.data;
                    }));

                };
             return data;
        });
