img = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function preload(){
img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill('#fc0303');
    text("dog",120,30);
    noFill();
    stroke('#fc0303');
    rect(102,13,400,300);
}