

let CurrentNumber = document.querySelectorAll('.currentCount');
let TotalCount = document.querySelectorAll('.totalCount');

$(document).ready(function(){
    $('.main-page').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        i = (currentSlide ? currentSlide : 0) + 1;
        console.log('MyCurrentSlide = ', i);
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
    /**console.log('MyCurrentSlide = ', $(slick.slideCount);*/
	
 
    
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

menuBurger.addEventListener('click', ()=>{
    menuBurger.classList.toggle('__active-burger');
})