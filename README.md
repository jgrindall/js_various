# README #


JS-various

* A variety of bits and bobs for JS development

* The first thing to do is to make sure you have node installed, and run "npm install"

* That should install all the dependencies you need

* Then run "node web" to start the server

* The files contain a basic example of inheritance (how I do it), with a Super keyword like Actionscript

* Also:

	* A global EventDispatcher for dispatching events globally
	
	* Event Dispatcher mixins to make other classes into event dispatchers without using full inheritance
	
	* A grunt file (run "grunt") which does 3 things:
	
		* amdcheck - checks the status of your imports and tells you if any are unused or not present
		
		* jshint - checks code quality, stops you writing bad code
		
		* requirejs - uses the power of require to concatenate and uglify ALL your js into one file for deployment
		
* Missing:

	* require js shims

	* Command map and Command pattern

	* Other design patterns
	
	* less, css compilation
	
	
