/**
 * Created by SAMSUNG on 15.10.2016.
 */
var block1 = $('.block1');
var block1T = $('.block1').offset().top;
var block2 = $('.block2');
var block2T = $('.block2').offset().top;
// var block3 = $('.block3');
// var block3T = $('.block3').offset().top;
// var block4 = $('.block4');
// var block4T = $('.block4').offset().top;

var allSlidingBlocks = $('.block');

var spacer1 = $('.spacer1');

var $window = $(window);


var fixBlock1 = function ()
{
    var windowScrollTop = $window.scrollTop();
    var windowH = $window.height();
    var windowScrollBottom = windowScrollTop + windowH;

    //if block2 enters the viewport by crossing the bottom edge of the viewport
    //from the bottom, then fix block1
    //so that when continuing to scroll block 1 remains still
    //and block 2 slides over it
    if (windowScrollBottom > block2T)
    {
        //capture the top coord relative to the viewport just before
        //you set block1 to fixed (has to be done before setting to fixed -
        //because setting pos: fixed auto sets top to 0)
        var topRelToViewport = block1.get(0).getBoundingClientRect().top;
        block1.css('top', topRelToViewport + 'px');
        block1.addClass('fixed');
    } else {
        block1.removeClass('fixed');
        block1.css('top', 0);
    }

};

$window.on('scroll', fixBlock1);

var syncHeights = function ()
{
    var block1H = block1.height();
    spacer1.height(block1H);

};

$window.on('resize', syncHeights);

$window.trigger('resize');

var checkPos = function ()
{
    var windowScrollTop = $window.scrollTop();
    if (windowScrollTop > block1T)
    {
        block1.addClass('fixed');
    } else {
        block1.removeClass('fixed');
    }
    if (windowScrollTop > block2T)
    {
        block2.addClass('fixed');
    } else {
        block2.removeClass('fixed');
    }
    if (windowScrollTop > block3T)
    {
        block3.addClass('fixed');
    } else {
        block3.removeClass('fixed');
    }
    if (windowScrollTop > block4T)
    {
        block4.addClass('fixed');
    } else {
        block4.removeClass('fixed');
    }



};
// $window.on('scroll', checkPos);
