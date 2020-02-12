/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

$(function() {
    
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    //$(".js-shopping-list-entry").empty();
       
    const item = $(this).find(
      'input[name="shopping-list-entry"]').val();
         
    const buttonDiv = $(this).find(
      '.shopping-item-controls').html();
      
    $('ul').append(
      '<li>' +
        //"<span class=\"shopping-item\">"+
        '<span class = "shopping-item">' +
        [item] +
        '</span>' +
        //"<div class=\"shopping-item-controls\">"+
        '<div class = "shopping-item-controls">'+
      // [buttonDiv] +
        '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
        '</button>' + 
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
        '</button>' +
        '</div>' +
        '</li>');   
  
    $('.js-shopping-list-entry').val(''); 
      
  });
  
  $('.shopping-list').on('click','.shopping-item-toggle',function(event) {
    const targetItem = $(event.currentTarget).closest('li');
    targetItem.find('.shopping-item').toggleClass('shopping-item__checked');
  });
   
  $('.shopping-list').on('click','.shopping-item-delete',function(event) {
    const delItem = $(event.currentTarget).closest('li');
    delItem.remove();
  });
});