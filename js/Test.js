var steakImages;



function Test() {
    var fryCheck = false,
        id = 0,
        food = 'test',
        foodId = food + id++;

    this.create = function () {
        $('div.grill').append("<div class='steak' id='" + foodId + "'>" +
            "<div class='steak-images'>" +
            "<img src='img/steak.png' class='steak-img food-first-img'>" +
            "<img src='img/steak2.png' class='steak-img food-second-img'>" +
            "<img src='img/steak3.png' class='steak-img food-thread-img'>" +
            "<img src='img/steak4.png' class='steak-img food-fourth-img'>" +
            "</div>"+
            "</div>");
        steakImages = $('.steak-img');

        return foodId;
    };

    this.randomPosition = function() {

        var positions = ['top', 'bottom', 'left', 'right'],
            index = Math.floor(Math.random() * 4),
            startPosition = positions[index];

        switch (startPosition){
            case 'top':
                $('#' + foodId).css({'top' : '0', 'left' : '218px'});
                break;
            case 'bottom':
                $('#' + foodId).css({'top' : '75%', 'left' : '218px'});
                break;
            case 'left':
                $('#' + foodId).css({'top' : '32.5%', 'left' : '0'});
                break;
            default:
                $('#' + foodId).css({'top' : '32.5%', 'left' : '436px'});
        }

        console.log(positions[index]);
    };

    this.positionOnTheGrill = function () {
        var positions = ['top', 'bottom', 'middle-up', 'right'],
            index = Math.floor(Math.random() * 4),
            startPosition = positions[index];

        switch (startPosition){
            case 'top':
                $('#' + foodId).css({'top' : '210px', 'left' : '210px'});
                break;
            case 'bottom':
                $('#' + foodId).css({'top' : '600px', 'left' : '210px'});
                break;
            case 'middle-up':
                $('#' + foodId).css({'top' : '350px', 'left' : '210px'});
                break;
            default:
                $('#' + foodId).css({'top' : '450px', 'left' : '210px'});
        }
    };

    this.goToGrill = function () {
        $('#' + foodId).animate({'opacity' : '1'}, 500, this.positionOnTheGrill());
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
        $('div#' + foodId + ' .steak-images').css('transform', 'scaleX(-1)');
        $(steakImages[1]).css('opacity', '0');
        $(steakImages[2]).css('opacity', '1');
    };

    this.vibrate = function () {
        $('div#' + foodId + ' .steak-images').jrumble();
        $('div#' + foodId + ' .steak-images').trigger('startRumble');
        setTimeout(function() {$('div#' + foodId + ' .steak-images').trigger('stopRumble');}, 4000);
    };

    this.smoke = function () {

        var smokeAddId = 0,
            smokeRemoveId;

        smokeRemoveId = smokeAddId;

        $('div#' + foodId).append("<div class='smoke-wrapper' id='" + (smokeAddId++) + "'>"+
            "<img src='img/smoke.png' class='steak-img smoke'>" +
            "</div>");

        $('div#' + foodId + ' .smoke').animate({'opacity' : '1'}, 1000);

        $('div#' + foodId + ' .smoke').jrumble({
            x: 1,
            y: 1,
            rotation: 0
        });
        $('div#' + foodId + ' .smoke').trigger('startRumble');

        $('div#' + foodId + ' .smoke').css('filter', 'brightness(0)');
        $('div#' + foodId + ' .smoke-wrapper').css('top', '-200px');
        $('div#' + foodId + ' .smoke-wrapper').css('left', '150px');
        $('div#' + foodId + ' .smoke').animate({'opacity' : '0'}, 5000);
        setTimeout(function() {$('#' + smokeRemoveId).remove()}, 5000);
    };

    this.out = function () {
        $('#' + foodId).animate({'opacity' : '0'}, 500, this.randomPosition());
    };

    this.destroy = function () {
        return $('#' + foodId).remove();
    }
}