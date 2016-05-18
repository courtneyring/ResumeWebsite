(function() {
$(document).ready(function() {
var timelineAnimate;
timelineAnimate = function(elem) {
return $(".timeline.animated .timeline-row").each(function(i) {
              var bottom_of_object, bottom_of_window;
                                                  bottom_of_object = ($(this).outerHeight()/2) +$(this).offset().top;
              bottom_of_window = $(window).scrollTop() + $(window).height();
                                                  console.log("Offset" + $(this).offset().top);
                                                  console.log("This.position"+$(this).position());
                                                  console.log("This.outerHeight"+$(this).outerHeight());
                  console.log("Bottom Object"+bottom_of_object);
                  console.log("Window scrolltop"+$(window).scrollTop());
                  console.log("Window Height"+$(window).height());
                  console.log("Bottom of Window"+bottom_of_window);
                  
              if (bottom_of_window > bottom_of_object) {
              return $(this).addClass("active");
              }
              });
};
timelineAnimate();
return $(window).scroll(function() {
return timelineAnimate();
});
});

}).call(this);
