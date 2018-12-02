$(document).ready(function() {

$('.switch label').click(function(){
  let switchBar = $(this).parent('.switch').find('span');
  if ( $(this).hasClass('right') ){
    $(switchBar).addClass('right');
    $('.price-icons').hide()
    $('.shared-icon').show()
  } else {
    $(switchBar).removeClass('right');
    $('.shared-icon').hide()
    $('.price-icons').show()
  }
})

  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });

  $('.count').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

})
