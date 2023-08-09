let baseUrl = '/';
return_top();

$(window).on("scroll", function () {
    return_top();
});

$(".return-top").on("click", function () {
    $("html,body").animate({scrollTop: 0},500);
});

function return_top(){
    if ($(window).scrollTop() > $(window).height()) {
        $(".return-top").fadeIn(500);
    } else {
        $(".return-top").fadeOut(500);
    }
}

$('#goLogin,#goLogin2,.free-use-btn').click(function () {
    window.location.href = "member/login.php"
});

$('.logo2').click(function () {
    window.location.href = "./"
});

$('.ljzx').click(function () {
    $('#model1').css('display', 'flex')
});

$('.model, .model2').click(function (e) {
   e.stopPropagation()
});

$('.close, #model1').click(function () {
    $('#model1, #model2').css('display', 'none');
});

$('#model1').click(function () {
    $('#model1').css('display', 'none')
});
$('#model2').click(function () {
    $('#model2').css('display', 'none');
});