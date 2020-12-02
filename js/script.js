$(document).ready(function() {
	$('.header-bottom__burger').click(function(event) {
		$('.header-bottom__burger,.header-bottom__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.hits-slider').slick({
		arrows:true, //включить кнопки перемотки
		dots:true, //включить точки
		slidesToShow:4, //количество слайдов на экране
		slidesToScroll:1, //количество проматываемых слайдов за раз
		adaptiveHeight:true,
		speed:300, //время перемотки слайда
		easing:'ease', //сценарий прокрутки
		infinite:true, //бесконечность слайдера
		initialSlide:0, //номер стартового слайда
		autoplay:false, //автоматическое проигрывание слайда
		responsive:[
			{
				breakpoint: 1180,
				settings: {
					slidesToShow:3,
				}
			},
			{
				breakpoint: 890,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 670,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});
	$('.finished-projects-slider').slick({
		arrows:true, //включить кнопки перемотки
		dots:true, //включить точки
		slidesToShow:4, //количество слайдов на экране
		slidesToScroll:1, //количество проматываемых слайдов за раз
		adaptiveHeight:true,
		speed:300, //время перемотки слайда
		easing:'ease', //сценарий прокрутки
		infinite:true, //бесконечность слайдера
		initialSlide:0, //номер стартового слайда
		autoplay:false, //автоматическое проигрывание слайда
		responsive:[
			{
				breakpoint: 1180,
				settings: {
					slidesToShow:3,
				}
			},
			{
				breakpoint: 890,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});
});



function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++)
{ if(ibg[i].querySelector('img'))
{ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }

}

ibg();
