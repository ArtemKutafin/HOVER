$(document).ready(function() {


//------------------------NAVIGATION MENU--------------------------------//

	var animation = 'animated slideInRight';
	var backAnimation = 'animated fadeOutRight';
	var repeat = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('#nav-button').on('click', function(){
		$('header').find('#mobile-nav').css('width', '80%').addClass(animation).one( repeat , function(){
			$(this).removeClass(animation)
		});
	});

	$('#mobile-nav').on('click', 'a', function(){
		$('header').find('#mobile-nav').css('width', '0').addClass(backAnimation).one( repeat , function(){
			$(this).removeClass(backAnimation)
		});
	});
//------------------------SCROLL WINDOW--------------------------------//

    $('html').niceScroll();

//------------------------SCROLL ANCHOR ELEMENTS--------------------------------//

    $('header').find('.navbar-nav, #mobile-nav').on('click','a', function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('footer').on('click', 'a', function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


//------------------------ORIENTATION--------------------------------//

	$(window).on("orientationchange",function(){
	  if (window.orientation == 0) {
            $('header').css('height','100vh');
        }
       else{
       	$('header').css('height','1000px');
       }
	});
});