(function x (global, $){

// returns a new object created by a function constructor
	var Greetr = function(firstName, lastName, language){
		return new Greetr.init(firstName, lastName, language);
	}

	Greetr.prototype = {};

// Definiftion of the function constructor
	Greetr.init = function(firstName, lastName, language){

		var self = this;
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language =language || 'en';

	}

// Any object created with the function constructor should
// point to Greetr.prototype for its prototype chain
	Greetr.init.prototype = Greetr.prototype;

// Expose Greetr to the global object
	global.Greetr = global.G$ = Greetr;

})(window, jQuery);