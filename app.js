console.clear();
console.log('external files downloaded...');

// Anonymous function of pageIsReady //
$(document).ready(function() {
    console.log("DOM is ready....");
    
    // Your dom manipulation goes here //
    $('h2').click(function() {
        $('h2').css("color", "#ffff00");
    });
    
    $('h1').click(function() {
        $('h1').css("color", "#ff0000");
    })
    
});

