define(

	[],

	function(){

		"use strict";

		var Utils = {};

		// this is how I do inheritance in javascript, and you get a Super variable on each prototype function.

		Utils.extends = function(SubClassRef, SuperClassRef){
		    var F;
		    if(!SubClassRef){
		    	throw new Error("no SubClassRef " + SuperClassRef);
		    }
		    if(!SuperClassRef){
		    	throw new Error("no SuperClassRef " + SubClassRef);
		    }
		    SubClassRef.Super = SuperClassRef;
		    F = function(){

		    };
		    F.prototype = Object.create(SuperClassRef.prototype);
		    SubClassRef.prototype = new F();
		    SubClassRef.prototype.constructor = SubClassRef;
		};

		return Utils;

	}

);
