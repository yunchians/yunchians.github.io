 // 取得時分秒針
 let gethour = document.querySelector('.hour-hand');
 let getmin = document.querySelector('.minute-hand');
 let getsecond = document.querySelector('.second-hand');

 function clockAnimate() {

     // 取得用戶端現在時間
     let NowTime = new Date();
     // console.log(NowTime);
     // 取得時分秒
     let hours = NowTime.getHours();
     let mins = NowTime.getMinutes();
     let seconds = NowTime.getSeconds();
     // console.log(hours, mins, seconds);

     // 一圈360度/12小時 + 每60分，時針加30度；每1分，時針加30/60(1/2)度
     // 扣掉90度 註:原本的時針初始位置多旋轉的90度
     let deg_hours = hours * (360 / 12) + mins * (30 / 60) - 90;
     // 一圈360度/60分 + 每60秒，分針加6度；每1秒，分針加6/60度
     let deg_mins = mins * (360 / 60) + seconds * (6 / 60);
     // 一圈360度/60秒
     let deg_seconds = seconds * (360 / 60);

     // console.log(deg_hours, deg_mins, deg_seconds);
     deg_hours += 360 / (60 * 60 * 12);
     deg_mins += 360 / (60 * 60); // 每秒6/60 每60秒6度
     deg_seconds += 360 / 60; // 每秒6度

     gethour.style.transform = `rotate(${deg_hours}deg)`
     getmin.style.transform = `rotate(${deg_mins}deg)`
     getsecond.style.transform = `rotate(${deg_seconds}deg)`
 };
 clockAnimate();
 setInterval(clockAnimate, 1000);