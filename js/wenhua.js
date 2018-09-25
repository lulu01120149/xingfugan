class Block{
	constructor(){
		this.click();
	}
	click(){
		$(".nav_cont_list").on("click",function(){
			$(".nav_cont_list ul").fadeToggle();
		})
		
		$(window).on("resize",function(){
			if ( document.body.clientWidth>=1201) {
				$(".nav_cont_list ul").show();
			}else{
				$(".nav_cont_list ul").hide();
			}
		})
		
	}
}
new Block();
