
// $( document ).ready(function() {
 
    // Your code here.
 
$("#nav").click(function() {
	$("html,body").animate({
		scrollTop: $("#story").offset().top
	},1000);
});


$("#nav1").click(function() {
	$("html,body").animate({
		scrollTop: $("#travelbody").offset().top
	},1000);
});


$("#nav2").click(function() {
	$("html,body").animate({
		scrollTop: $("#friendsbody").offset().top
	},1000);
});


$("#nav3").click(function() {
	$("html,body").animate({
		scrollTop: $("#sky").offset().top
	},1000);
});


$("#nav4").click(function() {
	$("html,body").animate({
		scrollTop: $("#museumbody").offset().top
	},1000);
});


$("#nav5").click(function() {
	$("html,body").animate({
		scrollTop: $("#hotpotbody").offset().top
	},1000);
});

// $("#nav6").click(function() {
// 	$("html,body").animate({
// 		scrollTop: $("#heading").offset().top
// 	},2000);
// });
















