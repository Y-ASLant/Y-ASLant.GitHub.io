let page = 1;

function getArticleList() {
    $.ajax({
        type : "GET",
        contentType: "application/json",
        url : baseUrl + "/news.html?p=" + page,
        success : function(result) {
            let article = $(result).find('#article').children('a');
            console.log(article.length);
            if (article.length) {
                $('.load-more').before(article);
            } else {
                $('.load-more').html('已全部加载');
            }
        },
        error : function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}

function loadMore() {
    let loadText = $('.load-more').text();
    if (loadText === '加载更多') {
        page++;
        getArticleList();
    }
}