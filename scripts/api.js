'use strict';

let api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andrew-colleen';

  function getItems() {
    return fetch(`${BASE_URL}/items`)
      .then(res => res);
    // return Promise.resolve('A successful response.');
  }

  function createItem(name) {
    const shoppingItem = { name };
    // JSON.stringify(shoppingItem);
    return fetch(`${BASE_URL}/items`, 
      { method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(shoppingItem)
      });
  }

  function updateItem(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });
  }
  
  function deleteItem(id) {
    const deletedItem = {id};
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deletedItem)
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})();

