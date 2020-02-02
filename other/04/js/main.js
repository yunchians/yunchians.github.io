var app = new Vue({
    el: '#app',
    data: {
        usd: 0,
    },
    computed: {
        twd: {
            get() {
                return this.usd
            },
            set(val) {
                this.usd = val / 30.1600
            }
        },
        hk: {
            get() {
                return this.usd
            },
            set(val) {
                this.usd = val / 7.7642
            }
        }
    }
});