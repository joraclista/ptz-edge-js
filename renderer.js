const path = require('path');

var ptz = require('./index.js');

process.env.EDGE_USE_CORECLR = 1;

console.log('### Calling methods from C# code');


window.onload = function() {
	
	var getIntFromId = function(id) {
		return parseInt(document.getElementById(id).value);
	}

    var updateZoomInfo = () => ptz.getCameraZoomInfo('PTZ Pro 2', function(error, result) {
        if (error) throw error;
        document.getElementById("GetCameraZoomInfo").innerHTML = JSON.stringify(result);
    });
	
	updateZoomInfo();

    document.getElementById("ZoomIn").onclick = function() {
		ptz.zoomIn('PTZ Pro 2', function (error, result) {
			if (error) throw error;
			console.log(result);
			updateZoomInfo();
		});
	}

	document.getElementById("ZoomOut").onclick = function() {
		ptz.zoomOut('PTZ Pro 2', function (error, result) {
			if (error) throw error;
			console.log(result);
			updateZoomInfo();
		});
	}

	document.getElementById("Left").onclick = function() {
		ptz.moveLeft('PTZ Pro 2', function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	
	document.getElementById("Right").onclick = function() {
		ptz.moveRight('PTZ Pro 2', function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	
	document.getElementById("Up").onclick = function() {
		ptz.moveUp('PTZ Pro 2', function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	document.getElementById("Down").onclick = function() {
		ptz.moveDown('PTZ Pro 2', function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}

}