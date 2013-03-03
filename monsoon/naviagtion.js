$(document).ready(function()
{
	
	 $('ul#nav_list li:first').click( function(evt){ evt.preventDefault();
	  			$('p#current_page').empty().hide().append("Home").fadeIn("slow"); 

	  			$( 'div#main_image').hide().css("background", "url(images/homeMonsoon.jpg)").fadeIn("slow");
				toggleDisplay("home_page");
	  		});

	  $('ul#nav_list li:nth-child(2)').click( function(evt){ evt.preventDefault();
	  			$('p#current_page').empty().hide().append("Catering").fadeIn("slow"); 

	  			$( 'div#main_image').hide().css("background", "url(images/foodbanner.jpg)").fadeIn("slow");
	  			toggleDisplay("catering_page");
	  		});

	   $('ul#nav_list li:nth-child(3)').click( function(evt){ evt.preventDefault();
	  			$('p#current_page').empty().hide().append("Bakery & Cafe").fadeIn("slow");

	  			$( 'div#main_image').hide().css("background", "url(images/breadbanner.jpg)").fadeIn("slow");
	  			toggleDisplay("bakery_page");
	  		});

	  $('ul#nav_list li:nth-child(4)').click( function(evt){ evt.preventDefault(); 
	  			$('p#current_page').empty().hide().append("Social & Photo's").fadeIn("slow"); 
	  			window.location.href = "https://www.facebook.com/groups/543313839027786/";
	  		});

	  $('ul#nav_list li:nth-child(5)').click( function(evt){ evt.preventDefault(); 
	  			$('p#current_page').empty().hide().append("Contact").fadeIn("slow");

	  			$( 'div#main_image').hide().css("background", "url(images/contactGinger.jpg)").fadeIn("slow");
	  			toggleDisplay("contact_page");
	  		});

  	/*function forToggleDisplay( pageClicked )
  	{
  		console.log("toggleDisplay called " + pageClicked);

  		/*HOME
	  	if( pageClicked == "home_page")
  		{
  			console.log("if called " + pageClicked);
  			$('div#catering_page').css("display", "none");
	  		$('div#home_page').css("display", "block").hide().fadeIn("slow");
	  		
	  	} 


  		/*CATERING
  		if( pageClicked == "catering_page")
  		{
  			console.log("if called " + pageClicked);
	  		$('div#home_page').css("display", "none");
	  		$('div#catering_page').css("display", "block").hide().fadeIn("slow");
	  
  		}
  	}*/


  	function toggleDisplay( pageClicked )
  	{
  		console.log("New toggleDisplay called " + pageClicked);
  		$('div#home_page').css("display", "none");
  		$('div#catering_page').css("display", "none");
  		$('div#bakery_page').css("display", "none");
  		/*$('div#soical_page').css("display", "none");*/
  		$('div#contact_page').css("display", "none");

  		$('div#' + pageClicked ).css("display", "block").hide().fadeIn("slow");

  	}

});