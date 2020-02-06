var apiUrl = 'https://api.github.com/repos/yunchians/yunchians.github.io/commits?sha=';
var app = new Vue({
    el: '#app',
    data: {
        // 分支
        branches: ['master', 'otherDev', 'API_Exercise'],
        // 當前的分支
        currentBranch: 'master',
        // commit紀錄預設一個空值
        commit: null
    },
    // 頁面創建執行function
    created: function() {
        this.getData();
    },

    // watch 監視某個值，當這個值變動的時候，就去做某些事情。
    // 當前分支的值改變就去執行getData fn
    watch: {
        currentBranch: function() {
            this.getData();
        },
    },

    methods: {
        getData: function() {
            var xhr = new XMLHttpRequest();
            // 組字串 https://api.github.com/repos/yunchians/yunchians.github.io/commits?sha=分支名稱
            var self = this;
            xhr.open('GET', apiUrl + self.currentBranch)
            xhr.onload = function() {
                // 解析data
                self.commit = JSON.parse(xhr.responseText)
                console.log(self.commit);
                console.log(self.commit[0].html_url);
            }
            xhr.send();
        }
    },
})