// color palette
let started = false;
// initialize brush color
let rect1, rect2, rect3, rect4, rect5, rect6;
let color1, color2, color3, color4, color5, color6;
let rectW, rectH;
let brushColor;
let h;
let c;

 chrome.runtime.onMessage.addListener(gotMessage);

 function gotMessage(message, sender, sendResponse){
   if (message.txt === "run"){
     started = true;
   }
 }

 function setup(){
   // user cannot select text when drawing
     document.body.style['userSelect'] = 'none';
   // set canvas to page with clear canvas
     h = document.body.clientHeight;
     c = createCanvas(windowWidth, h);
     c.position(0, 0);
     clear();
   // can click on items
     c.style('pointer-events','none');
   // can draw on anything
     c.style('z-index', '999')
    colorMode(HSB, 360, 100, 100);
    brushHue = 0;
    strokeWeight(5);
    color1 = color(197, 54, 33);
    color2 = color(173, 73, 62);
    color3 = color(43, 55, 91);
    color4 = color(27, 60, 96);
    color5 = color(12, 65, 91);
    rectW = windowWidth/9;
    rectH = windowHeight/8;
    brushColor = color(0, 0, 0);

 }

 function draw(){
   if(started){
      fill(color1);
      stroke(color1);
      rect(15, 5, rectW, rectH);
      fill(color2);
      stroke(color2);
      rect(rectW + 35, 5, rectW, rectH);
      fill(color3);
      stroke(color3);
      rect(rectW * 2 + 55, 5, rectW, rectH);
      fill(color4);
      stroke(color4);
      rect(rectW * 3 + 75, 5, rectW, rectH);
      fill(color5);
      stroke(color5);
      rect(rectW * 4 + 95, 5, rectW, rectH);


      if(mouseIsPressed && mouseX > 15 && mouseX < rectW + 15 && mouseY > 5 && mouseY < rectH + 5){
        brushColor = color1
      }else if(mouseIsPressed && mouseX > rectW + 35 && mouseX < rectW * 2 + 35 && mouseY > 5 && mouseY < rectH + 5){
        brushColor = color2
      }else if(mouseIsPressed && mouseX > rectW * 2 + 55 && mouseX < rectW * 3 + 55 && mouseY > 5 && mouseY < rectH + 5){
        brushColor = color3
      }else if(mouseIsPressed && mouseX > rectW * 3 + 75 && mouseX < rectW * 4 + 75 && mouseY > 5 && mouseY < rectH + 5){
        brushColor = color4
      }else if(mouseIsPressed && mouseX > rectW * 4 + 95 && mouseX < rectW * 5 + 95 && mouseY > 5 && mouseY < rectH + 5){
        brushColor = color5
      }

      if(mouseIsPressed){
        fill(brushColor)
        stroke(brushColor)
        line(pmouseX, pmouseY, mouseX, mouseY);
      }

   }
 }

 // clear canvas is any key is pressed
 function keyPressed(){
   clear();
 }
