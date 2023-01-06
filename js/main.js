$("#menu-button").click(function(){
    
    $(this).toggleClass("active")
    $("#menu").toggleClass("active")
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