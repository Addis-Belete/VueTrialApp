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
app.message = 'Hello Again'
