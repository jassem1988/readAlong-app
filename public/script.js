// split the promt to an Array
var sentence = prompt("Enter the sentence you want to read along");
var words = sentence.split(' ');

/////////////////////
//jQuery

$(document).ready(() => {


    for(var i = 0; i < words.length; i++) {
      //append li elements
      $('.sentence').append(`<li class="${words[i]}">${words[i]}</li>`);

      $( `${words[i]}` )
      .keyup(function() {
        var value = $( this ).val();
        $( `.${words[i]}` ).text(words[i]);
      })
      .keyup();

      //append i elements
      $('.dots').append(`<li><i class="dot dot1${words[i]} far fa-hand-pointer"></i></li>`);

      //add on Click event
      $(`.dot1${words[i]}`).on('click', function() {
        $(this).toggleClass('pointer');
      });
    }

});
