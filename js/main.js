$("#menu-button, #menu-fist").click(function(){
    
    $("#menu-button, #top_fist").toggleClass("active")
    $("#menu").toggleClass("active")
})


$(document).scroll(function(){

    fromTop = $(document).scrollTop()
    offset = 10

    fft = $("#contact").position().top-fromTop

    if ((fft-offset) <=$(".title-top").position().top ) {
        $(".title-top, #menu-button, #menu-fist").addClass("invert")
    } else {
        $(".title-top, #menu-button, #menu-fist").removeClass("invert")
    }


    if ((fft-offset) <=$(".title-bottom").position().top ) {
        $(".title-bottom").addClass("invert")
    } else {
        $(".title-bottom").removeClass("invert")
    }

    
})

$("#menu li").click(function(){
    id= "#"+$(this).attr("id").replace("menu-","");
    $("#menu").css("opacity","0");
    setTimeout(function(){
        $("#menu, #menu-button").removeClass("active");
        $("#menu").attr("style","")
        $(document).scrollTo(id, 400)
    },400)
});

$("h2").click(function(){
    $(document).scrollTo("#example-demand",400)
})

$("#lang div").click(function(){
    $("#lang div").removeClass("active");
    $(this).addClass("active");

    $("section").fadeOut(400)
    setTimeout(function(){

        $("section").fadeIn(400)
    },400)
})