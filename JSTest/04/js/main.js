let city = [{
        cityName: 'NEW YORK',
        timeZone: 'America/New_York',
    },
    {
        cityName: 'LONDON',
        timeZone: 'Europe/London',
    },
    {
        cityName: 'BANGKOK',
        timeZone: 'Asia/Bangkok',
    },
    {
        cityName: 'TAIWAN',
        timeZone: 'Asia/Taipei',
    },
    {
        cityName: 'SYDNEY',
        timeZone: 'Australia/Sydney',
    }
];

const showDate = document.querySelector('ul.clock-list');

function getNowTime() {
    // console.log('執行');

    for (let i = 0; i < city.length; i++) {
        let getTime = new Date();
        let item = city[i];
        // console.log(getTime);
        // console.log(item);
        let option = {
            timeZone: item.timeZone,
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        }
        timeString = getTime.toLocaleString('en', option);
        timeString = timeString.replace(/[\,]/g, '');
        timeString = timeString.replace(':', ' ');
        timeString = timeString.split(' ');
        let [month, date, year, hour, min] = timeString;
        let timeZone = document.createElement('li');
        let template = `<div class="left">${item.cityName}<span>${date} ${month}. ${year}</span>
        </div><div class="right">${hour}:${min}</div>`;

        timeZone.innerHTML = template;
        showDate.append(timeZone);
    }
}
getNowTime();
setInterval(function() {
    showDate.innerHTML = '';
    getNowTime();
}, 1000);