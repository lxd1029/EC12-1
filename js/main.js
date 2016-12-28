var $sectionlen = $("section").length,
	$LogoImg = $("#LogoImg"),
	$titleh1 = $("#titleh1"),
	$titleh2 = $("#titleh2"),
	$bgimgodd = $(".bgimg:odd"),
	$bgimgeven = $(".bgimg:even"),
	$audio = $(".audio"),
	$Audioli = $("#Audio li");
$("section").height($(window).height());
$audio.height($(window).height());
$(".main").height($(window).height());
$(".main").onepage_scroll();
$LogoImg.addClass('swashIn');

function titleh1() {
	$titleh1.addClass('vanishIn')
};

function titleh2() {
	$titleh2.addClass('fadeInDown');
}

function bgimgodd() {
	$bgimgodd.addClass('puffIn');
}

function bgimgeven() {
	$bgimgeven.addClass('puffIn');
}
setTimeout(titleh1, 400);
setTimeout(titleh2, 1500);
setTimeout(bgimgodd, 2100);
setTimeout(bgimgeven, 2500);

/* 播放列表 */
$Audioli.click(function(){
	var $index = $(this).index(),
		$audio = $("audio")[$index],
		$audioall = [$("audio")[0],$("audio")[1],$("audio")[2],$("audio")[3],$("audio")[4],$("audio")[5]];
	$.each($audioall,function(){
		this.pause();
		this.currentTime=0;
		});
	$audio.play();
});
/* 播放列表结束 */