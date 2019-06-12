'use strict';
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function(){

  /**
   * Updates the item with matching id with newData in store.items
   * 
   * @param {string} id 
   * @param {object} newData 
   */
  const findAndUpdate = function(id, newData){
    const item = this.findById(id);
    Object.assign(item, newData);
  };
  
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };


  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };


  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    findAndUpdate,
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
  };
  
}());
