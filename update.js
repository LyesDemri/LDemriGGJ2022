function update()
{	
	//document.title = ""+x+","+y
	if (state==="playing")
	{
		if (keyPressed==1)
		{
			if (keyCode==37)	//left
			{
				if ((map1[Math.floor(y/32)][Math.floor((x-1)/32)]==1) && (map1[Math.floor((y+31)/32)][Math.floor((x-1)/32)]==1))
					if ((map2[Math.floor(y/32)][Math.floor((x-1)/32)]==1) && (map2[Math.floor((y+31)/32)][Math.floor((x-1)/32)]==1))
						x=Math.max(x-speed,0);
			}
			if (keyCode==38)	//up
			{
				if ((map1[Math.floor((y-1)/32)][Math.floor(x/32)]==1) && (map1[Math.floor((y-1)/32)][Math.floor((x+31)/32)]==1))
					if ((map2[Math.floor((y-1)/32)][Math.floor(x/32)]==1) && (map2[Math.floor((y-1)/32)][Math.floor((x+31)/32)]==1))
						y=Math.max(y-speed,0);
			}
			if (keyCode==39)	//right
			{
				if ((map1[Math.floor(y/32)][Math.floor((x+32)/32)]==1) && (map1[Math.floor((y+31)/32)][Math.floor((x+32)/32)]==1))
					if ((map2[Math.floor(y/32)][Math.floor((x+32)/32)]==1) && (map2[Math.floor((y+31)/32)][Math.floor((x+32)/32)]==1))
						x=Math.min(x+speed,screenWidth/2-32);
			}
			if (keyCode==40)	//down
			{
				if ((map1[Math.floor((y+32)/32)][Math.floor(x/32)]==1) && (map1[Math.floor((y+32)/32)][Math.floor((x+31)/32)]==1))
					if ((map2[Math.floor((y+32)/32)][Math.floor(x/32)]==1) && (map2[Math.floor((y+32)/32)][Math.floor((x+31)/32)]==1))
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
}