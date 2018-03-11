//scroll
$(document).ready(function(){
    $('.link').click( function(){
    var scroll_item = $(this).attr('href');
    if ($(scroll_item).length != 0) {
    $('html, body').animate({ scrollTop: $(scroll_item).offset().top }, 1000);
    }
    return false;
    });


//progressbar circle

    $('#circle-1').circleProgress({
        startAngle: 99,
        value: 0.90,
        size: 163,
        animation: false,
        thickness: 20,
        fill: {
          gradient: ["#30bae7"]
        }
      });
    $('#circle-2').circleProgress({
        startAngle: 99,
        value: 0.75,
        size: 163,
        animation: false,
        thickness: 20,
        fill: {
          gradient: ["#d74680"]
        }
      });
    $('#circle-3').circleProgress({
        startAngle: 99,
        value: 0.70,
        size: 163,
        animation: false,
        thickness: 20,
        fill: {
          gradient: ["#15c7a8"]
        }
      });
    $('#circle-4').circleProgress({
        startAngle: 99,
        value: 0.85,
        size: 163,
        animation: false,
        thickness: 20,
        fill: {
          gradient: ["#eb7d4b"]
        }
      });
});