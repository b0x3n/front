/**********************************************************
 * front/modules/Bootstrap.js
 * 
 */

    import App from './App.js';


    let     app = App();

    if (app.isErr()) {
        app.isErr(true);
        console.log("Bailed due to error!");
    }
    else
        console.log('Ready!');
