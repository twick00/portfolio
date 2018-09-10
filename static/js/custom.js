import "babel-polyfill"


(async function render() {
    const $ = await import('./jquery-3.2.1.min.js');

    (function () {
        var FuncObj = {};

        /*--------------------
          * Pre Load
        ----------------------*/
        FuncObj.WebLoad = function () {
            document.getElementById("loading").style.display = "none";
        }

        /*--------------------
            * Header Class
        ----------------------*/
        FuncObj.HeaderSticky = function () {
            $(".navbar-toggler").on("click", function (a) {
                a.preventDefault(), $(".header").addClass("fixed-header")
            });
        }

        /*--------------------
            * Menu Close
        ----------------------*/
        FuncObj.MenuClose = function () {
            $('.navbar-nav .nav-link').on('click', function () {
                var toggle = $('.navbar-toggler').is(':visible');
                if (toggle) {
                    $('.navbar-collapse').collapse('hide');
                }
            });
        }


        /*--------------------
            * Header Fixed
        ----------------------*/
        FuncObj.HeaderFixed = function () {
            if ($(window).scrollTop() >= 60) {
                $('.header').addClass('fixed-header');
            }
            else {
                $('.header').removeClass('fixed-header');
            }
        }

        /*--------------------
            * Progress Bar
        ----------------------*/
        FuncObj.ProgressBar = function () {
            $(".progress .progress-bar").each(function () {
                var docViewTop = $(window).scrollTop();
                var elemTop = $(this).offset().top;
                var progressWidth = $(this).attr('aria-valuenow');
                if ((elemTop >= docViewTop)) {
                    $(this).css({
                        width: progressWidth
                    });
                }
            });
        }

        /*--------------------
        * Counter JS
        ----------------------*/
        var a = 0;
        FuncObj.Counter = function () {
            var oTop = $('.counter-box').offset.top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        }
        $(window).on("load", function () {
            FuncObj.WebLoad();
        });

        $(document).on("ready", function () {
            FuncObj.MenuClose();
            FuncObj.Counter();
            FuncObj.ProgressBar();
            FuncObj.HeaderScroll();
            // FuncObj.mTypeIt();
            FuncObj.HeaderSticky();
        });

        $(window).on("scroll", function () {
            FuncObj.Counter();
            FuncObj.ProgressBar();
            FuncObj.HeaderFixed();
        });

    })();
})()

