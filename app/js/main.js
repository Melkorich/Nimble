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
 


  
}); 