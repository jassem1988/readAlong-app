// split the promt to an Array
var sentence = prompt("Enter the sentence you want to read along");
var words = sentence.split(' ');
// words = $.trim(words); //one letter at a time


/////////////////////
//jQuery

$(document).ready(() => {


    for(var i = 0; i < words.length; i++) {
      //append li elements
      $('.sentence').append(`<li class="${words[i]}i">${words[i]}</li>`);

      $( `${words[i]}i` )
      .keyup(function() {
        var value = $( this ).val();
        $( `.${words[i]}i` ).text(words[i]);
      })
      .keyup();

      //append i elements
      $('.dots').append(`<li><i class="dot dot${i}${words[i]} far fa-hand-pointer"></i></li>`);

      //add on Click event
      $(`.dot${i}${words[i]}`).on('click', function() {
        $(this).toggleClass('pointer');
      });
    }

});
