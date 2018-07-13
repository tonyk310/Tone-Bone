		 $(".scroll").click(function(event) {
		 	event.preventDefault();
		    var anchor = $(this).attr('href');
		    $('html, body').animate({
		        scrollTop: $(anchor).offset().top
		    }, 1300);
		}); 