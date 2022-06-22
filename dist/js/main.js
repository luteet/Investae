
const body = document.querySelector('body'),
      menu = document.querySelectorAll('.header__burger, .header__nav, body'),
      burger = document.querySelector('.header__burger');


let thisTarget, removeActiveClassFromItem;
body.addEventListener('click', function (event) {

    thisTarget = event.target;



    if (thisTarget.closest('.header__burger')) {
      menu.forEach(elem => {
          elem.classList.toggle('_active')
      })
    }



    let btnToScroll = thisTarget.closest('._btn-to-scroll');
    if(btnToScroll) {
      event.preventDefault();
      let section;
    
      section = document.querySelector(btnToScroll.getAttribute('href'))
    
      menu.forEach(elem => {
        elem.classList.remove('_active')
      })
    
      window.scroll({
        left: 0,
        top: (section) ? section.offsetTop : 0,
        behavior: 'smooth'
      })
    
    }


    
    let cardScrollLink = thisTarget.closest('.card__scroll-link');
    if(cardScrollLink) {
      event.preventDefault();
      
      let item, parent;
    
      item = document.querySelector(cardScrollLink.getAttribute('href'))
      parent = item.closest('.tools__block');

      document.querySelectorAll('.tools__item._active').forEach(thisToolsItem => {
        thisToolsItem.classList.remove('_active');
        clearTimeout(removeActiveClassFromItem);
        
      })
    
      window.scroll({
        left: 0,
        top: (parent) ? parent.offsetTop : 0,
        behavior: 'smooth'
      })

      item.classList.add('_active');
      
      removeActiveClassFromItem = setTimeout(() => {
        item.classList.remove('_active');
      },5000)

    }

})


/* function activetoScoll() {
  const scollElements = document.querySelectorAll('._active-to-scoll'),
        offset = document.querySelector('.offset-check-js');


} */




// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=


