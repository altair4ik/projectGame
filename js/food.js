var steakImages;

function Steak() {
    var fryCheck = false;
    this.create = function () {
        $('body').append("<div class='steak'>" +
            "<div class='steak-images'>" +
                "<img src='img/steak.png' class='steak-img food-first-img'>" +
                "<img src='img/steak2.png' class='steak-img food-second-img'>" +
                "<img src='img/steak3.png' class='steak-img food-thread-img'>" +
                "<img src='img/steak4.png' class='steak-img food-fourth-img'>" +
            "</div>"+
                "<div class='smoke-wrapper'>"+
                "<img src='img/smoke.png' class='steak-img smoke'>" +
                "</div>" +
            "</div>");
        steakImages = $('.steak-img');
        $(steakImages[0]).animate({opacity : '1'},3000)
    };
    this.goToGrill = function () {
        $('.steak').animate({'top' : '210px', 'left' : '210px'}, 1000);
    };
    this.fry = function () {
        if(fryCheck) {
            $(steakImages[2]).animate({opacity: '0'}, 10000);
            $(steakImages[3]).animate({opacity: '1'}, 1);
        } else {
            $(steakImages[0]).animate({opacity: '0'}, 10000);
            $(steakImages[1]).animate({opacity: '1'}, 1);
            return fryCheck = true;
        }
    };

    this.rotate = function () {
        $('.steak').css('transform', 'rotate(180deg)');
        $(steakImages[1]).css('opacity', '0');
        $(steakImages[2]).css('opacity', '1');
    };

    this.vibrateOn = function () {
        $('.steak-images').jrumble();
        $('.steak-images').trigger('startRumble');
        $('.smoke').css('filter', 'brightness(0)');
    };

    this.vibrateOff = function () {
        $('.steak-images').trigger('stopRumble');
    };

    this.smokeOn = function () {
        $('.smoke').animate({'opacity' : '1'}, 1000);
        $('.smoke').animate({'filter' : 'brightness(0)'}, 3000);
        $('.smoke').css('filter', 'brightness(1)');
    };

    this.smokeOff = function () {
        $('.smoke').animate({'opacity' : '0'}, 3000)
    }

    this.out = function () {

    };

    this.destroy = function () {

    }
}