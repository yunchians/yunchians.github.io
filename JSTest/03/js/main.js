let $keys = $('.btn');
let $equationing = $('.text-block'); // 運算中結果
let $finallyResult = $('.total'); // 當前/最終運算結果
let arr = []; // 存放所有數字和運算符
let currentStr = ''; // 紀錄當前輸入的值

// 按下AC
function init() {
    currentStr = '';
    arr = [];
    $equationing.html('0');
    $finallyResult.html('0');
}

// 按下運算符號將數字送入arr的陣列
function sentStr() {
    if (currentStr != '') { // 避免把空值放到陣列
        arr.push(currentStr);
        currentStr = '';
    }
    updateShow(); // 更新當前輸入數字的div
    updateStorage(); // 更新運算式的div
}

// 更新運算符、避免重複加入
function updateOperator(keyVal) {
    let num = Number(arr[arr.length - 1]);
    if (isNaN(num)) { // 如果陣列最後一個值是運算符
        arr.pop(); // 該運算符刪掉
    }
    if (keyVal == 'x') { // 如果點選X，加入x
        arr.push('*');
    } else if (keyVal == '÷') {
        arr.push('/');
    } else {
        arr.push(keyVal); // 推入+和-
    }
    updateShow(); // 更新當前輸入數字的div
    updateStorage(); // 更新運算式的div
}

// 將arr陣列進行運算
function calSum() {
    let num = Number(arr[arr.length - 1]);
    if (isNaN(num) && currentStr == '') { // 如果陣列最後的值是運算式或是小數點且currentStr沒有值
        arr.pop();
    } else {
        sentStr(); // 將currentStr送入陣列
    }
    let arrAnswer = eval(arr.join(''));
    let strAnswer = parseFloat(arrAnswer).toPrecision(12); // 處理小數精度問題
    let answer = parseFloat(strAnswer);
    updateShow(answer); // 將答案傳入當前數字的div
    updateStorage(); // 更新運算式的div
}

// 點選按鈕0、00
function storeZero(keyVal) {
    if (currentStr == '0' && keyVal == '0') { // 點0時，避免非小數點數字前面出現多次零的狀況 ex:00012
        currentStr = '0';
    } else if ((currentStr == '' && keyVal == '00') || (currentStr == '0' && keyVal == '00')) { // 點00時，避免非小數點數字前面出現多次零的狀況 ex:00012
        currentStr = '0';
    } else { // 只要開頭不為零的正常情況下，0、00可以正常添加  ex:1200 or 100023
        currentStr += keyVal;
    }
    updateShow(); // 更新當前輸入數字的div
    updateStorage(); // 更新運算式的div
}

// 刪除字元
function delStr() {
    if (currentStr == '') {
        arr.pop();
    } else {
        currentStr = currentStr.substring(0, currentStr.length - 1); // 從最後一個字開始刪
    }
    updateShow();
    updateStorage();
}

// 檢查當前輸入數字是否有點點
function addPoint() {
    if (currentStr == '') {
        currentStr = '0.';
    } else if (!(currentStr.includes('.'))) {
        currentStr += '.';
    }
    updateShow();
    updateStorage();
}

// 紀錄當前輸入數字的function
function storeStr(keyVal) {
    if (currentStr == '0') { // 避免非小數點數字的第一個數字出現零 ex:012
        currentStr = '';
        currentStr += keyVal;
    } else {
        currentStr += keyVal;
    }
    updateShow(); // 更新當前輸入數字的div
    updateStorage(); // 更新運算式的div
}

function updateShow(answer) {
    let showText = '';
    if (typeof(answer) == 'undefined') { // 還沒按=時的情況，幫當前數字加入逗號
        showText = addComma(currentStr);
    } else {
        showText = addComma(answer.toString()); // 幫答案加入逗號
    }
    $finallyResult.html(showText);
}

function updateStorage() {
    let commaArr = arr.slice(); // 複製個需要加入逗號的新陣列，避免汙染到arr
    let storageText = '';
    for (let i = 0; i < commaArr.length; i++) {
        commaArr[i] = addComma(commaArr[i]);
    }
    if (typeof(arr[0]) == 'undefined') { // 如果還沒儲存值到陣列就先用當前數字來呈現
        storageText = addComma(currentStr);
    } else {
        storageText = commaArr.join('');
    }
    $equationing.html(storageText);
}

// 加入逗號，用來呈現在網頁上的
function addComma(data) {
    if (data.includes(".")) { // 如果數字有小數點，那小數點前才要加逗號
        return data.replace(/\d(?=(?:\d{3})+\b\.)/g, '$&,');
    } else {
        return data.replace(/\d(?=(?:\d{3})+\b)/g, '$&,');
    }
}

init();

$keys.click(function() {
    console.log('click');
    let keyVal = $(this).data('val');
    console.log(keyVal);
    switch (keyVal) {
        case '+':
        case '-':
        case 'x':
        case '÷':
            sentStr();
            updateOperator(keyVal);
            break;
        case '=':
            calSum();
            break;
        case '0':
        case '00':
            storeZero(keyVal);
            break;
        case 'Clear':
            init();
            break;
        case 'BACK':
            delStr();
            break;
        case '.':
            addPoint();
            break;
        default:
            storeStr(keyVal);
            break;
    }
});