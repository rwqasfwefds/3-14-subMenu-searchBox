$(function(){
    $('.outer-menu-item').hover(function () {
        $(this).find('.inner-menu').show();
    }, function () {
        $(this).find('.inner-menu').hide();
    });

    // 테이블 색상 변경
    $('.lightgreen').css('background-color', 'lightgreen')
    $('.lightgray').css('background-color', 'lightgray')
    $('.lightblue').css('background-color', 'lightblue')
});

// 현재 시간
window.onload = function() {
    setInterval(displayNow, 1000);

    function displayNow() {
        let now = new Date();
        let currentTime = now.toLocaleTimeString();
        document.querySelector('#current').innerHTML = currentTime;
    }

}