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
    // 開獎數字 1-45 用for迴圈裝到一個空陣列內
    let arr = [];
    for (let i = 1; i < 46; i++) {
        arr.push(i);
    };


    let newArr = [];
    const ranNum = 7;
    for (let y = 1; y < ranNum; y++) {
        let ran = Math.floor(Math.random() * arr.length);
        // Math.floor 回傳無條件捨去後最大整數
        // ex.Math.floor(5.45) 結果會是5
        // Math.random 0~1之間小數
        // ex.0.15*45 = 6.75 無條件捨去得到6
        newArr.push(arr.splice(ran, 1)); //舊陣列去除數字轉移到新陣列
        // arr.splice(ran, 1)
        // arr陣列在索引第幾個位子 刪除一個元素
        // 將這個被刪去的元素放到新陣列
        // 陣列.splice(第幾個位子,刪去幾個數字,增加內容)
    };

    setTimeout(() => {
        lotteryBall.classList.remove('animateball');
        popMessage.setAttribute('style', 'display:block');
        document.querySelector('.numlist').textContent = newArr;
        document.querySelector('.content p').textContent = '中獎號碼: ' + newArr;
        openAward.removeAttribute('disabled');

    }, 5000);

    if (newArr !== []) {
        document.querySelector('.numlist').textContent = '';
    }
}

closeMessageBox.addEventListener('click', closeMessage);
confirmMessage.addEventListener('click', closeMessage);

// 關閉提示光箱
function closeMessage() {
    popMessage.removeAttribute('style');
}