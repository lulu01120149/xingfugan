$(".playvideo").click(function(){
	$('#videopanel').css('display','block');
	$('.background').css('display','block');
})

$("#flase").click(function(){
	$('#videopanel').css('display','none');
	$('.background').css('display','none');
})

$(".pad-trigger").toggle(
	function() {
		$('.kch_nav_menu').css({"display":'block','opacity':"1"})
	},function(){
		$('.kch_nav_menu').css({"display":'none', 'opacity':"0"})
	}
)