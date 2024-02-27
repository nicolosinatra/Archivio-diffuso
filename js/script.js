
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