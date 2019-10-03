$(document).ready(() => {
  
  // menu toogle animation
  $(".nav-button").click(() => {
    $(".nav-button").toggleClass("change");
  });

  // navbar resize on scroll
  $(window).scroll(() => {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("nav-menu--custom");
    } else {
      $(".nav-menu").removeClass("nav-menu--custom");
    }
  });

  // mission section entering animations
  $(window).scroll(() => {
    let position = $(this).scrollTop();
    if (position >= 700) {
      $('.mission__image').addClass('fromLeft');
      $('.mission__text').addClass('fromRight');
    } else {
      $('.mission__image').removeClass('fromLeft');
      $('.mission__text').removeClass('fromRight');
    }
  })

  // gallery filters 
  $('.gallery__list-item').click(function() {
    let value = $(this).attr('data-filter');
    if (value === 'all'){
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  })

  //gallery item active
  $('.gallery__list-item').click(function(){
    $(this).addClass('gallery__list-item--active').siblings().removeClass('gallery__list-item--active');
  });
  
  //pricecard
  $(window).scroll(function(){
    let position = $(this).scrollTop();
    if (position >= 4300){
      $('.pricecard--1').addClass('moveFromLeft');
      $('.pricecard--2').addClass('moveFromBottom');
      $('.pricecard--3').addClass('moveFromRight');
    } else {
      $('.pricecard--1').removeClass('moveFromLeft');
      $('.pricecard--2').removeClass('moveFromBottom');
      $('.pricecard--3').removeClass('moveFromRight');
    }
  })
 



}); //END 
