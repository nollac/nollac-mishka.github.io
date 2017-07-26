var trigger 	      = document.querySelector('.trigger');
var active_menu       = document.querySelector('.menu');

trigger.addEventListener('click', function(e) {
    e.preventDefault();
  if (trigger.classList.contains('trigger_show')) {
    trigger.classList.remove('trigger_show');
  } else {
    trigger.classList.add('trigger_show')
  };
  active_menu.classList.toggle('active');
});

$(document).ready(function(){
    $('.bxslider').bxSlider({
        // auto: true,
        mode: 'fade',
        slideMargin: 400
    });
});


