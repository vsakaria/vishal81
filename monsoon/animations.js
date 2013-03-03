var opacityTitle = 0.9;
var opacitySubTitle = 0.9;
var opacityEstText = 0.9;
var opacityBread = 0.9;
var breakInterval;
var animationRun = 0;

function startAnimation()
{
	if(opacityTitle <= 1)
	{
	opacityTitle = opacityTitle + 0.005;
	document.getElementById("title").style.opacity = opacityTitle;
	console.log("opacityTitle " + opacityTitle);
	}
	else
	{
		opacityEstText = opacityEstText + 0.01;
		document.getElementById("est_text").style.opacity = opacityEstText;
	}
	if( opacityEstText >= 1 ) 
	{
		
		opacitySubTitle = opacitySubTitle + 0.01;
		document.getElementById("sub_title").style.opacity = opacitySubTitle;	
	}
	if( opacitySubTitle >= 1.4 )
	{
		opacityBread = opacityBread + 0.005;
		document.getElementById("bread").style.opacity = opacityBread;	
	}

	if( opacityBread >= 1 )
	{
		console.log("Broken ");
		clearInterval(breakInterval);

		$(document).ready(function()
  		{
  			 console.log("ready ");	
  			$('div#intro_title').hide('drop', function()
  			{
  				$('div#intro_title').css("display", "none"); 
  			});

  			$('div#main_container').css("display","block").fadeIn(500);
  			$('p#logo').hide().fadeIn(1000);
  		});
	}
}

window.onload = function()
{
	console.log("window ");
	$('div#main_container').hide();
	
	if( animationRun == 0) 
	breakInterval = setInterval(startAnimation, 10);
};