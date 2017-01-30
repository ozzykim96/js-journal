/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

// Register `journalEdit` component, along with its associated controller and template
angular.
    module('journalEdit').
    component('journalEdit', {
        templateUrl: 'js/journal-edit/journal-edit.template.html',
        controller: ['Journal',
        function JournalEditController(Journal) {
            this.title = "";
            this.content = "";
            
            this.save = function() {
                var item = {
                    title: this.title,
                    date: '2016-01-30',
                    content: this.content
                };
                
                console.log(item.title);
                console.log(item.content);
                console.log('click save.');
                
                Journal.add(item);
            };
            
            this.cancel = function() {
                console.log('click cancel.');
            };
        }
      ]
    });

