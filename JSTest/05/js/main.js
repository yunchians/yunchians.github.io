let city = [];
let outputResult;
let dataResult = [];
const selectCity = document.querySelector('select#city');
const cityName = document.querySelector('p.cityname');
const publishTime = document.querySelector('span.updatetime');
const showResultBlock = document.querySelector('.bottom');

// 串接資料
function GetData() {
    let url = 'https://cors-anywhere.herokuapp.com/http://opendata2.epa.gov.tw/AQI.json';
    fetch(url)
        .then(function(response) {
            // console.log(response);
            return response.json();
        })

    .then(function(data) {
        // console.log(data);
        dataResult = data;
        removeLoad();
        setOptionVal();
    })

    .catch(function(err) {
        console.log(err);
    })


}
loading();
GetData();

// 顯示查詢結果
selectCity.addEventListener('change', showResult);

function showResult() {
    // console.log('change!');
    document.querySelector('.other-tab').innerHTML = '';
    let getOptionVal = selectCity.value;
    let displayArray = [];
    outputResult = displayArray;
    for (i = 0; i < dataResult.length; i++) {
        let currentCounty = dataResult[i].County;
        if (getOptionVal == currentCounty) {
            // console.log(currentCounty);
            displayArray.push(dataResult[i]);
            // console.log(displayArray);
        } else if (getOptionVal !== currentCounty) {
            showResultBlock.style.display = 'none';
            document.querySelector('.other-tab').innerHTML = '';
        }
    }
    outputData();
    setAQIcolor();
    clicktab();
    // console.log(getOptionVal);
}

// 顯示結果
function outputData() {
    for (y = 0; y < outputResult.length; y++) {
        showResultBlock.style.display = 'block';
        publishTime.textContent = `${outputResult[0].PublishTime} 更新`;
        cityName.textContent = outputResult[0].County;

        let Tab = `
            <div class="tab-block">
            <div class="other stationname">${outputResult[y].SiteName}</div>
            <div class="other AQInum">${outputResult[y].AQI}</div>
            </div>`
            // console.log(Tab);
        document.querySelector('.other-tab').innerHTML += Tab;

        let currentTab = `
                <div class="current stationname">${outputResult[0].SiteName}</div>
                <div class="current AQInum">${outputResult[0].AQI}</div>
                <ul class="info-list">
                    <li>
                        <div class="item">
                            臭氧
                            <span>O3 (ppb)</span>
                        </div>
                        <span class="num">${outputResult[0].O3}</span>
                    </li>
                    <li>
                        <div class="item">
                            懸浮微粒
                            <span>(μg/m³)</span>
                        </div>
                        <span class="num">${outputResult[0].PM10}</span>
                    </li>
                    <li>
                        <div class="item">
                            細懸浮微粒
                            <span>(μg/m³)</span>
                        </div>
                        <span class="num">${outputResult[0]['PM2.5']}</span>
                    </li>
                    <li>
                        <div class="item">
                            一氧化碳
                            <span>CO (ppm)</span>
                        </div>
                        <span class="num">${outputResult[0].CO}</span>
                    </li>
                    <li>
                        <div class="item">
                            二氧化硫
                            <span>SO2 (ppb)</span>
                        </div>
                        <span class="num">${outputResult[0].SO2}</span>
                    </li>
                    <li>
                        <div class="item">
                            二氧化氮
                            <span>NO2 (ppb)</span>
                        </div>
                        <span class="num">${outputResult[0].NO2}</span>
                    </li>
                </ul>
            `
            // console.log(currentTab);
        document.querySelector('.main-tab').innerHTML = currentTab;
    }
}

// 點擊切換tab
function clicktab() {
    let mainStation = document.querySelector('.current.stationname');
    let mainNum = document.querySelector('.current.AQInum');
    let ul = document.querySelector('ul.info-list');
    let getCurrentstation = document.querySelectorAll('.tab-block');
    getCurrentstation.forEach(function(item) {
        item.onclick = function() {
            // console.log('click!', this.childNodes[1], this.childNodes[3]);
            mainStation.innerText = this.childNodes[1].innerText;
            mainNum.innerText = this.childNodes[3].innerText;
            setAQIcolor();
            for (z = 0; z < outputResult.length; z++) {
                if (mainStation.innerText == outputResult[z].SiteName) {
                    let changeTab = `
                    <li>
                        <div class="item">
                            臭氧
                            <span>O3 (ppb)</span>
                        </div>
                        <span class="num">${outputResult[z].O3}</span>
                    </li>
                    <li>
                        <div class="item">
                            懸浮微粒
                            <span>(μg/m³)</span>
                        </div>
                        <span class="num">${outputResult[z].PM10}</span>
                    </li>
                    <li>
                        <div class="item">
                            細懸浮微粒
                            <span>(μg/m³)</span>
                        </div>
                        <span class="num">${outputResult[z]['PM2.5']}</span>
                    </li>
                    <li>
                        <div class="item">
                            一氧化碳
                            <span>CO (ppm)</span>
                        </div>
                        <span class="num">${outputResult[z].CO}</span>
                    </li>
                    <li>
                        <div class="item">
                            二氧化硫
                            <span>SO2 (ppb)</span>
                        </div>
                        <span class="num">${outputResult[z].SO2}</span>
                    </li>
                    <li>
                        <div class="item">
                            二氧化氮
                            <span>NO2 (ppb)</span>
                        </div>
                        <span class="num">${outputResult[z].NO2}</span>
                    </li>`
                        // console.log(changeTab);
                    ul.innerHTML = changeTab;
                }
            }
        }
    });
}

// 設定顏色
function setAQIcolor() {
    let AQIcolor = document.querySelectorAll('.AQInum');
    for (let j = 0; j < AQIcolor.length; j++) {
        let AQIText = AQIcolor[j].innerText;
        if (AQIText <= 50) {
            AQIcolor[j].setAttribute('style', 'background: #95F084;');
        } else if (AQIText >= 51 && AQIText <= 100) {
            AQIcolor[j].setAttribute('style', 'background: #FFE695;');
        } else if (AQIText >= 101 && AQIText <= 150) {
            AQIcolor[j].setAttribute('style', 'background: #FFAF6A;');
        } else if (AQIText >= 151 && AQIText <= 200) {
            AQIcolor[j].setAttribute('style', 'background: #FF5757;');
        } else if (AQIText >= 201 && AQIText <= 300) {
            AQIcolor[j].setAttribute('style', 'background: #9777FF;');
        } else if (AQIText >= 301 && AQIText <= 400) {
            AQIcolor[j].setAttribute('style', 'background: #AD1774;');
        }
    }
}

// 設定option
function setOptionVal() {
    for (let i = 0; i < dataResult.length; i++) {
        if (city.indexOf(dataResult[i].County) == -1) {
            city.push(dataResult[i].County);
            // console.log(city);
        }
    }
    for (let i = 0; i < city.length; i++) {
        let option = document.createElement('option');
        option.textContent = city[i];
        option.setAttribute('value', city[i]);
        // console.log(option);
        selectCity.appendChild(option);
    }
}

// loading
function loading() {
    let load = document.querySelector('.loader');
    load.classList.add('show');
}

function removeLoad() {
    let load = document.querySelector('.loader');
    load.classList.remove('show');
    load.classList.add('remove');
}