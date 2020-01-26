const openAward = document.querySelector('#openaward');
const lotteryBall = document.querySelector('.ball');
const showNum = document.querySelector('.numblock');
const popMessage = document.querySelector('.message');
const closeMessageBox = document.querySelector('.close');
const confirmMessage = document.querySelector('.confirm');

openAward.addEventListener('click', award);
closeMessageBox.addEventListener('click', closeMessage);
confirmMessage.addEventListener('click', closeMessage);


function award() {
    // console.log('開獎');

    // disable按鈕避免重複點擊
    openAward.setAttribute('disabled', '');
    // 更換圖片
    lotteryBall.classList.add('animateball');
    // 開獎數字
    let arr = [];
    for (i = 1; i < 46; i++) {
        arr.push(i);
        arr.sort(function() {
            return Math.random() - 0.1;
        })
        arr.length = 6;
    };
    setTimeout(() => {
        lotteryBall.classList.remove('animateball');
        popMessage.setAttribute('style', 'display:block');
        document.querySelector('.numlist').textContent = arr;
        document.querySelector('.content p').textContent = '中獎號碼: ' + arr;
        openAward.removeAttribute('disabled');

    }, 5000);

    if (arr !== []) {
        document.querySelector('.numlist').textContent = '';
    }
}

// 關閉提示光箱
function closeMessage() {
    popMessage.removeAttribute('style');
}