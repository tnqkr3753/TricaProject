/*  ---------------------------------------------------
    Template Name: Directing
    Description:  Directing directory listing HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    
    /*--------------------------
    Testimonial Slider
    ----------------------------*/
    var testimonialSlider = $(".testimonial__slider");
    testimonialSlider.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        startPosition: 'URLHash',
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    /*-----------------------------
        Listing Details Slider
    -------------------------------*/
    $(".listing__details__gallery__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*-----------------------
		Price Range Radius
	------------------------ */
    var rangeSlider = $(".price-range-radius"),
        radius = $("#radius");
    rangeSlider.slider({
        range: 'min',
        min: 0,
        max: 2,
        value: 1,
        slide: function (event, ui) {
            radius.val(ui.value + 'km');
        }
    });
    radius.val(rangeSlider.slider("value") + 'km');

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSliderPrice = $(".price-range"),
        minamount = $("#minamount");
        rangeSliderPrice.slider({
        range: 'min',
        min: 0,
        max: 80,
        value: 20,
        slide: function (event, ui) {
            minamount.val('$' + ui.value);
        }
    });
    minamount.val('$' + rangeSliderPrice.slider("value"));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.listing__details__gallery__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.listing__details__gallery__item__large').attr('src');
        if (imgurl != bigImg) {
            $('.listing__details__gallery__item__large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#a8a8a8",
        cursorwidth: "8px",
        background: "rgba(168, 168, 168, 0.3)",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

    $(".filter.nice-scroll").niceScroll({
        cursorcolor: "#a8a8a8",
        cursorwidth: "8px",
        background: "rgba(168, 168, 168, 0.3)",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
		Barfiller
	--------------------*/
    $('#bar1').barfiller({
        barColor: "#f03250",
    });

    $('#bar2').barfiller({
        barColor: "#f03250",
    });

    $('#bar3').barfiller({
        barColor: "#f03250",
    });

    $('#bar4').barfiller({
        barColor: "#f03250",
    });

    $('#bar5').barfiller({
        barColor: "#f03250",
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
      });
    //카테고리에 name추가
    var firstSelect = $('.fir > select');
    var secondSelect = $('.sec > select');
    var options = [["TV/영상가전","냉장고","세탁기","스타일러"], ["카메라","게임","음향기기"],["전기밥솥","전자레인지/오븐","믹서/쥬서/원액기","식기세척기/살균기"],["노트북","데스크탑","프린트","휴대폰"], ["에어컨","가습기","공기청정기","난로/히터"]];
    firstSelect.attr('name','big_category');
    secondSelect.attr('name','small_category');
    firstSelect.change(function(){
    	switch($(this).val()){
	    	case "1":
	    		alert(secondSelect);
	    		changeOption(0);
	    		break;
	    	case "2":
	    		changeOption(1);
	    		break;
	    	case "3":
	    		changeOption(2);
	    		break;
	    	case "4":
	    		changeOption(3);
	    		break;
	    	case "5":
	    		changeOption(4);
	    		break;
    	}
    });
	function changeOption(num){
	    secondSelect.find('option').remove();
	    for(var i = 0 ; i < options[num].length; i++){
	    	
	    	secondSelect.append("<option value='"+i+"'>"+options[num][i]+"</option>");
    	}
	    secondSelect.niceSelect('update');
	}

})(jQuery);