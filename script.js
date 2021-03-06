var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sprite = document.getElementById("happyDude");
var gndTile = document.getElementById("gndTile");
var goalTile = document.getElementById("goalTile");
var goalTile2 = document.getElementById("goalTile2");
var wallTile = document.getElementById("wallTile");
var titleScreen = document.getElementById("titleScreen");
var thanksScreen = document.getElementById("thanksScreen");
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
var canvasPressed=0;
var touchPos;
var enterKeyReleased;
var map1;
var map2;
var state = "title screen"
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

function getTouchPos(canvasDom, touchEvent)
{
 var rect = canvasDom.getBoundingClientRect();
 return { x: touchEvent.touches[0].clientX - rect.left, 
          y: touchEvent.touches[0].clientY - rect.top };
}

canvas.addEventListener("touchstart", function (e) 
{
 touchPos = getTouchPos(canvas, e); 
 var touch = e.touches[0];
 canvasPressed=1;
}, false);

canvas.addEventListener("touchend", function (e) 
{
 canvasPressed=0;
 animCtr=0;
}, false);

setInterval(loop, 33);