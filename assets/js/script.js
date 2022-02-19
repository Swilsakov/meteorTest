$(document).ready(function () {

// === Begin button ripple style === \\\
$(".ripple").on("click", function(event) {
   var _this = $(this),
       offset = $(this).offset(),
       positionX = (event.pageX - offset.left),
       positionY = (event.pageY - offset.top);
   _this.append("<span class='ripple-effect'>");
   _this.find(".ripple-effect").css({
       left: positionX,
       top: positionY
   }).animate({
       opacity: 0,
   }, 1500, function() {
       $(this).remove();
   });
});
// === End button ripple style === \\\

$('.menu-icon').click(function(){
    $('.b-nav').toggleClass('active');
    $('.menu-icon').toggleClass('active');
    $('.b-header').toggleClass('open-nav');
    $(document).on('click', function(event) {
        if (!$(event.target).closest(".b-nav , .menu-icon , .modal-dialog").length) {
            $('.b-nav').removeClass('active');
            $('.menu-icon').removeClass('active');
            $('.b-header').removeClass('open-nav');
        }
        event.stopPropagation();
    });
});

    var usd = 6,
        result_outptut = $(".b-tokenomics__bottom-total b"),
        kg = 24;

    function recount() {
        sum1 = (usd / 1.8);
        sum2 =  (( ((kg*5)*1000)*11) / 100000)
        sum3 =((sum1*sum2)/10),
/*        text1 = (usd),
        textHtml = $("#qwr"),*/

        revenue = (sum3).toFixed(1);
        result_outptut.html(revenue);
/*        textHtml.html(usd);*/
    };

    $(document).on("change keyup", "#amount", function() {
        usd = +$(this).val();
        $("#slider-range-min").slider("value", usd);
        recount();
    });
    $(document).on("change keyup", "#amount2", function() {
        kg = +$(this).val();
        $("#slider-range-min2").slider("value", kg);
        recount();
    });

    $( function() {
        var handle = $( "#custom-handle" );
        var handleValue =$("#custom-handle .custom-value");
        $( "#slider" ).slider({
            range: "min",
            value: 421,
            min: 10,
            max: 1000,
            create: function() {
                handleValue.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handleValue.text( ui.value );
                $('#amount').val(ui.value).trigger("change");
            }
        });
    } );

    $( function() {
        var handle = $( "#custom-handle2" );
        var handleValue =$("#custom-handle2 .custom-value");
        $( "#slider2" ).slider({
            range: "min",
            min: 200,
            max: 3000,
            value: 1528,
            create: function() {
                handleValue.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handleValue.text( ui.value );
                $('#amount2').val(ui.value).trigger("change");
            }
        });
    } );


/*    $(document).on("change keyup", "#slider", function() {
        client = +$(this).val();
        $("#slider-range-min").slider("value", client);
        recount();
    });*/


var swiper = new Swiper('.b-team__slider', {
    slidesPerView: 'auto',
    slidesToScroll: 1,
    freeMode: true,
    navigation: {
        nextEl: ".b-swiper-button-next",
        prevEl: ".b-swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 'auto',
        },
        768: {
            slidesPerView: 3,
        },
        1270: {
            slidesPerView: 5,
        },
    }
});

$('.pane-close').click(function(){
    $('.b-team__item').removeClass('active');
    $('.b-team__tabs .tab-pane').removeClass('active');
});


    function moveMenu(){
        if ($(window).width() < 768) {
            $(function(){




            })
        } else{
            $(function(){


                setTimeout(function() {
                    $('.b-header').addClass("h-animate").viewportChecker({
                        classToAdd: 'h-opacity',
                        offset: 0
                    });
                }, 500);

                setTimeout(function() {
                    $('.animate-down').addClass("animated").viewportChecker({
                        classToAdd: 'fadeInDown',
                        offset: 0
                    });
                }, 500);

                setTimeout(function() {
                    $('.animate-left').addClass("animated").viewportChecker({
                        classToAdd: 'fadeInLeft',
                        offset: 0
                    });
                }, 1400);
                setTimeout(function() {
                    $('.animate-right').addClass("animated").viewportChecker({
                        classToAdd: 'fadeInRight',
                        offset: 0
                    });
                }, 1400);
                setTimeout(function() {
                    $('.animate-back-in-right').addClass("animated").viewportChecker({
                        classToAdd: 'animate__backInRight',
                        offset: 0
                    });
                }, 1400);
                setTimeout(function() {
                    $('.animate-top').addClass("animated").viewportChecker({
                        classToAdd: 'fadeInUp',
                        offset: 0
                    });
                }, 1200);


            })
        }
    }
    moveMenu();

    $(window).resize(function(){
        moveMenu();
    });



});



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});


// Back to top
var backTop = $(".btn-back_to_top");
  
$(window).scroll(function() {
      if($(document).scrollTop() > 400) {
        backTop.css('visibility', 'visible');
      }
      else if($(document).scrollTop() < 400) {
        backTop.css('visibility', 'hidden');
      }
    });
    
    backTop.click(function() {
      $('html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
    

$('[data-animate="scrolling"]').each(function() {
    var self = $(this);
    var target = $(this).data('target') ? $(this).data('target') : $(this).attr('href');
        
    self.click(function(e) {
      $('body, html').animate({ scrollTop: $(target).offset().top }, 1000);
      return false;
    });
});
      