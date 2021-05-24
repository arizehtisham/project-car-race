canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverW=100;
roverH=90;
roverX=10;
roverY=10;
function add(){
    bg_img=new Image();
    bg_img.onload=uploadBackgrond;
    bg_img.src="https://image.freepik.com/free-vector/race-track-with-start-finish-line-car-carting-races-asphalt-road-template-fast-speedway-auto-moto-sport-concept-top-view_168129-872.jpg";
    car_img=new Image();
    car_img.onload=uploadCar;
    car_img.src="https://i.postimg.cc/YqdnnNX1/car1.png";
    car_img=new Image();
    car_img.onload=uploadCar;
    car_img.src="https://library.kissclipart.com/20180828/qcq/kissclipart-car-sprite-2d-clipart-sports-car-clip-art-b04775a9150edfcd.jpg";
    
}
function uploadBackgrond(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img,carX,carY,carW,carH);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
if(keypress=="38"){
    up();
    console.log("up");
}
if(keypress=="40"){
    down();
    console.log("down");
}
if(keypress=="37"){
   left();
    console.log("left");
}
if(keypress=="39"){
    right();
    console.log("right");
}
}