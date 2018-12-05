$(document).ready(function() {
    $(".nieuwsbrief").click(function(){
        $(".formwrapper").toggleClass("verborgen");
        $(this).hide();
    });

    $(".closebutton").click(function(){
        $(".formwrapper").toggleClass("verborgen");
        $(".nieuwsbrief").show();
    });

});
