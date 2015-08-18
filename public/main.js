// main bit for require


// it is helpful to have a base path so that you can change it it one place later on.
require.config({
	'paths': {
		'base': 'js/'
	}
});

// you can also list here 3rd party files that don't use require js, but using shims but I haven't added any.

require(["base/spacegame"], function(SpaceGame){
	new SpaceGame();
});

// an example of using promises
var loadJson = function(){
	var promise = new Q.Promise(function(resolve, reject){
		var img = new Image();
		img.onload = function(){
			console.log("loaded");
			resolve();
		};
		img.src = "http://dreamatico.com/data_images/kitten/kitten-2.jpg";
		document.body.appendChild(img);
	});
	return promise;
};

loadJson().then(function(){
	alert("ready!");
});


