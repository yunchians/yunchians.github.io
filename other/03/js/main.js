const openAward = document.querySelector('#openaward'); //開獎按鈕
const lotteryBall = document.querySelector('.ball'); //彩球背景區塊
const showNum = document.querySelector('.numblock'); //上方顯示中獎號碼區
const popMessage = document.querySelector('.message'); // 訊息光箱
const closeMessageBox = document.querySelector('.close'); // 光箱關閉按鈕
const confirmMessage = document.querySelector('.confirm'); // 光箱確認按鈕

openAward.addEventListener('click', award); // 按鈕綁定監聽事件 click觸發

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
            return Math.random() - 1;
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

closeMessageBox.addEventListener('click', closeMessage);
confirmMessage.addEventListener('click', closeMessage);

// 關閉提示光箱
function closeMessage() {
    popMessage.removeAttribute('style');
}