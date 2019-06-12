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

  return {
    getItems,
    createItem
  };
})();

