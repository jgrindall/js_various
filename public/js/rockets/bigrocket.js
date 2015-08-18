define(["base/rockets/rocket", "base/utils"],

	function(Rocket, Utils){

	"use strict";

	var BigRocket = function(){
		BigRocket.Super.call(this);
	};

	Utils.extends(BigRocket, Rocket);

	BigRocket.prototype.zoom = function(){
		BigRocket.Super.prototype.zoom.call(this);
		console.log("bigrocket zoom");
	};

	return BigRocket;

});

