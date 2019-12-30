const showDate = document.querySelector('ul.clock-list');

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

function getNowTime() {
    // console.log('執行');
    const showDatea = document.querySelectorAll('li');
    for (let i = 0; i < city.length; i++) {
        let item = city[i];
        let getTime = new Date();
        // console.log(getTime);
        // console.log(item);
        showDatea += 1;
    }
}
// getNowTime();
// setInterval(getNowTime, 1000);