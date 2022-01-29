function draw()
{
	//clear screen
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,screenWidth,screenHeight)
	
	if (state==="playing")
	{
		//draw ground
		for (l=0;l<screenSizeTiles;l++)
		{
			for (c=0;c<screenSizeTiles;c++)
			{
				if (map1[l][c]==1)
					ctx.drawImage(gndTile,c*32,l*32);
				else
					ctx.drawImage(wallTile,c*32,l*32);
				if (map2[l][c]==1)
					ctx.drawImage(gndTile,c*32+screenWidth/2,l*32);
				else
					ctx.drawImage(wallTile,c*32+screenWidth/2,l*32);
			}
		}
		
		//draw goal sign:
		if (animCtr>16)
		{
			ctx.drawImage(goalTile,screenWidth/2-32,0)
			ctx.drawImage(goalTile2,screenWidth-32,0)
		}
		else
		{
			ctx.drawImage(goalTile2,screenWidth/2-32,0)
			ctx.drawImage(goalTile,screenWidth-32,0)
		}
		
		animCtr=(animCtr+1)%33
		
		//draw main character
		ctx.drawImage(sprite,x,y)
		ctx.drawImage(sprite,x+screenWidth/2,y)
		
		//draw separation between screens
		ctx.moveTo(screenWidth/2,0);
		ctx.lineTo(screenWidth/2,screenHeight);
		ctx.stroke();
	}
	else if (state==="end screen")
	{
		ctx.drawImage(thanksScreen,0,0)
		if (animCtr>16)
			ctx.drawImage(thanksScreen,0,0)
		else
			ctx.drawImage(thanksScreen2,0,0,)
		
		animCtr=(animCtr+1)%33
	}
}