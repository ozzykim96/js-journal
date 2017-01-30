/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular.
    module('journalApp').
    config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/journal', {
                    template: '<journal-list></journal-list>'
                }).
                when('/edit', {
                    template: '<journal-edit></journal-edit>'
                }).
                otherwise('/journal');
        }
    ]);

