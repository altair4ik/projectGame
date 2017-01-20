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
            "</div>");
        steakImages = $('.steak-img');

    };
    this.goToGrill = function () {
        $('.steak').animate({'top' : '210px', 'left' : '210px', 'opacity' : '1'}, 1000);
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

    this.vibrate = function () {
        $('.steak-images').jrumble();
        $('.steak-images').trigger('startRumble');
        setTimeout(function() {$('.steak-images').trigger('stopRumble');}, 4000);
    };

    this.smoke = function () {

        var smokeAddId = 0,
            smokeRemoveId;

        smokeRemoveId = smokeAddId;

        $('.steak').append("<div class='smoke-wrapper' id='" + (smokeAddId++) + "'>"+
            "<img src='img/smoke.png' class='steak-img smoke'>" +
            "</div>");

        $('.smoke').animate({'opacity' : '1'}, 1000);

        $('.smoke').jrumble({
            x: 1,
            y: 1,
            rotation: 0
        });
        $('.smoke').trigger('startRumble');

        $('.smoke').css('filter', 'brightness(0)');
        $('.smoke-wrapper').css('top', '-200px');
        $('.smoke-wrapper').css('left', '150px');
        $('.smoke').animate({'opacity' : '0'}, 5000);
        setTimeout(function() {$('#' + smokeRemoveId).remove()}, 5000);
    };

    this.out = function () {
        $('.steak').animate({'opacity' : '0', 'left' : '2000px'},500)
    };

    this.destroy = function () {
        return $('.steak').remove();
    }
}