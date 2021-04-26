var cat,catimg,catimg2,catwalk,cathappy,cathappyimg
var mouse,mouseimg,mouseimg2,mousewalk,mousehappy,mousehappyimg
var bg
function preload() {
    //load the images here
catimg= loadImage("cat1.png",)
cathappyimg= loadImage("cat4.png")
catimg2= loadAnimation("cat2.png","cat3.png")
mouseimg = loadImage("mouse1.png","mouse4.png")
mousehappyimg = loadImage("mouse4.png")
mouseimg2=loadAnimation("mouse2.png","mouse3.png")
bg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600)
     cat.scale = 0.2
    cat.addImage("catty",catimg)
   
    mouse = createSprite(800,600)
     mouse.scale = 0.2
    mouse.addImage("mousey",mouseimg)
   
}


function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

     if (cat.x-mouse.x<(cat.width-mouse.width)/2) {
        cathappy = createSprite(800,600)
        cathappy.addImage("caaty",cathappyimg)
        cathappy.scale=0.2
        mousehappy = createSprite(200,600)
        mousehappy.addImage("moosey",mousehappyimg)
        mousehappy.scale=0.2
     }
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode=== LEFT_ARROW) {
    mousewalk=createSprite(200,600)
    mousewalk.addAnimation("walk",mouseimg2)
    mousewalk.scale=0.2
    catwalk= createSprite(800,600)
    catwalk.addAnimation("walk",catimg2)
    catwalk.scale=0.2
    catwalk.velocityX=-3
    cat.destroy()
    mouse.destroy()
    
}


}
