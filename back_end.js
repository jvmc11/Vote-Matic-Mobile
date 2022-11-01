
/* this is banner*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay:{
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
    
});
/* this is banner*/