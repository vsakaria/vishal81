$(document).ready(function()
{
	$('#bg').hide().fadeIn(1000);

	$('div#intro_title').hide().delay(1100).effect("slide", "easing", 900 );

	$('div#circle').hide().delay(1500).fadeIn(1000);

	$('div#circle').click( function(evt){
			$('div#home_page').fadeOut(1000).hide();
			$('img#img_bg').attr("src", "Images/domino80.jpg");
			$('div#home_page').fadeIn(1000);
			//$('div#home_page').slideDown("slow");
			//
	});

});