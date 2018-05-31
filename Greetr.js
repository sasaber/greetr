;(function x (global, $){

	// Returns a new object created by a function constructor
	var Greetr = function(firstName, lastName, language){
		return new Greetr.init(firstName, lastName, language);
	}

	// The following variables are hidden within the scope of 
	// the IIFE and are never directly accessible by developers
	var supportedLangs = ['en', 'es'];

	// Objects insted of arrays to reference them by language
	// informal greetings
	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	// formal greetings
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos' 
	};

	// logger messages
	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};	

	// the methods all Greetr objects have access to
	Greetr.prototype = {

		// returns full name 
		getFullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		// checks whether the given language is supported or not
		validateLanguage: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid Language!!";
			}
		},

		// returns an informal greeting
		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},

		// returns a formal greeting
		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.getFullName();
		},

		// first chainable method
		greet: function(formal){
			var msg;

			// if null or undefined, the condition will be 'false'
			if (formal){
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting();
			}

			// print greeting to console
			if (console){
				console.log(msg);
			}

			// makes the method chainable
			return this;
		},

		// another chainable method
		// logs who logged in to console
		log: function() {
			if (console){
				console.log(logMessages[this.language] + ": " + this.getFullName());
			}

			return this;
		},

		// changes language on the fly
		setLanguage: function(lang){
			this.language = lang;
			this.validateLanguage(); 

			return this;
		},

		// given a jQuery selector, it selects an element 
		// and updates its value with the greeting
		jQueryUpdate: function(selector, isFormal){
			// check if you have jQuery loaded
			if (!$){
				throw 'jQuery not found!';
			}

			if (!selector){
				throw 'Missing jQuery selector!';
			}

			var msg;
			if (isFormal){
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting();
			}

			$(selector).html(msg);

			return this;
		}
	};

	// Definition of the function constructor
	// the actual object is created here, allowing us to 'new'
	// an object without calling 'new'
	Greetr.init = function(firstName, lastName, language){

		var self = this;
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language =language || 'en';

		self.validateLanguage();

	}

	// Any object created with the function constructor should
	// point to Greetr.prototype for its prototype chain
	// trick borrowed from jQuery so we don't have to use the
	// 'new' keyword
	Greetr.init.prototype = Greetr.prototype;

	// Expose Greetr to the global object and provide a shorthand '$G'
	global.Greetr = global.G$ = Greetr;

})(window, jQuery);