// QRCODE網址連結
function openQRcodeURL() {
    const qrcodeURL = 'https://lin.ee/jlSFMN9'; // QRCODE的網址設定
    // 沒有要跳轉的話改這樣 const qrcodeURL = '';
    // 要跳轉就改成 const qrcodeURL = '你的網誌';
    // 範例 const qrcodeURL = 'https://lin.ee/jlSFMN9';
    if (qrcodeURL == '') {
        return;
    } else {
        window.open(qrcodeURL);
    }
}

// 官網網址連結
function openOfficialURL() {
    const officialURL = ''; // 官網的網址設定
    // 沒有要跳轉的話改這樣 const officialURL = '';
    // 要跳轉就改成 const officialURL = '你的網誌';
    // 範例 const officialURL = 'http://bb528.tx5588.net/';
    if (officialURL == '') {
        return;
    } else {
        window.open(officialURL);
    }
}