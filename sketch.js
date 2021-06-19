const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sunrise
var suffix;
var bg ;
var hour;
var h;

function preload() {
    // create getBackgroundImg( ) here
    getBackground();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg) {
    background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour > 12){
        suffix = "pm"
    } else {
        suffix = "am"
    }

    if(hour%12 === 0 ) {
        h = 12;
    } else {
        h = hour%12;
    }
    
    textSize(36);
    text("Time: " + h + " " +suffix, 10, 100);
}

    async function getBackground() {
        var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London");
        console.log(response);
        var responseData = await response.json();
        console.log(responseData);
        var dateTime = responseData.datetime;
         hour = dateTime.slice(11, 13);
    
        if(hour >= 7 && hour <= 19) {
            backgroundImg = loadImage("sunrise5.png");
        } else {
            backgroundImg = loadImage("sunset9.png");
        }
    } 

