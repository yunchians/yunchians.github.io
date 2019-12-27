function getData() {
    let xhrUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DC7E84B6-B09D-4503-897C-2E3437A06444&locationName=%E8%87%BA%E4%B8%AD%E5%B8%82';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', xhrUrl);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let outputData = JSON.parse(this.responseText);
            // console.log(outputData);
            showData(outputData);
        } else if (this.status === 404) {
            console.log('404')
        }
    };
    xhr.send();

}

function showData(objJson) {
    let weather = objJson.records.location['0'].weatherElement;
    // console.log(weather);
    // Wx 天氣現象
    // MaxT 最高溫度
    // MinT 最低溫度
    // CI 舒適度
    // PoP 降雨機率
    let dateblock = document.querySelectorAll('tr.date td:not(.titletext)');
    let Wxblock = document.querySelectorAll('tr.Wx td:not(.label)');
    let Tblock = document.querySelectorAll('tr.Tdeg td:not(.label)');
    let CIblock = document.querySelectorAll('tr.CI td:not(.label)');
    let PoPblock = document.querySelectorAll('tr.PoP td:not(.label)');
    // console.log(dateblock, Wxblock, Tblock, CIblock, PoPblock);

    // 日期時間及氣象
    let WxVal = weather['0'].time;
    for (let i = 0; i < WxVal.length; i++) {
        dateblock[i].innerHTML = WxVal[i].startTime + ' ~ ' + '<br>' + WxVal[i].endTime;
        Wxblock[i].textContent = WxVal[i].parameter.parameterName;
    }

    // 舒適度
    let CIVal = weather[3].time;
    for (let x = 0; x < CIVal.length; x++) {
        CIblock[x].textContent = CIVal[x].parameter.parameterName;
    }

    // 降雨
    let PoPVal = weather[1].time;
    for (let k = 0; k < PoPVal.length; k++) {
        PoPblock[k].textContent = `${PoPVal[k].parameter.parameterName} %`;
    }

    // 溫度
    for (let j = 0; j < Tblock.length; j++) {
        let MinT = weather['2'].time;
        let MaxT = weather['4'].time;
        // console.log(MinT, MaxT);
        Tblock[j].innerHTML = `最低溫度: ${MinT[j].parameter.parameterName} °C <br> 最高溫度: ${MaxT[j].parameter.parameterName} °C`;
    }
}

getData();

// CWB-DC7E84B6-B09D-4503-897C-2E3437A06444