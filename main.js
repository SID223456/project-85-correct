canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_X = 10;
car1_Y = 10;
bg_img = "download (6).jpg";
car1_img = "26625176-red-sports-car-top-view.jpg";

car2_width = 100;
car2_height = 90;
car2_X = 10;
car2_Y = 100;
bg_img = "download (6).jpg";
car2_img = "png-clipart-top-view-of-white-sedan-car-door-honda-vehicle-racing-stripe-top-view-car-glass-sedan.png";

function add(){
bg_imgTag = new Image();
bg_imgTag.onload = uploadBackgroundImage;
bg_imgTag.src = bg_img;

car1_imgTag = new Image();
car1_imgTag.onload = uploadCAR1Image;
car1_imgTag.src = car1_img;

car2_imgTag = new Image();
car2_imgTag.onload = uploadCAR2Image;
car2_imgTag.src = car2_img;
}

function uploadBackgroundImage(){
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCAR1Image(){
    ctx.drawImage(car1_imgTag, car1_X, car1_Y, car1_width, car1_height);
}

function uploadCAR2Image(){
    ctx.drawImage(car2_imgTag, car2_X, car2_Y, car2_width, car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '37'){
    left();
    console.log("Left Key is Pressed");
}

if(keyPressed == '38'){
    up();
    console.log("Up Key is Pressed");
}

if(keyPressed == '39'){
    right();
    console.log("Right Key is Pressed");
}

if(keyPressed == '40'){
    down();
    console.log("Down Key is Pressed");
}

if(keyPressed == '65'){
    A();
    console.log("A Key is Pressed");
}

if(keyPressed == '87'){
    W();
    console.log("W Key is Pressed");
}

if(keyPressed == '68'){
    D();
    console.log("D Key is Pressed");
}

if(keyPressed == '83'){
    S();
    console.log("S Key is Pressed");
}
}

function left(){
    if(car1_X >= 0){
        car1_X = car1_X - 5;
    console.log("when left arrow is pressed , X= "+ car1_X +" Y=" + car1_Y);
    uploadBackgroundImage();
    uploadCAR1Image();
    } 
}

function up(){
    if(car1_Y >= 0){
        car1_Y = car1_Y - 5;
        console.log("when up arrow is pressed , X= "+ car1_X +" Y=" + car1_Y);
        uploadBackgroundImage();
        uploadCAR1Image();
    }
}

function right(){
    if(car1_X <= 700){
        car1_X = car1_X + 5;
        console.log("when right arrow is pressed , X= "+ car1_X +" Y=" + car1_Y);
        uploadBackgroundImage();
        uploadCAR1Image();
    }
}

function down(){
    if(car1_Y <= 500){
        car1_Y = car1_Y + 5;
        console.log("when down arrow is pressed , X= "+ car1_X +" Y=" + car1_Y);
        uploadBackgroundImage();
        uploadCAR1Image();
    }
}

function A(){
    if(car2_X >= 0){
        car2_X = car1_X - 5;
    console.log("when A is pressed , X= "+ car2_X +" Y=" + car2_Y);
    uploadBackgroundImage();
    uploadCAR2Image();
    } 
}

function W(){
    if(car2_Y >= 0){
        car2_Y = car1_Y - 5;
    console.log("when W is pressed , X= "+ car2_X +" Y=" + car2_Y);
    uploadBackgroundImage();
    uploadCAR2Image();
    } 
}

function D(){
    if(car2_X >= 700){
        car2_X = car1_X - 5;
    console.log("when A is pressed , X= "+ car2_X +" Y=" + car2_Y);
    uploadBackgroundImage();
    uploadCAR2Image();
    }
}

function S(){
    if(car2_Y >= 500){
        car2_Y = car1_Y - 5;
    console.log("when W is pressed , X= "+ car2_X +" Y=" + car2_Y);
    uploadBackgroundImage();
    uploadCAR2Image();
    } 
}