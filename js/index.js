(function(){
	class Nav{
		constructor(){
			this.init();
		}
		init(){
			var i = 1;
            $('.mainMenu').click(function () {
                ++i;
                if (i % 2 == 0) {
                    $('.kch_nav_menu').fadeIn(500);
                    $(this).css('color', '#b6b6b6');
                } else {
                    $('.kch_nav_menu').fadeOut(500);
                    $(this).css('color', '#42AF41');
                }

            })

		}
	}
	new Nav();
})()
