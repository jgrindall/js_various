define(["base/rockets/rocket", "base/rockets/bigrocket",
	"base/rockets/verybigrocket", "base/events/events", "base/events/eventdispatcher"],

	function(Rocket, BigRocket, VeryBigRocket,
		Events, EventDispatcher){

	"use strict";

	var SpaceGame = function(){
		var r1 = new Rocket();
		var r2 = new BigRocket();
		var r3 = new VeryBigRocket();
		console.log('r1', r1);
		console.log('r2', r2);
		console.log('r3', r3);
		r1.start();
		r2.start();
		r3.start();
		r1.zoom();
		r2.zoom();
		r3.zoom();
		setTimeout(function(){
			console.log("game paused");
			EventDispatcher.getInstance().dispatchEvent(Events.GAME_PAUSED);
		}, 5000);
		setTimeout(function(){
			r1.destroy();
			r2.destroy();
			r3.destroy();
		}, 7500);
		setTimeout(function(){
			console.log("game paused again");
			EventDispatcher.getInstance().dispatchEvent(Events.GAME_PAUSED);
		}, 10000);
	};

	return SpaceGame;

});

