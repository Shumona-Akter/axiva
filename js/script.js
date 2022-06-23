// =====banner part start =====


$('.banner_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-angle-left prevarrow"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right nextarrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// =====banner part end =====

$('.venobox').venobox() 
//==== owl carosel link =====
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
dots:false,
prevArrow:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$(window).scroll(function(){
  var scrolloing= $(this).scrollTop();
if(scrolloing>300){
    $("#main_menu").addClass("menu_fix")
}
else{
  $("#main_menu").removeClass("menu_fix")
}

//   scrolling
  if(scrolloing > 300){
      $(".scroll_top").fadeIn();
}
  else
  {
      $(".scroll_top").fadeOut();
  }
})

$(".scroll_top").click(function(){
  $("body, html").animate({
      scrollTop:"0px",
  },3000)
})
