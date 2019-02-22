'use strict';


//creating new shopping items from item input

//check - add and remove strikethrough

//delete items



function main() {
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(event.target).parents('li').remove();
  });
}

$(main);