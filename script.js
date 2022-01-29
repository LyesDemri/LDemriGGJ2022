var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sprite = document.getElementById("happyDude");
var gndTile = document.getElementById("gndTile");
var goalTile = document.getElementById("goalTile");
var goalTile2 = document.getElementById("goalTile2");
var wallTile = document.getElementById("wallTile");
var thanksScreen = document.getElementById("thanksScreen");
var thanksScreen2 = document.getElementById("thanksScreen2");
var screenSizeTiles=16;
var tileWidth=32
var screenWidth=tileWidth*screenSizeTiles*2
var screenHeight=tileWidth*screenSizeTiles
var x = 0;
var y = screenHeight-32;
var speed=4
var keyPressed = 0;
var keyCode;
var key;
var upButton=0;
var downButton=0;
var leftButton=0;
var rightButton=0;
var map1;
var map2;
var state = "playing"
var level = 1;
var animCtr=0;
loadMap()

function loop() 
{
 update();
 draw();
}

window.addEventListener('keydown', function (e)
{
 keyPressed=1;
 keyCode=e.keyCode;
 key=e.key;
});

window.addEventListener('keyup', function (e)
{
 keyPressed=0;
 keyCode=-1;
 key='';
});

setInterval(loop, 33);