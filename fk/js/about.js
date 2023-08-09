$('.intro-item').mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".introduce-item").eq(idx).addClass("active").siblings().removeClass("active");
});

$('.env-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let idx = $(this).index() + 1;
    $('#env-img').attr('src', 'img/env/' + idx + '.jpg');
});

$('#logo').click(function () {
   window.location = 'index.html'
});

$('#play').click(function () {
    $('#video-model').css('display', 'flex');
});

$('.model-v').click(function (e) {
    e.stopPropagation()
});

$('.close-video, #video-model').click(function () {
    $('#video-model').css('display', 'none');
    let v = document.getElementById('video');
    v.pause();
});

