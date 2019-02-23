'use strict';

function main() {
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(event.target).parents('li').remove();
  });

  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(event.target).parents('li').children('span').toggleClass('shopping-item__checked');
  });

  $('form').on('submit', function(event){
    event.preventDefault();
    let newItemName = $('#shopping-list-entry').val();
    if (newItemName !== '') {
      let newHtml = `
      <li>
          <span class="shopping-item">${newItemName}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
             <span class="button-label">delete</span>
           </button>
          </div>
      </li>`;
      $('ul').append(newHtml);
    }
  });
}

$(main);