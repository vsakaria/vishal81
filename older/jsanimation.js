var currentPos = -110;
var currentOpcity = 0;
var breakInterval;
var eventHandle;

function startAnimationPlus()
{
	//document.getElementById("bottomface").style.left = "-110px"; 
	breakInterval = setInterval(animatePlus, 2);
	console.log("startAnimation");
}

function animatePlus()
{
	currentPos = currentPos + 0.5;
	document.getElementById("bottomface").style.left = currentPos + "px"; 

	console.log("animate");

	if( currentPos == 0 )
	{
		clearInterval(breakInterval);

		console.log("if broken" + currentPos);
	}
	else if( currentPos >= -10 )
	{
		document.getElementById("speechbubble").style.opacity = currentOpcity;
		currentOpcity = currentOpcity + 0.05;

		console.log( "currentOpcity " + currentOpcity + "currentPos " + currentPos + "@if stat");

	}
	
}

function startAnimationMinus()
{
	//document.getElementById("bottomface").style.left = "-110px"; 
	breakInterval = setInterval(animateMinus, 5);
	console.log("startAnimation Minus");
}

function animateMinus()
{
	currentPos = currentPos - 2;
	document.getElementById("bottomface").style.left = currentPos + "px"; 	
	console.log("animate" + currentPos);

	if( currentPos == -110 )
	{
		clearInterval(breakInterval);
		currentOpcity = 0;
		console.log("if broken" + currentPos);
	}
	else if( currentPos >= -30 )
	{
		document.getElementById("speechbubble").style.opacity = currentOpcity;
		currentOpcity = currentOpcity - 0.1;
		console.log( "currentOpcity " + currentOpcity + "currentPos " + currentPos + "@if stat on minus END");

	}
}


eventHandle = document.getElementById("bottomface");
eventHandle.onmouseover = function()
{
	if(currentPos == -110)
	{
	setTimeout(startAnimationPlus,50);
	console.log("Event captured Plus");
	}
	else if(currentPos == 0)
	{
		setTimeout(startAnimationMinus, 50);
		console.log("Event captured Minus");
	}

};

