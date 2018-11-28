jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
    
    $(".banner").animate({height: '670px'}, 1000);
	$(".wrapper_Ar_M").delay(500).addClass("block");
	$(".wrapper_E_M").delay(2000).addClass("block");

	$(".logo").delay(4000).fadeOut(1000);
		$(".logo").animate({
			top: '-11%',
			left: '-10%',
			width: '50%',
			height: '48%'
		},100);
		$(".logo").fadeIn(500);

		// $(".scr1").delay(5000).css('transform', 'scale(.8)');
		$(".scr1").delay(10500).animate({
			// 'font-size': '25px',
			opacity: '1'
		},1000);
		$(".scr2").delay(9500).animate({
			// 'font-size': '25px',
			// border: '3px'
			opacity: '1'
		},800);
		$(".scr3").delay(8500).animate({
			// 'font-size': '25px',
			// border: '3px'
			opacity: '1'
		},600);
		
		$("#trigger-overlay").delay(7500).animate({
			// 'font-size': '25px',
			// border: '3px'
			opacity: '1'
		},600);

		// $(".scr2").delay(8000).css('transform', 'scale(.8)');
		// $(".scr3").delay(11000).css('transform', 'scale(.8)');

	// 	$(".logo").delay(4000).animate({
	// 		bottom: '47%',
	// 		left: '-20%',
	// 		width: '60%',
	// 		height: '75%'
	// }, 2500, function(){
	// 	$(this).fadeIn(100)
	// });

	// $(".logo").delay(4000).animate({
	// 	bottom: '47%',
	// 	left: '-20%',
	// 	width: '60%',
	// 	height: '75%'
	// }, 2500);
});