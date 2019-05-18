var canvas;

let img;

//var font;

//var love;

//var graphics;

function preload() {
    font = loadFont('ZXXBold.otf');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    //img = loadImage('images/gif1.gif');
    //graphics = createGraphics(200, 200);
    //graphics.background(255);
    
    //love = createGraphics(100, 100);
   // love.fill(255, 34, 34);
    //love.textAlign(CENTER);
   // love.textSize(300);
   // love.text('love', 100, 50);

    //background(0);
    //canvas.style('z-index', '-1');
    //background(175);
    
}

function keyPressed() {
    clear();
}

function draw() {
    //textFont('ZXXBold');
    //textSize(32);
    //text('word', 10, 30);
    //fill(0, 102, 153);
    
    if (mouseIsPressed) {
        stroke(255);
        strokeWeight(3);
       // line(pmouseX, pmouseY, mouseX, mouseY);
        line(pmouseX+20, pmouseY-50, mouseX, mouseY);
        line(pmouseX+30, pmouseY-50, mouseX, mouseY);

    } else if ((mouseX>1480) && (mouseY<25)) {
        background(0);
    }
  
}



var sketch1 = function(p) {
    p.x = 100;
    p.y = 100;
    p.setup = function() {
        var cnv = p.createCanvas(500, 500);
        cnv.parent('sketch-holder3');
        p.background(0);
    }
    p.draw = function() {
        if (p.mouseIsPressed) {
        p.textFont('ZXXBold');
        p.stroke(0);
        p.strokeWeight(5);
        p.fill(255);
        p.textSize(60);
        p.text('HERE', p.x, p.y);
        
        p.x = p.x + p.random(-10, 10);
        p.y = p.y + p.random(-10, 10);
  
       // if (p.mouseIsPressed) {
       //     p.background(0);
       // }
    }
}
}

var sketch2 = function(p) {
    p.x = 100;
    p.y = 100;

    p.setup = function() {
        var cnv = p.createCanvas(800, 500);
        cnv.parent('sketch-holder');
        p.background(255);
    }
    p.draw = function() {
        p.textFont('ZXXBold');
        p.textSize(40);
        p.text('here', 350, 250);
        p.strokeWeight(3);
        p.stroke(255);
        p.fill(0);
        p.ellipse(p.mouseX, p.mouseY, p.mouseY, 50);
        p.rect(p.mouseY+100, p.mouseX-100, 10, 300);
        
}
}

var sketch3 = function(p) {
    p.x = 100;
    p.y = 100;
    p.setup = function() {
        p.createCanvas(500, 500);
        p.background(50);
    }
    p.draw = function() {      
        let words = ['apple', 'bear', 'cat', 'dog'];
        let word = p.random(words); // select random word
        p.textSize(40);
        p.text(word, 100, 100);
   // if (p.mouseIsPressed) {
     //   p.fill(p.random(255), p.random(255), p.random(255);
        //p.stroke(p.random(255), random(255), random(255);
   //     p.strokeWeight(3);
       // line(pmouseX, pmouseY, mouseX, mouseY);
        //p.ellipse(p.pmouseX+20, p.pmouseY-50, 20, 20);
    //}

}
}

var canvas;

var sketch4 = function(p) {
    p.x = 100;
    p.y = 100;

    p.setup = function() {
    canvas = p.createCanvas (400, 800);
    canvas.parent('sketch-holder2');
    canvas.position(1100,2200);
}
    p.draw = function() {  
 // p.background(50);
  p.stroke(0, 255, 0)
  p.fill(0);
  p.textSize(20);
  //p.textFont('ZXXBold');
  p.text("I will begin to direct my eyes towards myself and rebuild myself where I am",
    p.mouseX, p.mouseY, 200, 200);
  if (p.mouseIsPressed) {
    p.noFill();
    p.noStroke;
    p.rect(p.mouseX, p.mouseY, 200, 200);
  }
}
}

var canvas;

var sketch5 = function(p) {
    p.x = 100;
    p.y = 100;

    p.setup = function() {
    canvas = p.createCanvas (1520, 770);
    canvas.parent('sketch-holder4');
    canvas.position(0,6500);
}
    p.draw = function() {  
 // p.background(50);
        p.push();
  p.strokeWeight(2);
  p.stroke(0, 200, 0);
  p.fill(255);
  p.textSize(40);
  //p.textFont('ZXXBold');
        
  p.text("I am over there", p.mouseX+50, p.mouseY+50, 200, 200);
        p.pop();
  p.stroke(0, 200, 0);
  p.strokeWeight(2);
  p.textSize(40);
  p.fill(0);
  p.text("There where I am not", p.mouseY+200, p.mouseX-100, 200, 200);
  if (p.mouseIsPressed) {
    p.noFill();
    p.noStroke;
    p.rect(p.mouseX, p.mouseY, 200, 200);
  }
}
}


var canvas;

var sketch6 = function(p) {
    p.x = 100;
    p.y = 100;

    p.setup = function() {
    canvas = p.createCanvas (1520, 1000);
    canvas.parent('sketch-holder6');
    canvas.position(0,5200);
    }
    

    p.draw = function() { 
    
    if (p.mouseIsPressed) {
        p.stroke(0,255,0);
        p.strokeWeight(3);
       // line(pmouseX, pmouseY, mouseX, mouseY);
        p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);

    } 
}
}

var myp5 = new p5(sketch1);
var myp5 = new p5(sketch2);
//var myp5 = new p5(sketch3);
var myp5 = new p5(sketch4);
var myp5 = new p5(sketch5);
var myp5 = new p5(sketch6);
