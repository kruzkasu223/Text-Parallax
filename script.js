$(document).on("scroll", function(){
    $(".para-main").css("left", Math.max(1000 - 0.35*window.scrollY, -5000) + "px");
})
$(document).on("scroll", function(){
    $(".para-stroke").css("left", Math.max(1000 - 0.35*window.scrollY, -5000) + "px");
})