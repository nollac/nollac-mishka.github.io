// $('.mob_menu').on('click', function(event) {
// 	event.preventDefault();
// 	$('.menu').toggleClass('active');
// });

var trigger = document.querySelector('.trigger')
var active_menu = document.querySelector('.menu')

trigger.addEventListener('click', function() {
  if (trigger.classList.contains('trigger--show')) {
    trigger.classList.remove('trigger--show');
  } else {
    trigger.classList.add('trigger--show')
  };
  active_menu.classList.toggle('active');

});

// $('.trigger').on('click',function(event) {
// 	event.preventDefault();
// 	if(('.trigger').hasClass('trigger--show')) {
// 		$(this).removeClass('trigger--show');
// 	} else {
// 		$(this).addClass('trigger--show')
// 	};
// });