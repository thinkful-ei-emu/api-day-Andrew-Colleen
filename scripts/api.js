'use strict';

let api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andrew-colleen';

  function apiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) error = { code: res.status };

        return res.json();
      })
      .then(resJson => {
        if (error) {
          error.message = resJson.message;
          return Promise.reject(error);
        }

        return resJson;
      });
  }

  function getItems() {
    return apiFetch(`${BASE_URL}/items`);
  }

  function createItem(name) {
    const shoppingItem = { name };
    return apiFetch(`${BASE_URL}/items`, 
      { method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(shoppingItem)
      });
  }

  function updateItem(id, updateData) {
    return apiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });
  }
  
  function deleteItem(id) {
    const deletedItem = {id};
    return apiFetch(`${BASE_URL}/items/${id}`, {
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

