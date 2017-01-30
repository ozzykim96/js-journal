/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var journalItems = [];

function addItem(item) {
    journalItems.push(item);
}

function getItemList() {
    return journalItems;
}

function delItem(item) {
    
}

module.exports = {
    addItem: addItem,
    getItemList: getItemList,
    delItem: delItem
};


