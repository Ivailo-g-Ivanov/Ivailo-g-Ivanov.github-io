	$(document).ready(function () {
    resetForms();
});

function resetForms() {
    document.getElementById('gform').reset();
}
	var mysubmit = $('#submit');
	mysubmit.on("click", function (e) { 
    setTimeout(function()
	{
	window.location.href="index.html"
	},6000)

});
