var app = new Vue({
	el: "#app",
	data: {
		message: "Hello WOrld!"

	}

})

var app2 = new Vue({
	el: "#app-2",
	data: {
		seen: true
	}

})
app.message = 'Hello Again'
app2.seen = false