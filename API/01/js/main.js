let outputData;

function getData() {
    let xhrUrl = "https://cors-anywhere.herokuapp.com/http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=1000&$skip=0";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', xhrUrl);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            outputData = JSON.parse(this.responseText);
            // console.log(outputData);
            // 篩選台中市
            let DataArea = outputData.filter(function(item, index, array) {
                return item.animal_area_pkid === 10;
            });
            // console.log(DataArea);
            for (var i = 0; i < DataArea.length; i++) {
                document.querySelector('ul.list').innerHTML += '<li><img src=' + DataArea[i].album_file + '>' + '<div class="info"><div class="title">類別：' + DataArea[i].animal_kind + '</div>' + '<div class="title">性別：' + DataArea[i].animal_sex + '</div>' + '<div class="title">體型：' + DataArea[i].animal_bodytype + '</div>' + '<div class="title">年紀：' + DataArea[i].animal_age + '</div></div></li>';
            }
        }
    };
    xhr.send();

}

getData();