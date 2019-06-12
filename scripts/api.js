'use strict';

let api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andrew-colleen';

  function getItems() {
    return fetch(`${BASE_URL}/items`)
      .then(res => {
        return res;
      });
    // return Promise.resolve('A successful response.');
  }

  return {
    getItems
  };
})();

