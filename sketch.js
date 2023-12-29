var character, characterImg;
var background, backgroundImg;

function preload(){
backgroundImg = loadImage("assets/grass.png");
characterImg = loadImage("assets/character2-removebg-preview.png");


}

function setup(){
    createCanvas(windowWidth,windowHeight);
    character = createSprite(width/2,height/2,10,10);
    character.addImage(characterImg);
}

function draw(){
background(backgroundImg, 50,50);
image(backgroundImg, -width*8, -height*8, width*8, height*8);
drawSprites();
if(keyIsDown(LEFT_ARROW)){
character.x = character.x-5;
}
if(keyIsDown(RIGHT_ARROW)){
    character.x = character.x+5;    
}
if(keyIsDown(UP_ARROW)){
    character.y = character.y-5;
}
if(keyIsDown(DOWN_ARROW)){
    character.y = character.y+5;
}
camera.position.x = character.position.x;
camera.position.y = character.position.y;
}

