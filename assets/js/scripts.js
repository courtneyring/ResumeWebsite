

$('.navbar-collapse').click('li', function() {
                            $('.navbar-collapse').collapse('hide');
                            });

$('.navbar-toggle').click(function(){
                         if($('.navbar-collapse').hasClass('in')){
                            $('.navbar-collapse').collapse('hide');
                                                         }
                          else{
                          $('.navbar-collapse').collapse('show');
                          }
});
/*
$('.navbar-collapse.collapse').click(function(){
                                        $('.navbar-collapse').collapse('show');
                                        });

$('nav li').on('click', function(){
               $('.navbar-collapse').collapse('hide');});
}*/



//floorCast Hover
$('#floorcast').hover(function(){
                      $('#myHealthie').animate({opacity:0.5},100);
                      }, function(){
                      $('#myHealthie').animate({opacity:1.0},100);

                      });
$('#floorcast').hover(function(){
                      $('#theWell').animate({opacity:0.5},100);
                      }, function(){
                      $('#theWell').animate({opacity:1.0},100);
                      
                      });

//The Well Hover
$('#theWell').hover(function(){
                      $('#myHealthie').animate({opacity:0.5},100);
                      }, function(){
                      $('#myHealthie').animate({opacity:1.0},100);
                      
                      });
$('#theWell').hover(function(){
                      $('#floorcast').animate({opacity:0.5},100);
                      }, function(){
                      $('#floorcast').animate({opacity:1.0},100);
                      
                      });

//myHealthie Hover
$('#myHealthie').hover(function(){
$('#floorcast').animate({opacity:0.5},100);
}, function(){
$('#floorcast').animate({opacity:1.0},100);
                       });
$('#myHealthie').hover(function(){
$('#theWell').animate({opacity:0.5},100);
}, function(){
$('#theWell').animate({opacity:1.0},100);
});



$(document).ready(function(){
// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#myNavbar a").on('click', function(event) {

// Prevent default anchor click behavior
event.preventDefault();

// Store hash
var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
window.location.hash = hash;
});
});
});
                  


$(".fancybox")
.fancybox({
margin: [80, 20, 75, 20],
afterLoad   : addLinks,
beforeClose : removeLinks,
padding:0,
helpers : {
title: {
type: 'inside',
position: 'bottom'
}
}
          

});
function addLinks() {
var list = $("#links");

if (!list.length) {
list = $('<ul id="links">');

for (var i = 0; i < this.group.length; i++) {
$('<li data-index="' + i + '"><label></label></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
}

list.appendTo( 'body' );
}

list.find('li').removeClass('active').eq( this.index ).addClass('active');
}

function removeLinks() {
$("#links").remove();
}





