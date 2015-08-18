define([], function(){

	"use strict";

	var EventDispatcher = function(){
		// just use jQuery because it's always loaded in PurpleMash anyway.
		// you could use Backbone.Events too. Or Signals, or anything.
		this._dom = $("<div></div>");
	};

	EventDispatcher.getInstance = function(){
		// get a reference to a global event bus
	    if(!EventDispatcher.instance){
	        EventDispatcher.instance = new EventDispatcher();
	    }
	    return EventDispatcher.instance;
	};

	EventDispatcher.prototype.addListener = function(type, listenerFn){
		if(!type){
			throw new Error("type " + type + " undefined");
		}
		if(!listenerFn){
			throw new Error("listenerFn " + listenerFn + " undefined");
		}
	    this._dom.on(type, listenerFn);
	};

	EventDispatcher.prototype.removeListener = function(type, listenerFn){
		if(!type){
			throw new Error("type " + type + " undefined");
		}
		if(!listenerFn){
			throw new Error("listenerFn " + listenerFn + " undefined");
		}
		this._dom.off(type, listenerFn);
	};

	EventDispatcher.prototype.trigger = function(type, payload){
		if(!type){
			throw new Error("type " + type + " undefined");
		}
	    this._dom.trigger(type, payload);
	};

	EventDispatcher.mixin = function(obj){
		// _.extend is a simple method to get mixins working,
		// it just copies stuff without having to use full inheritance
		EventDispatcher.prototype.constructor.call(obj);
		_.extend(obj, EventDispatcher.prototype);
	};

	EventDispatcher.prototype.dispatch = EventDispatcher.prototype.trigger;

	EventDispatcher.prototype.dispatchEvent = EventDispatcher.prototype.trigger;

	EventDispatcher.prototype.addEventListener = EventDispatcher.prototype.addListener;

	EventDispatcher.prototype.on = EventDispatcher.prototype.addListener;

	EventDispatcher.prototype.off = EventDispatcher.prototype.removeListener;

	return EventDispatcher;

});

