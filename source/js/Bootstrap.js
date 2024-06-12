/**********************************************************
 * front/modules/Bootstrap.js
 *
 * Here, we import the App.js module, this will import
 * all of the core modules and initialise the system.
 *  
 */

    import App from './App.js';

    let     Main = () =>
    {
        let     app = App();

    /******************************************************
     * Error check - app.isErr() will return true if
     * any errors were recorded.
     * 
     */
        if (app.isErr()) {
            app.isErr(true);
            return;
        }
    
    /******************************************************
     * All good, no errors.
     */
        console.log('Ready!');
    };


    Main();
