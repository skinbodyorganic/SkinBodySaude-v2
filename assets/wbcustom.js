// Dropdown Hover
$(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-menu").slideUp("fast");
    }            
});
$(document).ready(function() {

    // Collection list
    $('.wbslickcoll').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5 
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2
          }
        }
    ]
    });

    // Tab product
    $('.wbslicktab,.wbslickfcoll').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        }
    ]
    });

    // Special product
    $('.wbslickspe').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1590,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
    ]
    });

    // Category product
    $('.catnav-tabs').slick({
      dots: false,
      arrows: false,
      infinite: false,
      rows: 7,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    });
    $('.wbslickcattab').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1
            }
          }
      ]
    });

    // Blog
    $('.wbslickblog').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
    ]
    });

    // Logo slider
    $('.wbslicklogo').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 7
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3
          }
        }
    ]
    });

    // Toprated product
    $('.wbslicktopr,.wbslickbest').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
    ]
    });

    // Testimonial
    $('.wbslicktesti').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
    ]
    });


    // Show hide popover
    // $(document).on('click', '.dropdown', function(e) {
    //     $(this).find(".dropdown-menu").slideToggle("fast");
    // });

    // User and Cart Toggle
    $(document).on('click', '.hmuser,.wbcollscart', function(e) {
        $(this).toggleClass('active');
        $(this).next().slideToggle('fast');
        $(".dropdown-menu").not($(this).next()).slideUp('fast');
    });

    // Home Page Product Tab
    $(".nav-tabs .nav-item.active").click();
    $(document).on('click', '.nav-tabs .nav-item', function(e) {
        e.preventDefault();
        $(".nav-tabs .nav-item").removeClass('active');
        $(this).addClass('active');
        let tid=  $(this).find('a').attr('href');
        $('.tab-pane').removeClass('active show');
        $(tid).addClass('active show');
    });

    // Category tab
    $(".catnav-tabs .catnav-item.active").click();
    $(document).on('click', '.catnav-tabs .catnav-item', function(e) {
        e.preventDefault();
        $(".catnav-tabs .catnav-item").removeClass('active');
        $(this).addClass('active');
        let tid=  $(this).find('a').attr('href');
        $('.cattab-pane').removeClass('active show');
        $(tid).addClass('active show');
    });

    // Collapse Toggle
    $(document).on('click', '.toggle.collapsed', function(e) {
        $(this).toggleClass('active');
        $(this).next().slideToggle('fast');
    });

    // Lookbook Active
    $(".wblookbtn.active").click();
    $(document).on('click', '.wblookbtn', function(e) {
        e.preventDefault();
        $(".wblookbtn").removeClass('active');
        $(this).toggleClass('active');
        let tid=  $(this).find('a').attr('href');
        $('.wblookbleft').removeClass('active');
        $('#wblook'+$(this).attr('target')).toggleClass('active');
    });

    // Scroll to top sticky cart
    $(".wbstickyadd_cart").addClass("scrollsky");
        $(window).scroll(function () {
        if ($(this).scrollTop() === 0) {
            $(".wbstickyadd_cart").addClass("scrollsky")
        } else {
            $(".wbstickyadd_cart").removeClass("scrollsky")
        }
    });

    // Scroll To top
    $("#scroll").addClass("scrollhide");
        $(window).scroll(function () {
        if ($(this).scrollTop() === 0) {
            $("#scroll").addClass("scrollhide")
        } else {
            $("#scroll").removeClass("scrollhide")
        }
    });
    $(document).on('click', '#scroll', function(e) {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    // Collection Grid/List View
    $(document).on('click', '.wblistgridbtn', function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).hasClass('listv')) {
            $('#product-grid').addClass('product-list').removeClass('product-grid').removeClass('product-galleryv');
        } else if ($(this).hasClass('gridv')) {
            $('#product-grid').addClass('product-grid').removeClass('product-list').removeClass('product-galleryv');
        } else if ($(this).hasClass('galleryv')) {
            $('#product-grid').addClass('product-galleryv').removeClass('product-list').removeClass('product-grid');
        }
    });

    if ($(window).width() <= 767) {
        // $(".wbftlangcur").appendTo(".hmuser .customer_account");
        // $(".wbheadwish").appendTo(".slidedown_section .customer_account");
        $("localization-form #FooterCountryForm").appendTo(".slidedown_section .customer_account");
        $("localization-form #FooterLanguageForm").appendTo(".slidedown_section .customer_account");
    };

    // Countdown Timer
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        Date.prototype.yyyymmdd = function() {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
            var dd  = this.getDate().toString();
            return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]); // padding
        };
        var date = new Date();
        if (finalDate > date.yyyymmdd()){
            $(this).parents('.timer_outer').css('display','block');
        }else{
            $(this).parents('.timer_outer').css('display','none');  
        }
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<li><span>%D</span><p>Days</p></li><li><span>%H</span><p>Hours</p></li><li><span>%M</span><p>Mins</p></li><li><span>%S</span><p>Secs</p></li>'));
        });
    });

    // Box Layout
    $(".wbboxdemo").click(function(){
        $(".wbboxlt").attr("id","wbboxlayout");
    });
    $(".wbwidedemo").click(function(){
        $(".wbboxlt").removeAttr("id");
    }); 
    // Color Customizer
    $("body").on("click", ".wbinnerclr a", function(e){
    e.preventDefault();
    $('.wbinnerclr').find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('[wbcolorname=""]').remove();
    if(!$(this).hasClass($('html').attr(''))) $("body").append('<link rel="stylesheet" type="text/css" wbcolorname href="' + $(this).attr('href') + '">');
    });
    // Rtl Mode
    $("body").on("click", ".wbrtlmode a", function(e){ 
    e.preventDefault();
    $('.wbrtlmode').find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('[wbrtl=""]').remove();
    if(!$(this).hasClass($('html').attr(''))) $("body").append('<link rel="stylesheet" type="text/css" wbrtl href="' + $(this).attr('href') + '">');
    });
    // Color Open/Close 
    $('.wbopen-closeclr').click(function() {
        if ($(this).hasClass('wbclrdisable')) {
            $(this).removeClass('wbclrdisable');
            $(this).addClass('wbclrenable');
            $('.wbcolor_box').animate({right: '30px'}, 450);
            $('.wbcolor_box').css({'box-shadow': '0 10px 35px 10px rgba(0,0,0,.06)', 'background': '#fff', 'border-radius': '4px 0 4px 4px'});
            $('.wbcolor_option,.wbcolor_title').animate({'opacity': '1'}, 450);
        } else {
            $(this).removeClass('wbclrenable');
            $(this).addClass('wbclrdisable');
            $('.wbcolor_box').animate({right: '-250px'}, 450);
            $('.wbcolor_box').css({'box-shadow': 'none', 'background': 'transparent'});
            $('.wbcolor_option,.wbcolor_title').animate({'opacity': '0'}, 450);
        }
    });
    

}); // Document Ready Div End