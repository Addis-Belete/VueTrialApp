
var vm = new Vue({
	el: "#app",
	data: {
		counter: 0,

	},




})

vm.items.push({ message: "Hello" })
vm.items = vm.items.filter(function (item) {
	return item.message.match(/Foo/)

})