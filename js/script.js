
$('.link').hover(
    function(){
      anime({
        targets: '.underline',
        translateX: [0, 120], 
        easing: 'easeInOutQuad',
      })
    },function(){
      anime({
        targets: '.underline',
        translateX: [120, 0], 
        easing: 'easeInOutQuad',
      })
    }
  );

  $('.menu-button').click(function() {
    anime({
      targets: '.div-menu',
      translateX: [0, '100vw'], 
      easing: 'easeInOutQuad',
    })
  });

  $('.close-button').click(function() {
    anime({
      targets: '.div-menu',
      translateX: ['100vw', '0'], 
      easing: 'easeInOutQuad',
    })
  });