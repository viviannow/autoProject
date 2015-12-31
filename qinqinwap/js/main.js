// var mySwiper = new Swiper('.swiper-container',{
// 		slidesPerView: 4.5,
// 		//Enable Scrollbar
// 		scrollbar: {
// 		  //container: '.swiper-scrollbar',
// 		  hide: false,
// 		  draggable: true,
// 		  snapOnRelease: true  
// 		}
// 	});
// 回到顶部
$('.bactop').click(function(){
	// alert(1)
	$(window).scrollTop(0);
});