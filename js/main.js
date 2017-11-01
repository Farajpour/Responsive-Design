$(document).foundation();

//

// Function for Responsive Header Menu
function mobileNav() {
    document.getElementById("toggleClick").style.display = "block";
    document.getElementById("nav-event").style.display = "block";
}

function navEvent() {
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("toggleClick").style.display = "none";
}

$(window).resize(function () {
    if ($(window).width() >= 980) {
        document.getElementById("toggleClick").style.display = "block";
    }else if ($(window).width() <= 980) {
        document.getElementById("toggleClick").style.display = "none";
    }
});

// Function for Show Login Box after click on SignUp 
function loginNav() {
    document.getElementById("login-event-success").style.display = "none";    
    document.getElementById("login-event-show").style.display = "block";
    document.getElementById("modal-event").style.display = "block";
    document.getElementById("login-event-hidden").style.display = "block";

};

function validateForm() {
    var x = document.getElementById("login-input").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    successEventShow()    
}

// Function for Show and Hidde Success Page
function successEventShow() {
    document.getElementById("login-event-hidden").style.display ="none";
    document.getElementById("login-event-success").style.display = "block";
}

function successEventHidden() {
    document.getElementById("login-event-show").style.display = "none";
    document.getElementById("modal-event").style.display = "none";    
}

function modalEvent() {
    document.getElementById("modal-event").style.display = "none";
    document.getElementById("login-event-show").style.display = "none";
    document.getElementById("login-event-hidden").style.display = "none";
    document.getElementById("login-event-success").style.display = "block";   
}

// Jquery for Owl-Slider
$(document).ready(function () {
    $("#owl-first").owlCarousel({
        navigation: false,
        slideSpeed: 100,
        paginationSpeed: 800,
        singleItem: false,
        autoPlay: true,
        itemsDesktop : [1499,3],
        itemsDesktopSmall : [1199,3],
        itemsTablet : [899,2],
        itemsMobile : [599,1],
    });
});

// Jquery for Owl-Slider
$(document).ready(function () {
    $("#owl-second").owlCarousel({
        navigation: false,
        slideSpeed: 100,
        paginationSpeed: 800,
        singleItem: false,
        autoPlay: true,
        itemsDesktop : [1499,3],
        itemsDesktopSmall : [1199,3],
        itemsTablet : [899,2],
        itemsMobile : [599,1],
    });
});

// // Jquery for Orbit-Slider
$(window).load(function() {
    $('#responsive').orbit({
        bullets: true,
        fluid: true, 
        timer: false, 
        
        
    });
});

