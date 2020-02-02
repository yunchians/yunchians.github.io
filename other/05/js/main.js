var app = new Vue({
    el: '#app',
    data: {
        todos: [],
        // 放資料的空陣列
        newTodo: '',
        // 新增的內容
    },
    methods: {
        addTodo: function(todo) {
            this.todos.push({ content: todo, completed: false })
        },
        removeTodo: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
})