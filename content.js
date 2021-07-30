// colorful brush
let started = false;
// initialize brush color
let brushHue;
 chrome.runtime.onMessage.addListener(gotMessage);

 function gotMessage(message, sender, sendResponse){
   if (message.txt === "run"){
     started = true;
   }
 }

 function setup(){
   // user cannot select text when drawing
     console.log("hello")
     document.body.style['userSelect'] = 'none';
   // set canvas to page with clear canvas
     let h = document.body.clientHeight;
     let c = createCanvas(windowWidth, h);
     c.position(0, 0);
     clear();
   // can click on items
     c.style('pointer-events','none');
   // can draw on anything
     c.style('z-index', '999')
   // setting pen style
     colorMode(HSB, 360, 100, 100);
     brushHue = 0;
     strokeWeight(6);
 }

 function draw(){
   if(started){
     console.log("hello")
     chooseColors();
     if(mouseIsPressed){
       line(pmouseX, pmouseY, mouseX, mouseY);
     }
   }
 }
 // changing colors pen
 function chooseColors() {
   if (brushHue > 360) {
       brushHue = 0;
     }
   brushHue += 1;
   stroke(brushHue, 50, 100);
   fill(brushHue, 50, 100);
 }
 // clear canvas is any key is pressed
 function keyPressed(){
   clear();
 }
