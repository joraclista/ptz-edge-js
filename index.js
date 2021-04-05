const path = require('path');


var edge = require('electron-edge-js');


const assemblyFileDll = 'PTZDevice.dll';
const baseDllPath = path.join(__dirname, assemblyFileDll);


const ptzClassName = 'PTZ.PTZDeviceHelper';

var getCameraZoomInfo = edge.func({
    assemblyFile: baseDllPath,
    typeName: ptzClassName,
    methodName: 'GetCameraZoomInfo'
});

var zoomInCamera = edge.func({
    assemblyFile: baseDllPath,
    typeName: ptzClassName,
    methodName: 'ZoomIn'
});

var zoomOutCamera = edge.func({
    assemblyFile: baseDllPath,
    typeName: ptzClassName,
    methodName: 'ZoomOut'
});

var moveCamera = edge.func({
    assemblyFile: baseDllPath,
    typeName: ptzClassName,
    methodName: 'Move'
});

var zoomIn = function(name, callback) {
	return zoomInCamera({'name':name}, callback);
}

var zoomOut = function(name, callback) {
	return zoomOutCamera({'name':name}, callback);
}

var moveLeft = function(name, callback) {
	return moveCamera({'name':name,'pan':-10, 'tilt':0}, callback);
}

var moveRight = function(name, callback) {
	return moveCamera({'name':name,'pan':10, 'tilt':0}, callback);
}

var moveUp = function(name, callback) {
	return moveCamera({'name':name,'pan':0, 'tilt':10}, callback);
}

var moveDown = function(name, callback) {
	return moveCamera({'name':name,'pan':0, 'tilt':-10}, callback);
}

module.exports = {
   getCameraZoomInfo,
   zoomIn,
   zoomOut,
   moveLeft,
   moveRight,
   moveUp,
   moveDown
}

