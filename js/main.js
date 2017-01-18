var grillImg = $('.grill-img');

function grillFireAnimate() {
    for (var i = 0; i < grillImg.length; i++){
        if((i === grillImg.length - 1) && ($(grillImg[i]).hasClass('show'))){
            return false;
        } else {
            if ($(grillImg[i]).hasClass('show')) {
                $(grillImg[i]).removeClass('show');
                $(grillImg[i + 1]).addClass('show');
                return true;
            }
        }
    }
}

function autoGrillFire() {
    if(!(grillFireAnimate())){
        $(grillImg[grillImg.length - 1]).removeClass('show');
        $(grillImg[0]).addClass('show');
    }
}

function slider() {
    $(grillImg[0]).addClass('show');

    setInterval('autoGrillFire()', 200);
}

$(document).ready(function () {
    slider();
});