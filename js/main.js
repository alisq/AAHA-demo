$("#menu-button").click(function(){
    
    $(this).toggleClass("active")
    $("#menu").toggleClass("active")
})


$("#menu li").click(function(){
    id= "#"+$(this).attr("id").replace("menu-","");
    $("#menu").fadeOut(400);
    setTimeout(function(){
        $("#menu").removeClass("active");
        $(document).scrollTo(id, 400)
    },400)
});

$("h2").click(function(){
    $(document).scrollTo("#example-demand",400)
})