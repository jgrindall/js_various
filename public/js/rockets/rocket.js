define(["base/rockets/engine", "base/events/eventdispatcher", "base/events/events"],

	function(Engine, EventDispatcher, Events){

	"use strict";

	// some private stuff
	// you could put helper functions here if they are only used by this class.
	// there's no 'protected' in JS so you can't have them accessible to superclasses

	var thisisPrivate, i = 0, sum = 0;
	for(i = 0; i < 100; i++){
		sum += i;
	}

	thisisPrivate = function(rocket){
		// stuff
		console.log(rocket);
	};

	var Rocket = function(){
		this.power = sum;
		EventDispatcher.mixin(this);
		this.onEngineStartHandler = this.onEngineStarted.bind(this);
		this.onGamePausedHandler = this.onGamePaused.bind(this);
		this.engine = new Engine();
		this.addListeners();
	};

	Rocket.prototype.start = function(){
		this.engine.start();
	};

	Rocket.prototype.addListeners = function(){
		this.engine.on(Events.ENGINE_STARTED, this.onEngineStartHandler);
		EventDispatcher.getInstance().on(Events.GAME_PAUSED, this.onGamePausedHandler);
	};

	Rocket.prototype.onGamePaused = function(){
		console.log("rocket paused");
	};

	Rocket.prototype.onEngineStarted = function(){
		console.log("an engine started!!", this);
	};

	Rocket.prototype.doSomethingElse = function(){
		//
	};

	Rocket.prototype.destroy = function(){
		this.engine.off(Events.ENGINE_STARTED, this.onEngineStartHandler);
		EventDispatcher.getInstance().off(Events.GAME_PAUSED, this.onGamePausedHandler);
		this.engine.destroy();
	};

	Rocket.prototype.zoom = function(){
		thisisPrivate(this);
		this.doSomethingElse();
	};

	return Rocket;

});
