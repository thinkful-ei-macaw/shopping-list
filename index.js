'use strict';

$(document).ready(function(){

  // the shopping list DOM element
  let $list = $('.shopping-list');

  // the form DOM element
  let $form = $('#js-shopping-list-form');
  $form.submit(function(e){
    // prevent form submission
    e.preventDefault();

    // get the input value
    let $input = $('#shopping-list-entry');
    let entry = $input.val();

    // require entry
    if (!entry){
      $input.focus();
      return false;
    }

    // clear the input
    $input.val('');
    
    // create a new element and append it to the list
    let newElement = `
    <li>
      <span class="shopping-item">${entry}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
    `;
    $list.append($(newElement));

  });

  // toggle the checked state
  $list.on('click', '.shopping-item-toggle', function(){
    let $listItem = $(this).closest('li'); // find the parent li element   
    let $item = $listItem.find('.shopping-item'); // find the .shopping-item element
    $item.toggleClass('shopping-item__checked'); // toggle its class
  });

  // delete the element
  $list.on('click', '.shopping-item-delete', function(){
    let $listItem = $(this).closest('li'); // find the parent li element
    $listItem.remove(); // remove the item from the containing list
  });

});