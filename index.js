var app = new Vue({
	el: "#app",
	data: {
		message: "Hello WOrld!"

	}

})

var app2 = new Vue({
	el: "#app-2",
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()

	}

})

var app3 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: "Learn JavaScript" },
			{ text: "Learn Vue" },
			{ text: "Build something awesome" }

		],

	}

})
var app5 = new Vue({
	el: "#app-5",
	data: {
		message: "Hello Vue.js"
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')

		}
	}

})
var app6 = new Vue({
	el: "#app-6",
	data: {
		message: 'Hello Vue!'
	}

})
Vue.component('todo-item', {
	tempelate: '<li>This is a todo</li>'

})
var app7 = new Vue({
	el: "#app-7"
})

app.message = 'Hello Again'
