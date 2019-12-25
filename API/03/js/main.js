function getData() {
    let xhrUrl = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-DC7E84B6-B09D-4503-897C-2E3437A06444&locationName=%E8%87%BA%E4%B8%AD%E5%B8%82";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', xhrUrl);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let outputData = JSON.parse(this.responseText);
            console.log(outputData);
            let time = outputData.records.locations["0"].location["0"].weatherElement["0"];
            console.log(time);
            for (let i = 0; i < time.length; i++) {
                // console.log(i);
                // Wx 天氣現象
                // MaxT 最高溫度
                // MinT 最低溫度
                // CI 舒適度
                // PoP 降雨機率
                let a = time[i].elementValue["0"];
                console.log(a);

            }
        } else if (this.status === 404) {
            console.log("404")

        }
    };
    xhr.send();

}

getData();

// CWB-DC7E84B6-B09D-4503-897C-2E3437A06444