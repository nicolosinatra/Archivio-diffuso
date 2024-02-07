// --------------------------------------------------------------------------------------- Variable font
$( document ).ready(function() {
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let fontSize = winHeight / 2.5;
  console.log(fontSize);
  $('.p-arc').css('font-size', fontSize);
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

  let fontSize = (winHeight-100) / 3 + ((winHeight-100) / 3 / 100 * 30);
  let fontWidth = winWidth / 22;

  console.log(fontSize, fontWidth);
  $('.p-arc').css('font-size', fontSize);
  $('.p-arc').css('font-stretch', fontWidth + "%");

  console.log(winHeight + ", " + winWidth);
}

window.addEventListener("mousemove", updateTextMouse)

window.addEventListener("resize", updateTextResize)