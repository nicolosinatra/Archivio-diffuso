// --------------------------------------------------------------------------------------- Variable font
function convertRange( value, r1, r2 ) { 
  return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}


var rangeMinOriginale = 225;
var rangeMaxOriginale = 5590;

var fontVariations = {
  height: 1,
  height_a: 1,
  CNTR: 1
};


$( document ).ready(function() {
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let fontSize = ((winHeight-100) / 3) / 70 * 100;

  let rDisplay_Originale = fontSize / 933.33;

  let rangeMinDisplay = rangeMinOriginale * rDisplay_Originale;
  let rangeMaxDisplay = rangeMaxOriginale * rDisplay_Originale;

  let valorePercentuale = convertRange((winWidth-60), [ rangeMinDisplay, rangeMaxDisplay ], [ 1, 100 ] );
  
  let fontWidth = valorePercentuale;

  // $('.inspect').css('width', window.innerWidth - 60 + "px");
  $('.p-arc').css('font-size', fontSize);
  $('.p-arc').css('font-stretch', fontWidth + "%");

  function randomValues() {
    anime({
      targets: fontVariations,
      height_a: function() {
        return anime.random(1, 30);
      },
      height: function() {
        return anime.random(1, 100);
      },
      CNTR: function() {
        return anime.random(1, 100);
      },
      easing: 'easeInOutQuad',
      duration: 1500,
      /* direction: 'alternate', */
      update: function() {
        $('.a-arc').css('fontVariationSettings', "'CNTR'" + fontVariations.CNTR + "," + "'hght'" + fontVariations.height_a );
        $('.r-arc').css('fontVariationSettings', "'CNTR'" + fontVariations.CNTR + "," + "'hght'" + fontVariations.height );
        $('.c-arc').css('fontVariationSettings', "'CNTR'" + fontVariations.CNTR + "," + "'hght'" + fontVariations.height );
      },
      complete: randomValues
    }); 
  }

  randomValues();

  if(winWidth > 700){
    window.addEventListener("mousemove", updateTextMouse)
  }else{
    window.removeEventListener("mousemove", updateTextMouse);
  }
});

$( window ).resize(function() {
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let fontSize = ((winHeight-100) / 3) / 70 * 100;

  let rDisplay_Originale = fontSize / 933.33;

  let rangeMinDisplay = rangeMinOriginale * rDisplay_Originale;
  let rangeMaxDisplay = rangeMaxOriginale * rDisplay_Originale;

  let valorePercentuale = convertRange((winWidth-60), [ rangeMinDisplay, rangeMaxDisplay ], [ 1, 100 ] );
  
  let fontWidth = valorePercentuale;

  $('.inspect').css('width', window.innerWidth - 60 + "px");
  $('.p-arc').css('font-size', fontSize);
  $('.p-arc').css('font-stretch', fontWidth + "%");

  if(winWidth > 700){
    window.addEventListener("mousemove", updateTextMouse)
  }else{
    window.removeEventListener("mousemove", updateTextMouse);
  }
});


function updateTextMouse(e) {
  // window.innerWidth e window.innerHeight corrispondono a larghezza e altezza della finestra
  // e.offsetX ed e.offsetY corrispondono 
  // multiplierWidth = e.clientX / window.innerWidth;
  multiplierHeight = e.clientY / window.innerHeight;
  
  // multiplierWidth e multiplierHeight vanno da 0 a 1 a seconda della posizione del mouse
  // randomCNTR =  multiplierWidth * (100 - 1) + 1;
  randomWght =  multiplierHeight * (700 - 1) + 1;

  // myText.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth;
  $('.p-arc').css('font-weight', randomWght);
}
