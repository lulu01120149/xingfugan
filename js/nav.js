(function(){
	class Nav{
		constructor(){
			this.nav();
		}
		nav(){
			var self = this;
			$(".pad-trigger").on("click",function(){
				if(self.lock){
					$(".kch_nav_menu").css("display","block");
					self.lock = false;
				}else{
					$(".kch_nav_menu").css("display","none");
					self.lock = true;
				}
			})
		}
	}
	new Nav();
})()