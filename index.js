const debug = require('@google-cloud/debug-agent').start();

let debugInitialized;
let functionCompleted;

exports.helloGET = (req, res) => {
    debugInitialized = false;
    functionCompleted = false;
    debug.isReady().then(() => {
        debugInitialized = true;
        if (functionCompleted) {
            console.log("terminating function - 1");
            res.send('Hello World!');
          }
    });
    functionCompleted = true;
    if (debugInitialized) {
        console.log("terminating function - 2");
        res.send('Hello World!');
      }
};
