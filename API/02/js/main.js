// 邏輯作法:
// ajax讀取json檔 確認取得後執行
// 當select選單改變值 change
// 先找到option的值
// 判斷值跟data相等就show資料
// 沒有資料就顯示#noresult 有資料顯示#searchpage hide() show()
// 每觸發change一次就先remove()掉前次查詢的結果

$(document).ready(function() {

    let showSearch = $('#searchpage');
    let showNoResult = $('#noresult');

    $('select#city').change(function() {
        $('.item').remove();
        let cityVal = $('select#city').val();
        $.ajax({
            type: 'GET',
            url: './js/data.json',
            dataType: 'json',
            success: function(data) {
                // console.log('成功');
                for (i = 0; i < data.length; i++) {
                    if (cityVal == data[i].鄉鎮市區) {
                        showNoResult.hide();
                        showSearch.show();
                        // console.log(data[i].鄉鎮市區);
                        let resultContent = `<div class="col-lg-12 item">
                                <img src="./images/noimg.jpg">
                                <div class="info">
                                    <div class="name"><span class="title">景點名稱：</span>${data[i].名稱}</div>
                                    <div class="address"><span class="title">地址：</span>${data[i].地址}</div>
                                    <div class="description"><span class="title">簡述：</span>${data[i].簡述}</div>
                                </div>
                            </div>`
                        $('#searchpage > .row').append(resultContent);

                    } else if (cityVal == '請選擇') {
                        showSearch.hide();
                        showNoResult.show();
                        showNoResult.text('查無資料');
                        $('.item').remove();
                    }
                }
                // console.log(data);

            },

            error: function() {
                // console.log('失敗');
            }
        })
    });
});