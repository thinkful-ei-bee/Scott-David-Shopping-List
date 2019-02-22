'use strict';


//creating new shopping items from item input

//check - add and remove strikethrough




function main() {
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(event.target).parents('li').remove();
  });

  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(event.target).parents('li').children('span').toggleClass('shopping-item__checked');
  });
}

$(main);