(function x (global, $){

	// Returns a new object created by a function constructor
	var Greetr = function(firstName, lastName, language){
		return new Greetr.init(firstName, lastName, language);
	}

	var supportedLangs = ['en', 'es'];

	// Objects insted of arrays to reference them by language
	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos' 
	};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};	

	Greetr.prototype = {

		getFullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		validateLanguage: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid Language!!";
			}
		},

		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},

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
		}
	};

	// Definition of the function constructor
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