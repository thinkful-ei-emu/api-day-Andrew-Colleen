'use strict';
/* global shoppingList, store, Item, api, $ */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  // shoppingList.render();
  api.getItems()
    // .then(res => res.json())
    .then((items) => {
      items.forEach((item) => {
        // console.log(item);
        store.addItem(item);
      });
      // console.log(store.items);
      shoppingList.render();
    });
});

// store.items.push(Item.create('apples'));

// console.log(api.BASE_URL, 'test');

// api.getItems()
//   .then(res => {
//     return res.json();
//   })
//   .then(resJson => {
//     console.log(resJson, 'resJson');
//   });

// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem)=> {
//     console.log(newItem);
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items)=> {
//     console.log(items);
//   });

// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     // console.log(items);
//     const item = items[0];
//     console.log(item.name, item.id);
//     return api.updateItem(item.id, { name: 'potato' });
//   })
//   .then(res => res.json())
//   .then(() => {
//     const item = store.items[0];
//     console.log('current name: ' + item.name);
//     store.findAndUpdate(item.id, { name: 'foobar' });
//     console.log('new name: ' + item.name);
//   });
