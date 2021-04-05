const path = require('path');


var edge = require('electron-edge-js');

//process.env.EDGE_USE_CORECLR = 1;



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

module.exports = {
   getCameraZoomInfo,
   zoomInCamera,
   zoomOutCamera,
   moveCamera
}

