let currentItem = [];

// 取得輸入欄位input
let getNum = document.querySelectorAll('input.num');
// 取得顯示文字區塊
let showResult = document.querySelector('.text');

let getParentNode;
let inputVal;
let itemname;


// 監聽事件
getNum.forEach(function(inputblock) {
    inputblock.addEventListener('change', outputOrder)
});

function outputOrder(e) {
    getParentNode = this.parentNode;
    itemname = getParentNode.children[0].textContent;
    const currentIdx = currentItem.findIndex(v => v.id === itemname);

    if (this.value <= 0 || this.value.includes('.') || this.value == '') {
        this.value = "";
        console.log(currentItem.splice(currentItem.indexOf(currentItem[currentIdx], 1)));


    } else if (this.value >= 1) {

        // 如果 === -1 表示找不到項目，Create
        // 如果 !== -1 表示已經有這個項目，Update
        if (currentIdx === -1) {
            inputVal = this.value;
            countNum();
        } else {
            currentItem[currentIdx].text = `${itemname} ${this.value} 杯`;
            showResult.textContent = currentItem.map(
                (v, i) => v.text
            );
        }
    }
}

function countNum() {

    currentItem.push({
        id: itemname,
        text: `${itemname} ${inputVal} 杯`
    });
    showResult.textContent = currentItem.map(
        (v, i) => v.text
    );
}