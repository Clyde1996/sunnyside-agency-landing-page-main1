$(document).ready(function(){
    // The Higher size for Mobile/Tablet display
    let mobileSize = 1000;
    

    function OnResizePage() {
        if (window.innerWidth > mobileSize) {
            // En version desktop, on cache le burgermenu et le boutton pour ouvrir
            $("#burgermenu").show();
            $("#menu-open").hide();
        } else {
            // En mode mobile on affiche le boutton pour ouvrir le menu burger
            $("#menu-open").show();
            $("#burgermenu").hide(); // Assurez-vous que le menu burger est caché initialement sur les appareils mobiles
        }
    }
    window.addEventListener('resize', function(event) {
        OnResizePage();
    }, true);

    // Quand la page charge :
    OnResizePage();
    
    // Burgermenu buttons interactions
    $("#menu-open").click(function() {
        $("#burgermenu").fadeIn({duration: 300});
        $("#menu-open").hide();
    })
    
    $("#menu-close").click(function() {
        $("#burgermenu").fadeOut({duration: 300});
        $("#menu-open").show();
    })

    // Burgermenu buttons interactions
    $("#menu-open").click(function() {
        $("#burgermenu").fadeIn({duration: 300});
        $("#menu-open").hide();
        $("body").css("overflow", "hidden"); // Bloquer le défilement du corps
    })

    $("#menu-close").click(function() {
        $("#burgermenu").fadeOut({duration: 300});
        $("#menu-open").show();
        $("body").css("overflow", "auto"); // Rétablir le défilement du corps
    })
   

});