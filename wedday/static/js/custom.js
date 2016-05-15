$(document).ready(function() {

    //Calculate the height of <header>
    //Use outerHeight() instead of height() if have padding

//when scroll
    });

    var aboveHeight = $('header').outerHeight();
$(window).scroll(function(){
        console.log($(window).scrollTop());
        console.log(aboveHeight);

        //if scrolled down more than the header’s height
        if ($(window).scrollTop() > aboveHeight){
            $('nav').addClass('navbar-fixed-top');
            $('nav').removeClass('test');
            $('nav').addClass('fix');
            $("body").css("padding-top", "70px");
        } else {
            $('nav').addClass('test');
            $('nav').removeClass('fix');
            $('nav').removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
            $('navbar').css('position','relative');
        }
    });


        // if yes, add “fixed” class to the <nav>
        // add padding top to the #content 
          //  (value is same as the height of the nav)
         /*   $('navbar').addClass('sticky');
            $('navbar').css('margin-top','0');
            //$('navbar').css('position', 'fixed');

            } else {
            $('navbar').removeClass('sticky');
            $('navbar').css('margin-top','5rem');
            //$('navbar').css('position','absolute');

        // when scroll up or less than aboveHeight,
            //remove the “fixed” class, and the padding-top
            }
        });
    });

/*

        // if yes, add “fixed” class to the <nav>
        // add padding top to the #content 
          //  (value is same as the height of the nav)
            $('nav').css('margin-top','0');

            } else {

        // when scroll up or less than aboveHeight,
           // remove the “fixed” class, and the padding-top
            $('nav').css('margin-top','5rem');
            }
*/




