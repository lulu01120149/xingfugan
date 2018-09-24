class Block{
	constructor(){
		this.click();
	}
	click(){
		$(".nav_cont_list").on("click",function(){
			$(".nav_cont_list ul").fadeToggle();
		})
	}
}
new Block();
