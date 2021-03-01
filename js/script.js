$(function() { 
    let header = $(".header"),
         introH = $(".intro").innerHeight(),
         scrollOffset = $(window).scrollTop();


    // fixed--header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH) {
            header.addClass("header--fixed")
        }else{
            header.removeClass("header--fixed")
        }
    }


    // scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;
        // плавный скролл
            $("html, body").animate({
                scrollTop: blockOffset
            }, 500)
    })

    // burger
    $("#burger-click,.burger__link").on("click", function(event) {
        event.preventDefault();
        $(".burger__inner").toggleClass("active");
        $(".burger__menu").toggleClass("active");
    })

    $(".search__button").on("click", function(event) {
        event.preventDefault();
        $(".search__menu").toggleClass("active");
    })
});



    

    