$( document ).ready(function() {

$('.banner-title').slideDown(1300);

  var menuButton = $('.menu-button');
  menuButton.click(function() {
    $('.menu-container').slideToggle(200);
    menuButton.addClass('hide-menu')
  });







  $( window ).attr('display', 'block').resize(function() {
  });



  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      $('#myModal').slideDown(100);
      $('.modal-content').toggle(400);
      $('.youtube').attr('src', 'https://www.youtube.com/embed/6QUcmOY-37A?autoplay=1');
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    $('.modal-content').hide(800);
    $('.youtube').attr('src', '');
    $('#myModal').slideUp(100);
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
        $('.modal-content').hide(800);
        $('.youtube').attr('src', '');
        $('#myModal').slideUp(100);
      }
  };






});


$(document).ready(function() {
var movementStrength = 55;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$(".bio").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 1);
          var newvalueX = width * pageX * -0.21;
          var newvalueY = height * pageY * -0.2;
          $(this, '.bio').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});
