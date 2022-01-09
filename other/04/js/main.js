var app = new Vue({
    el: '#app',
    data: {
        usd: 0,
    },
    computed: {
        twd: {
            get() {
                return this.usd * 30.1600
            },
            set(val) {
                this.usd = val / 30.1600
            }
        },
        hk: {
            get() {
                return this.usd * 7.7642
            },
            set(val) {
                this.usd = val / 7.7642
            }
        }
    }
});