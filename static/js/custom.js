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
            * Smooth Scroll
        ----------------------*/
        FuncObj.HeaderScroll = function () {
            $('a[href*="#"]:not([href="#"])').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset.top - 65,
                        }, 1000);
                        return false;
                    }
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
            * Tyoe It
        ----------------------*/
        FuncObj.mTypeIt = function () {
            let type = new TypeIt('#type-it', {
                speed: 100,
                loop: false,
                strings: [
                    'Professional Web Developer',
                ],
                breakLines: false
            }).pause(4000)
                .delete(33).options({speed: 150}).type("Professional React Ninja").pause(1000)
                .delete(11).type("[Object object]").delete(15).type("Web Developer").options({cursor: false})
        }


        /*--------------------
            * Progress Bar
        ----------------------*/
        FuncObj.ProgressBar = function () {
            $(".progress .progress-bar").each(function () {
                var docViewTop = $(window).scrollTop();
                var elemTop = $(this).offset().top;
                var progressWidth = $(this).attr('aria-valuenow') + '%';
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
            FuncObj.mTypeIt();
            FuncObj.HeaderSticky();
        });

        $(window).on("scroll", function () {
            FuncObj.Counter();
            FuncObj.ProgressBar();
            FuncObj.HeaderFixed();
        });

    })();
})()

