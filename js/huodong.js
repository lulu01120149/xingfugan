$(function(){
	class Huodong{
		constructor(){
			this.number = 1;
			this.shu = 0;
			this.lock = true;
			this.data();
			this.page();
			this.click();
			this.nav();
			this.dian();
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
		data(){
			var temp = $("#template").html();
			$.get('../js/data.json',function(data){
				$('.huodong ul').empty();
				console.log(data);
				data = typeof data == 'object' ? data : eval("(" +data+ ")");
				var arr = data.data;
				console.log(arr);
				for (var i = 0; i < arr.length; i++) {
					var Domstr = templateFn(temp,arr[i]);
					if(i<6){
						$('.huodong .lis1').append(Domstr);
					}else if(i>=6 && i<12){
						$('.huodong .lis2').append(Domstr);
					}else if(i>=12 && i<18){
						$('.huodong .lis3').append(Domstr);
					}else if(i>=18 && i<24){
						$('.huodong .lis4').append(Domstr);
					}else if(i>=24 && i<30){
						$('.huodong .lis5').append(Domstr);
					}else if(i>=30 && i<36){
						$('.huodong .lis6').append(Domstr);
					}else if(i>=36 && i<42){
						$('.huodong .lis7').append(Domstr);
					}else if(i>=42 && i<48){
						$('.huodong .lis8').append(Domstr);
					}
					
				}
				function templateFn(temp,data){
					return temp.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
						return data[$1];
					});
				}
			})
		}
		page(){
			$("#pager .num").on("click",function(e){
				e.preventDefault();
				var index = $(this).index() -2;
				console.log(index);
				$(this).css("color",'red').siblings().css("color","#337ab7");
				$(".huodong ul").eq(index).css("display","block").siblings().css("display","none");
			})
		}
		click(){
			var self = this;		
			$(".next").on("click",function(e){
				e.preventDefault();					
				self.number ++;
				console.log($(".num").eq(self.number))
				if(self.number > 8){
					self.number = 8;
				}
				$(".num").eq(self.number-1).css("color","red").siblings().css("color","#337ab7");
				$(".huodong ul").eq(self.number-1).css("display","block").siblings().css("display","none");
			})
			$(".prev").on("click",function(e){
				e.preventDefault();
				self.number --;
				if(self.number < 0){
					self.number = 0;
				}
				$(".num").eq(self.number-1).css("color","red").siblings().css("color","#337ab7");
				$(".huodong ul").eq(self.number-1).css("display","block").siblings().css("display","none");
			})
		}
		dian(){
			var self = this;
			$(".shouye").on("click",function(e){
				e.preventDefault();
				console.log(self.shu);
				$(".num").eq(self.shu).css("color","red").siblings().css("color","#337ab7");
				$(".huodong ul").eq(self.shu).css("display","block").siblings().css("display","none");
			})
			$(".last").on("click",function(e){
				e.preventDefault();
				console.log(self.shu);
				$(".num").eq(self.shu+7).css("color","red").siblings().css("color","#337ab7");
				$(".huodong ul").eq(self.shu+7).css("display","block").siblings().css("display","none");
			})
			
		}
		
	}
	new Huodong();
})
