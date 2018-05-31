// gets a new object (the architecture allows us to not have to
// use the 'new' keyword here, mimicing the structure of jQuery)
var g = G$('Sarah', 'Saber');

// event handler for login button
$("#login").click(function(){
	
	// hide login UI
	$('#logindiv').hide();

	// get selected language
	var language = $('#lang').val();

	// set language, update element using jQuery and passing the
	// '#greeting' as the selector, and log the welcome msg to console
	g.setLanguage(language).jQueryUpdate($('#greeting'), true).log();
});