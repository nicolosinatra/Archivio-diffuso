// --------------------------------------------------------------------------------------- Variable font
function convertRange( value, r1, r2 ) { 
  return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

$( document ).ready(function() {
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let rangeMinOriginale = 225;
  let rangeMaxOriginale = 5590;

  let fontSize = ((winHeight-100) / 3) / 70 * 100;

  let rDisplay_Originale = fontSize / 933.33;

  let rangeMinDisplay = rangeMinOriginale * rDisplay_Originale;
  let rangeMaxDisplay = rangeMaxOriginale * rDisplay_Originale;

  let valorePercentuale = convertRange((winWidth-60), [ rangeMinDisplay, rangeMaxDisplay ], [ 1, 100 ] );
  
  let fontWidth = valorePercentuale;

  $('.inspect').css('width', window.innerWidth - 60 + "px");
  $('.p-arc').css('font-size', fontSize);
  $('.p-arc').css('font-stretch', fontWidth + "%");
});


function updateTextMouse(e) {
  // window.innerWidth e window.innerHeight corrispondono a larghezza e altezza della finestra
  // e.offsetX ed e.offsetY corrispondono 
  multiplierWidth = e.clientX / window.innerWidth;
  multiplierHeight = e.clientY / window.innerHeight;
  
  // multiplierWidth e multiplierHeight vanno da 0 a 1 a seconda della posizione del mouse
  randomCNTR =  multiplierWidth * (100 - 1) + 1;
  randomHght =  multiplierHeight * (100 - 1) + 1;

  // console.log("e.offsetX: " + e.offsetX);
  // console.log("e.offsetY: " + e.offsetY);
  // console.log("window.innerHeight: " + window.innerHeight);
  // console.log("window.innerWidth: " + window.innerWidth);
  // console.log("multiplierWidth: " +  multiplierWidth);
  // console.log("multiplierHeight: " +  multiplierHeight);
  // console.log("randomWeight: " +  randomWeight);
  // console.log("randomWidth: " +  randomWidth);

  // myText.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth;
  $('.p-arc').css('fontVariationSettings', "'CNTR'" + randomCNTR + "," + "'hght'" + randomHght );
}

function updateTextResize(){
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let rangeMinOriginale = 225;
  let rangeMaxOriginale = 5590;

  let fontSize = ((winHeight-100) / 3) / 70 * 100;

  let rDisplay_Originale = fontSize / 933.33;

  let rangeMinDisplay = rangeMinOriginale * rDisplay_Originale;
  let rangeMaxDisplay = rangeMaxOriginale * rDisplay_Originale;

  let valorePercentuale = convertRange((winWidth-60), [ rangeMinDisplay, rangeMaxDisplay ], [ 1, 100 ] );
  
  let fontWidth = valorePercentuale;

  $('.inspect').css('width', window.innerWidth - 60 + "px");
  $('.p-arc').css('font-size', fontSize);
  $('.p-arc').css('font-stretch', fontWidth + "%");
}

window.addEventListener("mousemove", updateTextMouse)

window.addEventListener("resize", updateTextResize)