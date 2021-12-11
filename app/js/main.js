$(function(){


  $('.numbers__select').styler();


  $('.menu__burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__burger').toggleClass('menu__burger--active');
    $('body').toggleClass('body--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__list').removeClass('menu__list--active');
    $('.menu__burger').removeClass('menu__burger--active');
    $('body').removeClass('body--active');
  });


  // $(".menu__list").on("click","a", function (event) {
	// 	event.preventDefault();
	// 	var id  = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body,html').animate({scrollTop: top}, 1500);
	// });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
  });
 


  
}); 