var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        bmi: 20
    },
    methods: {
        changeA: function(num) {
            return 'a' + num;
        }
    },
    computed: {
        WhoHeavy: function() {
            if (this.a > this.b) {
                return 'a比較重'
            } else if (this.a < this.b) {
                return 'b比較重'
            } else {
                return 'a比b一樣重'
            }
        },
        BMI: function() {
            return this.a - this.bmi
        }
    }

    // computed data內需有對應的值才能運作
    // 值改變會立即運算
    // 且無法帶參數 通用在運算 不確定每次更新用computed
    // method 可以帶參數
    // method若值一樣還是會重算 確定每次更新用method
})

// computed 具有資料緩存 資料一樣不會重新渲染 效能較佳
// 兩個人要比較BMI
// 畫面即時顯示誰比較重
// 全國平均體脂去比較
// 21-20 = +1

// 即時動態更新 DOM

// 屬性綁定v-bind
// :src :value
// :href
// data: {
//     imgsrc: 'xxxxxxx'

// }

// <img :src="imgsrc">

// @ v-on縮寫