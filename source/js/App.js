/**********************************************************
 * front/source/js/App.js
 * 
 * Import all core modules.
 * 
 */
    import Err from './core/Err.js';


    const   App = () =>
    {

        let     __err;


        let     __init = () =>
        {
            __err = Err();
        };


        __init();


        return {
            isErr:              __err.isError
        };

    };


    export default App;
