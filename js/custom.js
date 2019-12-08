//back-to-top-button
$(function(){
    var back2top = $(".back-to-top");
    var html_body = $('html, body');
    back2top.click(function(){
     html_body.animate({scrollTop:0},1000);
    });
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            back2top.fadeIn(500);
        }
        else{
            back2top.fadeOut(500);
        }
        if(scrolling > 200){
            $(".menu-main").addClass("bg");
            
        }
        else{
            $(".menu-main").removeClass("bg");
        }
    });
    
     //animation smooth scroll js
    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 700,);
                return false;
            }
        }
    });
   $(document).ready(function(){
    $('.venobox').venobox(); 
});

});

