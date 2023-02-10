

let CurrentNumber = document.querySelectorAll('.currentCount');
let TotalCount = document.querySelectorAll('.totalCount');

$(document).ready(function(){
    $('.main-page').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        i = (currentSlide ? currentSlide : 0) + 1;
        CurrentNumber[0].textContent = 1;
        for( let n = 0; n < CurrentNumber.length; n++){ // проходим циклом по всем элементам объекта
            CurrentNumber[n].textContent = i; // устанавливаем красный цвет текста каждому элементу
          }	
          for( let totaln = 0; totaln < TotalCount.length; totaln++){ // проходим циклом по всем элементам объекта
            TotalCount[totaln].textContent = TotalCount.length; // устанавливаем красный цвет текста каждому элементу
          }	
    });

    $('.main-page').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.nav-l'),
        nextArrow: $('.nav-r')
    });

    var $pagingInfo = $('.paging-info');
    let MycurrentSlide = $('.main-page').slick('slickCurrentSlide') + 1;   
    TotalCount.textContent = $(".main-page").slick("getSlick").slideCount;
});

let showMoreBtn = document.querySelector('.show-all-gallery');
let MoreGallery = document.querySelector('.__more-gallery');

showMoreBtn.addEventListener('click', ()=>{
    MoreGallery.classList.toggle('__show-gallery');
})

function ShowMore(Obj) {
    Obj.innerHTML=(Obj.innerHTML=='Смотреть все')? 'Скрыть все': 'Смотреть все';
}

let menuBurger = document.querySelector('.menu-burger');
let feedbackBtn = document.querySelector('.feedback-phone');
let feedbackWp = document.querySelector('.__whatsapp');

menuBurger.addEventListener('click', ()=>{
    menuBurger.classList.toggle('__active-burger');
})
feedbackBtn.addEventListener('click', ()=>{
    feedbackBtn.classList.toggle('__active-feedback');
    feedbackWp.classList.toggle('__active-wp');
})

let feedbackContainer = document.querySelector('.feedback');
let goToTop = document.querySelector('.gotoTop');
window.addEventListener('scroll', function(e){
    if (window.scrollY>500){
        feedbackContainer.classList.add('__active-top');
        goToTop.classList.add('active-gototop');
    }
    else{
        feedbackContainer.classList.remove('__active-top');
        goToTop.classList.remove('active-gototop');
    }
  })
  $('a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });


var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

let showModalButtons = document.querySelectorAll('.__open-modal')


for (let n = 0; n<showModalButtons.length; n++ ){
    showModalButtons[n].addEventListener('click', ()=>{
        console.log('click');
        modal.classList.add('__show-modal');
    })
}
// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove('__show-modal')
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', e => {
    const target = e.target;
  if ((!target.closest('.modal-content'))&&(target.closest('.modal'))) {
    modal.classList.remove('__show-modal');
  }
})
