/**********************************************************
 * front/source/js/core/Err.js
 * 
 * Basic error handler.
 * 
 */

    const   Err = () =>
    {

        let     __error_msg;


    /******************************************************
     * __init()
     * 
     * Called when the module is initialised, initialises
     * the __error_message (false = no errors, yet!).
     * 
     */
        let     __init = () =>
        {

            __error_msg = false;

        };


    /******************************************************
     * _setError()
     * 
     * Record an error message in the __error_msg buffer,
     * we can add multiple errors which will be sepatated
     * by a \n character.
     * 
     * If the passed error_msg is false, the __error_msg
     * is reset (set to false = no errors).
     * 
     */
        let     _setError = (error_msg = false) =>
        {
            if (! error_msg) 
                __error_msg = false;
            else
            {
                if (__error_msg)
                    __error_msg += `\n${error_msg}`;
                else
                    __error_msg = error_msg;
            }

            return __error_msg;
        };


    /******************************************************
     * _isError()
     * 
     * Will return __error_msg, which will be false if
     * there are no errors.
     * 
     * If there are errors are reportError is not false,
     * then reportError is assumed to be a callback that
     * will be called and receive __error_msg as a
     * paramter.
     * 
     */
        let     _isError = (
            reportError = false
        ) =>
        {
            if (__error_msg) {
                if (reportError) {
                    __error_msg.split('\n').forEach(msg => {
                        console.error(msg);
                    });
                }
            }

            return __error_msg;
        };


        __init();


        return {
            setError:           _setError,
            isError:            _isError
        };

    };


    export default Err;
