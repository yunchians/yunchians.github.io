(function() {
    let card = document.querySelectorAll('.card');
    // console.log(typeof card);
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function() {
            // console.log('點到了');
            this.classList.add('flipped');
            let food = ['燴飯', '炸雞', '水餃', '火鍋', '便當', '義大利麵', '披薩', '咖哩', '滷味', '小籠包', '串燒', '拉麵', '丼飯', '粥', '牛排', '海苔飯捲', '烤鴨', '關東煮'];
            let backtext = document.querySelectorAll('.back');
            // 每次點擊就打亂陣列重新排序
            // 參考資料:https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/268901/
            // sort()陣列排列方法
            // Math.random 0~1之間小數
            // 三元判斷式 條件判斷式 ? 為真true : 為假false
            // 參考資料:https://pclevinblog.pixnet.net/blog/post/314562376-javascript%E4%B8%89%E5%85%83%E9%81%8B%E7%AE%97%E5%BC%8F
            food.sort(function(x, y) {
                return Math.random() > 0.5 ? -1 : 1;
            });
            for (let y = 0; y < backtext.length; y++) {
                backtext[y].textContent = food[y];
            }
        });
    }

    card.forEach(function(result) {
        result.addEventListener('transitionend', translationhandler)
            // console.log(result);
    });

    function translationhandler(e) {
        e.currentTarget.classList.remove('flipped');
        // console.log(e);
    }

})();