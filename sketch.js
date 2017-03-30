var play;
var songPlay1;

var startMsg = "Play the notes in the order you see here. " ;
var header = "PLAY MODE";
var fret1 = "Fret 1";
var fret2 = "Fret 2";
var opens = "Open String";

var counter = 0;
var tune1 = false;

function setup()
{
  createCanvas(792, 547);
  background(10, 41, 100); //dark blue

  play = createButton('PLAY');
  play.position(331, 456);
  play.mousePressed(songPlay1);

  noStroke(); //cleans lines around guitar
       //R, G, B
  fill(157, 134, 70); s
  //x coord, y coord, x width, y width
  rect(0, 152, 792, 255); //152+121.5 =547/2, 273.5

  fill(255);              //x, y
  text(startMsg, 77, 466); //

  fill(255);
  text(fret1, 71, 140);

  fill(255);
  text(fret2, 290, 140);

  fill(255);
  text(opens, 502, 140);

  //GUITAR INTERFACE
  //outside circle (wood)
  noStroke();
  fill(127, 104, 40);
  arc(792, 270, 244, 459, (PI/2), 3*(PI/2));
      //width 189 not 244 in Ai
      //arc start from x width, 792, and goes outward from there
      // inside circle

  //hole outline, "stroke"
  fill(218, 165, 32);
  arc(792, 270, 100, 228, (PI/2), 3*(PI/2));

  //hole
  fill(0); //black
  arc(792, 270, 77, 205, (PI/2), 3*(PI/2));
  //stroke(218, 165, 32);
  //strokWeight(16); //didn't work

  //title header
  fill(245);
  rect(0, 0, 792, 84);
  fill(0);
  text(header, 350, 40);

  //line fret1
  stroke(0);
  strokeWeight(10.5);
  line(198, 152, 198, 407);

  //line fret2
  stroke(0);
  strokeWeight(10.5);
  line(431, 153, 431, 407);

//line 1: note G
  stroke(205);
  strokeWeight(12);
  //line(startX, startY, endX, endY)
  line(0, 190, 792, 190);

// line 2: note A
  stroke(205); //color
  strokeWeight(12);
  line(0, 226, 792, 226); //+35

// line 3:
  stroke(205); //color
  strokeWeight(12);
  line(0, 262, 792, 262);

// line 4:
  stroke(205); //color
  strokeWeight(12);
  line(0, 298, 792, 298);

// line 5:
  stroke(205); //color
  strokeWeight(12);
  line(0, 334, 792, 334);

// line 6:
  stroke(205); //color
  strokeWeight(12);
  line(0, 370, 792, 370);
}
function songPlay1() {
  console.log("called placebo songPlay1");
  tune1 = true;
}
// this function animates notes in song 1
function drawSong1 (counter) {
  console.log("begin drawSong1");
  switch (counter) {
    case 0:
      console.log("begin 1");
      stroke(229, 231, 97); // grays string6
      strokeWeight(10.5);
      line(502, 370, 592, 370);
      console.log("end 1");
      break;
    case 1:
      console.log("begin 2");
      stroke(229, 231, 97);
      strokeWeight(10.5);
      line(502, 298, 592, 298);

      stroke(205); // grays string4
      strokeWeight(10.5);
      line(502, 370, 592, 370);
      console.log("end 2");
      break;
    case 2:
      console.log("begin 3");
      stroke(229, 231, 97);
      strokeWeight(10.5);
      line(502, 262, 592, 262);

      stroke(205); // grays string3
      strokeWeight(10.5);
      line(502, 298, 592, 298);
      console.log("end 3");
      break;
    case 3:
      console.log("start 4");
      stroke(229, 231, 97);
      strokeWeight(10.5);
      line(502, 190, 592, 190);

      stroke(205); //grays string 3
      strokeWeight(10.5);
      line(502, 262, 592, 262);
      console.log("end 4");
      break;
    case 4:
      console.log("start 5");
      stroke(229, 231, 97);
      strokeWeight(10.5);
      line(502, 298, 592, 298);

      stroke(205); // grays string 1
      strokeWeight(10.5);
      line(502, 190, 592, 190);
      console.log("end 5");
      break;
    case 5:
      console.log("start 6");
      stroke(229, 231, 97);
      strokeWeight(10.5);
      line(502, 262, 592, 262);

      stroke(205); // grays string4
      strokeWeight(10.5);
      line(502, 298, 592, 298);
      console.log("end 6");
      break;
    default:
      console.log("start default");
      stroke(205);
      strokeWeight(10.5);
      line(502, 262, 592, 262);
      console.log("end default");
      break;
  }
  console.log("end drawSong1");
}

function draw(){
  frameRate(0.5);
  //HOVER EFFECT
  //FRET 1
  //fret 1, line 1(note G)
  if(mouseX >= 71 && mouseX <= 116 && mouseY >= 190 && mouseY <= 196) { //6 tall
    stroke(229, 231, 97) //hilite yellow
    strokeWeight(10.5)
    line (71, 190, 116, 190) } //45 wide
  else{stroke(205)
    strokeWeight(10.5)
    line (71, 190, 116, 190)}

  //fret 1, line 2(note A)
  if(mouseX >=71 && mouseX <= 116 && mouseY >= 226 && mouseY <= 232){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(71, 226, 116, 226) }
  else{stroke(205)
    strokeWeight(10.5)
    line(71, 226, 116, 226)}

  //fret1, line3(note())
  if(mouseX >= 71 && mouseX <= 116 && mouseY >= 262 && mouseY <= 268 ){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(71, 262, 116, 262) }
  else{stroke(205)
    strokeWeight(10.5)
    line(71, 262, 116, 262)}
  //line4
  if(mouseX >=71 && mouseX <= 116 && mouseY >= 298 && mouseY <= 304) {
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(71, 298, 116, 298)}
  else{stroke(205)
    strokeWeight(10.5)
    line(71, 298, 116, 298)}
  //line5
  if(mouseX >= 71 && mouseX <= 116 && mouseY >= 334 && mouseY <= 340){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(71, 334, 116, 334)}
  else{stroke(205)
    strokeWeight(10.5)
    line(71, 334, 116, 334)}

  //line6
  if(mouseX >= 71 && mouseX <= 116 && mouseY >= 370 && mouseY <= 376){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(71, 370, 116, 370)}
  else{stroke(205)
    strokeWeight(10.5)
    line(71, 370, 116, 370)}

  //FRET 2
  //fret 2, line 1
  if(mouseX >= 290 && mouseX <= 335 && mouseY >= 190 && mouseY <= 196){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(290, 190, 335, 190)}
  else{stroke(205)
    strokeWeight(10.5)
    line(290, 190, 335, 190)}
  //fret2, line2
  if(mouseX >= 290 && mouseX <= 335 && mouseY >= 226 && mouseY <= 232){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(290, 226, 335, 226)}
  else{stroke(205)
    strokeWeight(10.5)
    line(290, 226, 335, 226)}
  //fret2, line3
  if(mouseX >= 290 && mouseX <= 335 && mouseY >= 262 && mouseY <= 268){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(290, 262, 335, 262)}
  else{stroke(205)
    strokeWeight(10.5)
    line(290, 262, 335, 262)}
  //fret2, line4
  if(mouseX >= 290 && mouseX <= 335 && mouseY >= 298 && mouseY <= 304){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(290, 298, 335, 298)}
  else{stroke(205)
    strokeWeight(10.5)
    line(290, 298, 335, 298)}
  //fret2, line5
  if(mouseX >= 290 && mouseX <= 335 && mouseY >= 334 && mouseY <= 340){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(290, 334, 335, 334)}
  else{stroke(205)
    strokeWeight(10.5)
    line(290, 334, 335, 334)}
  //fret2, line6
  if(mouseX >= 290 && mouseX <= 335 && mouseY >= 370 && mouseY <= 376){
    stroke(229, 231, 97)
    strokeWeight(10.5)
    line(290, 370, 335, 370)}
  else{stroke(205)
    strokeWeight(10.5)
    line(290, 370, 335, 370)}

    //FRET3, "OPEN STRING"
    //fret3, line1
    if(mouseX >= 502 && mouseX <= 592 && mouseY >= 190 && mouseY <=196){
      stroke(229, 231, 97)
      strokeWeight(10.5)
      line(502, 190, 592, 190)}
    else{stroke(205)
      strokeWeight(10.5)
      line(502, 190, 592, 190)}
      //fret3, line2
      if(mouseX >= 502 && mouseX <= 592 && mouseY >= 226 && mouseY <=232){
        stroke(229, 231, 97)
        strokeWeight(10.5)
        line(502, 226, 592, 226)}
      else{stroke(205)
        strokeWeight(10.5)
        line(502, 226, 592, 226)}
      //fret3, line3
      if(mouseX >= 502 && mouseX <= 592 && mouseY >= 262 && mouseY <=268){
        stroke(229, 231, 97)
        strokeWeight(10.5)
        line(502, 262, 592, 262)}
      else{stroke(205)
        strokeWeight(10.5)
        line(502, 262, 592, 262)}
      //fret3, line4
      if(mouseX >= 502 && mouseX <= 592 && mouseY >= 298 && mouseY <=304){
        stroke(229, 231, 97)
        strokeWeight(10.5)
        line(502, 298, 592, 298)}
      else{stroke(205)
        strokeWeight(10.5)
        line(502, 298, 592, 298)}
      //fret3, line5
      if(mouseX >= 502 && mouseX <= 592 && mouseY >= 334 && mouseY <=340){
        stroke(229, 231, 97)
        strokeWeight(10.5)
        line(502, 334, 592, 334)}
      else{stroke(205)
        strokeWeight(10.5)
        line(502, 334, 592, 334)}
      //fret3, line6
      if(mouseX >= 502 && mouseX <= 592 && mouseY >= 370 && mouseY <=376){
        stroke(229, 231, 97)
        strokeWeight(10.5)
        line(502, 370, 592, 370)}
      else{stroke(205)
        strokeWeight(10.5)
        line(502, 370, 592, 370)}

    // this code would keep playing sequence infinite times
    // drawLogic(counter);
    // counter = (counter+1) % 6;

    // this code will play sequence once and then clear
    if (counter <= 6 && tune1 == true) {
      drawSong1(counter);
      counter++;}
    else if(counter = 7 && tune1 == true){counter = 0;
      tune1 = false;}


  }
