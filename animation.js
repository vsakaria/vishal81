$(document).ready(function()
{
		$("div#spalsh").delay("4500").fadeOut(function(){
			$("div#spalsh").css("display","none");
			$("div#home").css("display","block");
		});
		

		var count = 0;
		
		$("div#down_button").mouseover(function(evt){
			
			if( count == 0 )
			{
				$(this).effect( "bounce", "slow" );
				$("p#down_text").hide().css("visibility", "visible").fadeIn("1000"); 
				count = 1;			
			};
		});

		$("div#down_button").mouseleave(function(evt){
			$("p#down_text").fadeOut("slow").hide();
			count = 0;	
		});

		
		/////////////////////////////////////////////////////////////////

		$("div#up_button").mouseover(function(evt){


			if( count == 0 )
			{
				$(this).effect( "bounce", "slow" );
				$("p#up_text").hide().css("visibility", "visible").fadeIn("1000"); 
				count = 1;
			}		
		});

		$("div#up_button").mouseleave(function(evt){
			$("p#up_text").fadeOut("slow").hide();
			count = 0;	
		});

		////////////////////////////////////////////////////////////////
		$("div#home_down_button").mouseover(function(evt){


			if( count == 0 )
			{
				$(this).effect( "bounce", "slow" );
				$("p#home_down_text").hide().css("visibility", "visible").fadeIn("1000"); 
				count = 1;
			}		
		});

		$("div#home_down_button").mouseleave(function(evt){
			$("p#home_down_text").fadeOut("slow").hide();
			count = 0;	
		});
		////////////////////////////////////////////////////////////
		$("div#home_up_button").mouseover(function(evt){


			if( count == 0 )
			{
				$(this).effect( "bounce", "slow" );
				$("p#home_up_text").hide().css("visibility", "visible").fadeIn("1000"); 
				count = 1;
			}		
		});

		$("div#home_up_button").mouseleave(function(evt){
			$("p#home_up_text").fadeOut("slow").hide();
			count = 0;	
		});

/////////////////////////////////////////////////////////

		$("img#java").mouseover(function(evt){
			console.log("java hoover");
				$("div#hover_java").hide().css("visibility","visible").fadeIn("slow");
			});

		$("img#java").mouseleave(function(evt){
			$("div#hover_java").fadeOut("slow").css("visibility","hidden");

		});

//////////////////////////////////////////////////////////////

		$("img#monsoon").mouseover(function(evt){
			console.log("mon hoover");
				$("div#hover_monsoon").hide().css("visibility","visible").fadeIn("slow");
			});

		$("img#monsoon").mouseleave(function(evt){
			$("div#hover_monsoon").fadeOut("slow").css("visibility","hidden");

		});
		/////////////////////////Navigation/////////////////////////////

		////home to work
		$("div#up_button").click(function(evt){
			
			$("div#up_button").css("display","none");
			$("div#down_button").css("display","none");
			$("div#home_down_button").css("display","block");
			$("div#work").slideDown(800);
			$("div#home").hide("clip","slow");
		});


		////home to play
		$("div#down_button").click(function(evt){
			
			$("div#down_button").css("display","none");
			$("div#up_button").css("display","none");
			$("div#home_up_button").css("display","block");
			$("div#home").slideUp(800).hide('clip',"slow");
			$("div#play").css("display","").show("clip","slow");
			
		});

		////work to home
		$("div#home_down_button").click(function(evt){

			$("div#home_down_button").css("display","none");
			$("div#down_button").css("display","block");
			$("div#up_button").css("display","block");
			
			$("div#work").slideUp(800).hide('clip',"slow");
			$("div#home").css("display","").show("clip","slow");
			
		});

		////play to home
		$("div#home_up_button").click(function(evt){
			
			$("div#home_up_button").css("display","none");
			$("div#up_button").css("display","block");
			$("div#down_button").css("display","block");

			$("div#play").slideUp(800).hide('clip',"slow");
			$("div#home").css("display","").show("clip","slow");
			
		});


});
