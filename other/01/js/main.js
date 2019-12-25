(function() {

    let card = document.querySelectorAll('.card');
    // console.log(typeof card);
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function() {
            // console.log('點到了');
            this.classList.add('flipped')
        });
    }

    let food = ['燴飯', '炸雞', '水餃', '火鍋', '便當', '義大利麵', '披薩', '咖哩', '滷味', '小籠包', '串燒', '拉麵', '丼飯', '粥', '牛排', '海苔飯捲', '烤鴨', '關東煮'];
    let backtext = document.querySelectorAll('.back');
    for (let y = 0; y < backtext.length; y++) {
        backtext[y].textContent = food[y];
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