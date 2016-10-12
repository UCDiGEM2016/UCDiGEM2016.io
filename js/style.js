$(document).ready(
	function(){
		var vh = $(window).height()*0.17;
		var init = 0;

  	/*	$( ".homeLink" ).click(
		function(e) 
		{
			navH = vh;
			e.preventDefault();
  			$('html, body').animate({
        	scrollTop: $("#Home").offset().top - navH
    		}, 1000);
  		});//end attLink.click
		$( ".teamLink" ).click(
		function(e) 
		{
			if(init == 0)
			{
				navH = vh;
			}
			else
			{
				navH = $("#nav").height();
			}
			init = 1;
			e.preventDefault();
  			$('html, body').animate({
        	scrollTop: ($("#Team").offset().top - navH)
    		}, 1000);
  		});//end Teambtn.click
		*/

		$(".bioRow").hide();
		if ($('.body_team'))
		{
			$(".bioRow").each(function(index, el) {
			if(index%2 != 1)
			{
				$(this).delay(400*index).show("slide", { direction: "left" }, 1500);
			}
			else
			{
				$(this).delay(500*index).show("slide", { direction: "right" }, 1500);
			}

		});
		}
/*	var  mn = $("#nav");
	    mns = "nav-scrolled";
	    class2 = "navbar-fixed-top";
	    hdr = $('.logoDiv').height();  		
  			

			$(window).scroll(function(){
				if( $(this).scrollTop() > hdr ) {
				    mn.addClass(mns);
				    mn.addClass(class2);
				  } else {
				    mn.removeClass(mns);
				    mn.removeClass(class2);
				    init = 0;
				  } */
				if ($(window).scrollTop()>=($(window).height()*1.7))
				{
					$(".bioRow").each(function(index, el) {
					if(index%2 != 1)
					{
						$(this).delay(400*index).show("slide", { direction: "left" }, 1500);
					}
					else
					{
						$(this).delay(500*index).show("slide", { direction: "right" }, 1500);
					}

				});
				}

			});
/*
		$( ".projectLink" ).click(
		function(e) 
		{
			if(init == 0)
			{
				navH = vh;
				console.log(navH);
			} else
			{
				navH = $("#nav").height();
			}
			init = 1;
			e.preventDefault();
  			$('html, body').animate({
        	scrollTop: ($("#Project").offset().top - navH)
    		}, 1000);
  		});//end projectLink.click

  		$( ".attLink" ).click(
		function(e) 
		{
			if(init == 0)
			{
				navH = vh;
				console.log(navH);
			} else
			{
				navH = $("#nav").height();
			}
			init = 1;
			e.preventDefault();
  			$('html, body').animate({
        	scrollTop: $("#Att").offset().top - navH
    		}, 1000);
  		});//end attLink.click





	}

);// end doc.ready
*/

