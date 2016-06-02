console.clear();
console.log("External files are downloaded...")

$(document).ready(function() {
   console.log("DOM is ready"); 
   
    var ball = $('.ball');
    var height = $(window).height();
    var width = $(window).width();
    
    setTimeout(function() {
        $('.pop-up-msg').hide();
    }, 5000); // <-- time in milliseconds
   
   
    // Key pressed
    $( document ).on("keydown", function(e) {
       console.log(e.which);
        if (e.which === 39) {
            ball.animate({left: '+=200'}, 200);
        } else if (e.which === 37) {
            ball.animate({left: '-=200'}, 200);   
        } else if (e.which === 40) {
            ball.animate({top: '+=200'}, 200);
        } else if (e.which === 38) {
            if (ball.position().top - 50 > 0) {
                ball.animate({top: '-=200'}, 200);
            }
       }
    });
   
    // Reset position 
    $('.reset').on('click', function() {
        ball.css('top', '95%');
        ball.css('left', '0%');  
    });
    
    
    // Change ball color
    $('.green').on('click', function() {
        ball.css('background-color', 'green');
    });
    
    $('.blue').on('click', function() {
        ball.css('background-color', 'blue');
    });
    
    $('.yellow').on('click', function() {
        ball.css('background-color', 'yellow');
    });
    
    $('.orange').on('click', function() {
        ball.css('background-color', 'orange');
    });  
});