var $sectionlen=$("section").length,
	$LogoImg=$("#LogoImg"),
	$titleh1=$("#titleh1"),
	$titleh2=$("#titleh2"),
	$bgimgodd=$(".bgimg:odd"),
	$bgimgeven=$(".bgimg:even"),
	$audio=$(".audio");
$("section").height($(window).height());
$audio.height($(window).height());
$(".main").height($(window).height());
$(".main").onepage_scroll();
$LogoImg.addClass('swashIn');
function titleh1(){
	$titleh1.addClass('vanishIn')
};
function titleh2(){
	$titleh2.addClass('fadeInDown');
}
function bgimgodd(){
	$bgimgodd.addClass('puffIn');
}
function bgimgeven(){
	$bgimgeven.addClass('puffIn');
}
setTimeout(titleh1,400);
setTimeout(titleh2,1500);
setTimeout(bgimgodd,2100);
setTimeout(bgimgeven,2500);