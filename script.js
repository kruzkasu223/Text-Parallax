$(document).on("scroll", function(){
    $(".para-main").css("left", Math.max(100 - 0.05*window.scrollY, -100) + "%");
})
$(document).on("scroll", function(){
    $(".para-stroke").css("left", Math.max(100 - 0.05*window.scrollY, -100) + "%");
})