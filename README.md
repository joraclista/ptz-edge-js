# ptz-edge-js
API for controlling PTZ device on windows inside electron container

1. Install dependencies `npm install`
2. To run electron app use `npm start`

Usage inside your electron app

```bash
const ptz = require("@joraclista/ptz-edge-js");

ptz.getCameraZoomInfo('PTZ Pro 2', function(error, result) {
  if (error) throw error;
  console.log(JSON.stringify(result));
});
      
ptz.moveLeft('PTZ Pro 2', function (error, result) {
  if (error) throw error;
  console.log(result);
});      
```

#### Available functions: 

getCameraZoomInfo(name, callback),

moveLeft(name, callback), 

moveRight(name, callback), 

moveUp(name, callback), 

moveDown(name, callback), 

zoomIn(name, callback),

zoomOut(name, callback)
