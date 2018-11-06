var word1 = document.querySelectorAll('.dot1');
var word2 = document.querySelectorAll('.dot2');
var word3 = document.querySelectorAll('.dot3');
var word4 = document.querySelectorAll('.dot4');
var word5 = document.querySelectorAll('.dot5');


word1.forEach (function (element) {
  element.addEventListener('click', () => {
    let active = document.querySelector('.dot1');
    active.classList.toggle('red');
  });
});

word2.forEach (function (element) {
  element.addEventListener('click', () => {
    let active = document.querySelector('.dot2');
    active.classList.toggle('red');
  });
});

word3.forEach (function (element) {
  element.addEventListener('click', () => {
    let active = document.querySelector('.dot3');
    active.classList.toggle('red');
  });
});

word4.forEach (function (element) {
  element.addEventListener('click', () => {
    let active = document.querySelector('.dot4');
    active.classList.toggle('red');
  });
});

word5.forEach (function (element) {
  element.addEventListener('click', () => {
    let active = document.querySelector('.dot5');
    active.classList.toggle('red');
  });
});


//jQuery

$(document).ready(() => {

  //select the input
  $( ".first" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".word1" ).text( value );
  })
  .keyup();

  $( ".second" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".word2" ).text( value );
  })
  .keyup();

  $( ".third" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".word3" ).text( value );
  })
  .keyup();

  $( ".fourth" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".word4" ).text( value );
  })
  .keyup();


  //select all span elements
  var spanStyles = {
    textDecoration: 'underline',
    background: 'gray'
  };





});
