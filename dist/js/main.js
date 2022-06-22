
function galleryPopup(arg) {

  let html = arg.html,
      body = arg.body,
      link = arg.link;

  let galleryPopupBlock = 
          `
          <div class="_gallery-popup _hidden">
              <div class="_gallery-popup-bg"></div>
              <div class="_gallery-popup-body _gallery-popup-max">
                  <div class="_gallery-popup-loading">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                  </div>
                  <button type="button" class="_gallery-popup-close-btn"></button>
                  <img src="${link.href}" class="_gallery-popup-img" alt="Image not found">
              </div>
          </div>
          
          `;

    body.insertAdjacentHTML('beforeend', galleryPopupBlock);
    html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
    body.classList.add('_popup-active');
    
    let galleryPopup = document.querySelector('._gallery-popup');

    //galleryPopup.style.setProperty('--width-image', widthImage);

    setTimeout(function() {
      galleryPopup.classList.remove('_hidden');
    },200);



    function removeGalleryPopup() {
      galleryPopup.classList.add('_hidden');
      setTimeout(function() {
        body.removeChild(galleryPopup);
        body.classList.remove('_popup-active');
        html.style.setProperty('--popup-padding', '0px');
      },200);
    }



    galleryPopup.querySelector('._gallery-popup-close-btn').addEventListener('click', function() {
      removeGalleryPopup();
    });
    galleryPopup.querySelector('._gallery-popup-bg').addEventListener('click', function() {
      removeGalleryPopup();
    });



}


const body = document.querySelector('body'),
      menu = document.querySelectorAll('.header__burger, .header__nav, body'),
      html = document.querySelector('html'),
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



    let galleryLink = thisTarget.closest('._gallery-link');
    if(galleryLink) {
      event.preventDefault();
      galleryPopup({
        link: galleryLink,
        html: html,
        body: body,
      });
    }

})


function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
  top: box.top + pageYOffset,
  left: box.left + pageXOffset
  };

}



// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,

})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=


