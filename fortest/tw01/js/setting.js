// QRCODE網址連結
function openQRcodeURL() {
    const qrcodeURL = 'https://lin.ee/D6Iuj0R'; // QRCODE的網址設定
    // 沒有要跳轉的話改這樣 const qrcodeURL = '';
    // 要跳轉就改成 const qrcodeURL = '網址';
    // 範例 const qrcodeURL = 'https://lin.ee/D6Iuj0R';
    if (qrcodeURL == '') {
        return;
    } else {
        window.open(qrcodeURL);
    }
}

// 官網網址連結
function openOfficialURL() {
    const officialURL = 'http://bb528.tx5588.net/'; // 官網的網址設定
    // 沒有要跳轉的話改這樣 const officialURL = '';
    // 要跳轉就改成 const officialURL = '網址';
    // 範例 const officialURL = 'http://bb528.tx5588.net/';
    if (officialURL == '') {
        return;
    } else {
        window.open(officialURL);
    }
}