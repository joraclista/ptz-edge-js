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

var moveCameraLeft = function(name, callback) {
	return moveCamera({'name':name,'pan':-10, 'tilt':0}, callback);
}

var moveCameraRight = function(name, callback) {
	return moveCamera({'name':name,'pan':10, 'tilt':0}, callback);
}

var moveCameraUp = function(name, callback) {
	return moveCamera({'name':name,'pan':0, 'tilt':10}, callback);
}

var moveCameraDown = function(name, callback) {
	return moveCamera({'name':name,'pan':0, 'tilt':-10}, callback);
}

module.exports = {
   getCameraZoomInfo,
   zoomInCamera,
   zoomOutCamera,
   moveCameraLeft,
   moveCameraRight,
   moveCameraUp,
   moveCameraDown
}

