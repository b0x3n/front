/**********************************************************
 * front/source/js/App.js
 * 
 * Import all core modules.
 * 
 */
    import Err          from './core/Err.js';
    import Terminal     from './core/Terminal.js';


    const   App = () =>
    {

        let     __err;
        let     __terminal;


        let     __init = () =>
        {
            __err = Err();

            __terminal = Terminal(__err);
        };


        let     _boot = () =>
        {
            __terminal.create("Terminal");

            if (__err.isError())
                return false;
        };


        __init();


        return {
            isErr:              __err.isError,

            boot:               _boot
        };

    };


    export default App;
