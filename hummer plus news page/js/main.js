/*slider*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        320:{
            items:1
        },
        770:{
            items:2
        },
        1200:{
            items:3
        },
        1440:{
            items:4
        }
    }
});

/*button*/
jQuery(document).ready(function() {
          
    var btn = $('#button');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
        $(this).hide();
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  }); 
  
  

/*menu nav toggle*/

(function (){
    const burgerItem = document.querySelector(".nav__toggle");
    const menu = document.querySelector('.navigation');
    const menuCloseItem = document.querySelector(".nav__toggle-close")
    burgerItem.addEventListener("click", () => {
       menu.classList.add('navigation_active');
    });
    menuCloseItem.addEventListener("click", () => {
       menu.classList.remove('navigation_active');
    });
}());



