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
                this.usd = val / 31.05
            }
        },
        hk: {
            get() {
                return this.usd * 7.83
            },
            set(val) {
                this.usd = val / 7.83
            }
        }
    }
});