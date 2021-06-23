/* Abertura e fechamento do menu hamburguer e x com o evento click */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

/* Mudar o sombreamento em scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function(){
  if (window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
})

//Testimonials carousel slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination:{
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
});

//SCROLLREAVEL
const scrollReveal = ScrollReveal({
  oring: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(`
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonial
  #contact .text, #contact .links
  `, {interval: 100})