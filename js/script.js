
$('.link').hover(
    function(){
      anime({
        targets: '.underline',
        translateX: [0, 120], 
        easing: 'easeInOutQuad',
        duration: 500
      })
    },function(){
      anime({
        targets: '.underline',
        translateX: [120, 0], 
        easing: 'easeInOutQuad',
        duration: 500
      })
    }
  );

  $('.menu-button').click(function() {
    anime({
      targets: '.div-menu',
      translateX: [0, '100vw'], 
      easing: 'easeInOutQuad',
      duration: 600
    })
  });

  $('.close-button').click(function() {
    anime({
      targets: '.div-menu',
      translateX: ['100vw', '0'], 
      easing: 'easeInOutQuad',
    })
  });