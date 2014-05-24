// JavaScript Document

$('a.responsiveMenu').click(function(){

	$('.mainnav').slideToggle('medium');	

});
$("div.synpsys div.synpsys_txt").css({
	"display" : "none"
});
$( "a.synopsis").on("click", function(event) {
	event.preventDefault();
	//$( this).parent().find('.synpsys_txt').slideToggle( "medium");
	
	var parent = $(this).parent();
	parent = parent[0];
	var containerHeight = $(parent).parent().height();
	if($("div.synpsys_txt", parent).is(":visible")) {
		$(this).parent().animate({
			"bottom" : "-232"
		},300, function() {
			$("div.synpsys_txt", parent).css({
				"display" : "none"
			});
			$(parent).css({
				"position" : "",
				"bottom"   : ""
			});
			$(parent).parent().removeAttr('style');
		});

	}
	else {
		$(parent).parent().css({
			"height" : containerHeight+"px"
		});
		var container = $(parent).parent();
		container = container[0];
		$("div.synpsys_txt", parent).css({
			"display" : "block"
		});
		$(parent).css({
			"position" : "absolute",
			"bottom"   : "-232px"
		});	
		$(this).parent().animate({
			"bottom" : "0px"
		},300);
	}
	
});



//$(document).ready(function(e) {	

//	$("a.responsiveMenu").click(function(){			

//		$(this).siblings('nav').toggleClass("all_nav", 4000);

//	});	

//});







