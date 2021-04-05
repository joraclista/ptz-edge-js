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
		ptz.zoomInCamera({'name':'PTZ Pro 2'}, function (error, result) {
			if (error) throw error;
			console.log(result);
			updateZoomInfo();
		});
	}

	document.getElementById("ZoomOut").onclick = function() {
		ptz.zoomOutCamera({'name':'PTZ Pro 2'}, function (error, result) {
			if (error) throw error;
			console.log(result);
			updateZoomInfo();
		});
	}
	
	document.getElementById("Pan").onclick = function() {
		ptz.moveCamera({'name':'PTZ Pro 2', 'pan':getIntFromId('PanValue'), 'tilt':0}, function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	
	document.getElementById("Left").onclick = function() {
		ptz.moveCamera({'name':'PTZ Pro 2', 'pan':-500, 'tilt':0}, function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	
	document.getElementById("Right").onclick = function() {
		ptz.moveCamera({'name':'PTZ Pro 2', 'pan':500, 'tilt':0}, function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	
	document.getElementById("Tilt").onclick = function() {
		ptz.moveCamera({'name':'PTZ Pro 2', 'pan':0, 'tilt':getIntFromId('TiltValue')}, function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	document.getElementById("Up").onclick = function() {
		ptz.moveCamera({'name':'PTZ Pro 2', 'pan':0, 'tilt':500}, function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	document.getElementById("Down").onclick = function() {
		ptz.moveCamera({'name':'PTZ Pro 2', 'pan':0, 'tilt':-500}, function (error, result) {
			if (error) throw error;
			console.log(result);
		});
	}
	

}