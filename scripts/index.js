'use strict';
/* global shoppingList, store, Item, api */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

// console.log(api.BASE_URL, 'test');

// api.getItems()
//   .then(res => {
//     return res.json();
//   })
//   .then(resJson => {
//     console.log(resJson, 'resJson');
//   });