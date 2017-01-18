var steak = $('.steak');

function Steak() {
    this.create = function () {
        $('body').append("<div class='steak'><img src='img/steak.png' class='steak'>");
        steak = $('.steak');
    }
    this.go = function () {

        $(steak[0]).animate({top : '230px', left : '230px'}, 5000);
        steak = $('.steak');
    }
    this.fry = function () {
        $(steak[0]).attr('src', 'img/steak2.png');
        steak = $('.steak');
    }
}