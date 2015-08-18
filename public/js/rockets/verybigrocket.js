define(["base/rockets/bigrocket", "base/utils"],

	function(BigRocket, Utils){

	"use strict";

	var VeryBigRocket = function(){
		VeryBigRocket.Super.call(this);
	};

	Utils.extends(VeryBigRocket, BigRocket);

	VeryBigRocket.prototype.zoom = function(){
		VeryBigRocket.Super.prototype.zoom.call(this);
		console.log("verybigrocket zoom");
	};

	return VeryBigRocket;

});

