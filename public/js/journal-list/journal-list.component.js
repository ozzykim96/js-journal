/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

// Register `journalList` component, along with its associated controller and template
angular.
    module('journalList').
    component('journalList', {
        templateUrl: 'js/journal-list/journal-list.template.html',
        controller: ['Journal',
        function JournalListController(Journal) {
            var that = this;
            Journal.getList(success, error);

            function success(response) {
                that.list = response.data;
                console.log(that.list);
            }

            function error(response) {
                console.log("error");
            }
        }
      ]
    });


