define(['base/events/events', 'base/events/eventdispatcher'],

	function(Events, EventDispatcher){

	"use strict";

	var Engine = function(){
		EventDispatcher.mixin(this);
	};

	Engine.prototype.start = function(){
		this.trigger(Events.ENGINE_STARTED);
	};

	Engine.prototype.destroy = function(){

	};

	return Engine;

});

