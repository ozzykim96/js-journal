/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular.
  module('core.journal').
  factory('Journal', ['$http',
    function($http) {
        return {
            getList: function(successCallback, errorCallback) {
                console.log('journal: getList(/journal/list)');
                
                $http({
                    method: 'GET',
                    url: '/journal/list'
                }).then(successCallback, errorCallback);
            },
            add: function(item) {
                console.log('journal: add(/journal.list)');
                
                $http({
                    method: 'POST',
                    url: '/journal/list',
                    data: item
                }).then(function(response) {
                    console.log('success.');
                }, function(response) {
                    console.log('error.');
                });
            }
        };
    }
/*        
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
*/
  ]);

