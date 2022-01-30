function update()
{	
	//document.title = ""+x+","+y

	handleInput()
	if (state==="title screen")
	{
		if (keyCode==-1)
			enterKeyReleased=true
		if ((keyCode==13 && enterKeyReleased==true) || canvasPressed==1)
		{
			state="playing"
			enterKeyReleased=false
		}
	}
	else if (state==="playing")
	{

		if (keyPressed==1 || canvasPressed==1)
		{
			if (leftButton==1)	//left
			{
				if ((map1[Math.floor((y+4)/32)][Math.floor((x-1)/32)]==1) && (map1[Math.floor((y+28)/32)][Math.floor((x-1)/32)]==1))
					if ((map2[Math.floor((y+4)/32)][Math.floor((x-1)/32)]==1) && (map2[Math.floor((y+28)/32)][Math.floor((x-1)/32)]==1))
						x=Math.max(x-speed,0);
			}
			if (upButton==1)	//up
			{
				if ((map1[Math.floor((y+1)/32)][Math.floor((x+4)/32)]==1) && (map1[Math.floor((y-1)/32)][Math.floor((x+28)/32)]==1))
					if ((map2[Math.floor((y+1)/32)][Math.floor((x+4)/32)]==1) && (map2[Math.floor((y-1)/32)][Math.floor((x+28)/32)]==1))
						y=Math.max(y-speed,0);
			}
			if (rightButton==1)	//right
			{
				if ((map1[Math.floor((y+4)/32)][Math.floor((x+32)/32)]==1) && (map1[Math.floor((y+28)/32)][Math.floor((x+32)/32)]==1))
					if ((map2[Math.floor((y+4)/32)][Math.floor((x+32)/32)]==1) && (map2[Math.floor((y+28)/32)][Math.floor((x+32)/32)]==1))
						x=Math.min(x+speed,screenWidth/2-32);
			}
			if (downButton==1)	//down
			{
				if ((map1[Math.floor((y+32)/32)][Math.floor((x+4)/32)]==1) && (map1[Math.floor((y+32)/32)][Math.floor((x+28)/32)]==1))
					if ((map2[Math.floor((y+32)/32)][Math.floor((x+4)/32)]==1) && (map2[Math.floor((y+32)/32)][Math.floor((x+28)/32)]==1))
						y=Math.min(y+speed,screenHeight-32);
			}
		}
		
		if ((x==screenWidth/2-32) && (y==0))
		{
			level=level+1;
			x=0;
			y=screenHeight-32;
			loadMap();
		}
	}
	else if (state==="end screen")
	{
		if (keyCode==13 || canvasPressed == 1)
		{
			x=0;
			y=screenHeight-32
			level=1;
			loadMap();
			wallTile = document.getElementById("wallTile");
			gndTile = document.getElementById("gndTile");
			state="title screen"
		}
	}
}

function handleInput()
{
 if (canvasPressed==1)
 {
  if (touchPos.x>3*32 && touchPos.x<5*32 && touchPos.y>14*32 && touchPos.y<16*32)
  {
   downButton=1;
  }
  else if (touchPos.x>5*32 && touchPos.x<7*32 && touchPos.y>12*32 && touchPos.y<14*32)
  {
   rightButton=1;
  }
  else if (touchPos.x>3*32 && touchPos.x<5*32 && touchPos.y>10*32 && touchPos.y<12*32)
  {
   upButton=1;
  }
  else if (touchPos.x>1*32 && touchPos.x<3*32 && touchPos.y>12*32 && touchPos.y<14*32)
  {
   leftButton=1;
  }
 }
 else if (keyPressed==1)
 {
  if (keyCode==40)
  {
   downButton=1;
  }
  if (keyCode == 39)
  {
   rightButton=1;
  }
  if (keyCode==38)
  {
   upButton=1;
  }
  if (keyCode==37)
  {
   leftButton=1;
  }
 }
 else
 {
  downButton=0;
  rightButton=0;
  upButton=0;
  leftButton=0;
 }
}
