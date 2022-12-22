$("#menu-button").click(function(){
    
    $(this).toggleClass("active")
    $("#menu").toggleClass("active")
})


$("#menu li").click(function(){
    id= "#"+$(this).attr("id").replace("menu-","");
    $("#menu").fadeOut(400);
    setTimeout(function(){
        $("#menu").removeClass("active");
        $(document).scrollTo(id, 300)
    },400)
})