/**********************************************************
 * front/source/js/core/Terminal.js
 * 
 */

    const   Terminal = (
        err,

    /******************************************************
     * We can specify the font family, font size and size
     * unit - so if font-size is 24 and font-unit is px
     * then we will get a terminal where each chacater
     * height is 24px.
     * 
     * This means we will not know how many lines and
     * columns we will get because it all depends on the
     * size of the element the terminal is being created
     * in.
     * 
     * The number of lines/rows we get is basically the
     * height of the terminal divided by font-size.
     * 
     * However, the width of each character will vary
     * from font to font, since we're sticking to the
     * monospace fonts this shouldn't be a problem,
     * every character in the font should be the same
     * width.
     * 
     */
        objParams = {
            'font-family':  'VT323',
            'font-size':    24,
            'font-unit':    'px'
        }
    ) =>
    {

        let     __el = false;

        let     __width = -1;
        let     __height = -1;

        let     __rows = -1;
        let     __cols = -1;

        let     __fontHeight = 18;
        let     __fontWidth = -1;
        let     __fontUnit = false;

        let     __html = '';


    /******************************************************
     * __init()
     * 
     * Constructor - this is called before the module
     * returns.
     * 
     */
        let     __init = () =>
        {
            //
        };

        let     __generageCells = () =>
        {
            let diffY = (__height / __fontHeight);
            __rows = Math.floor(diffY);

            diffY -= __rows;

    /******************************************************
     * We need to populate a single cell with a single
     * character then grab the width of the cell...
     */

            $(`#${__el}`).append(`
                <div class="cell" id="TestCell" style="font-size: ${__fontHeight}px;">W</div>
            `);

            __fontWidth = parseInt($(`#TestCell`).css('width').replace('px', ''));

            let diffX = (__width / __fontWidth);
            __cols = Math.floor(diffX);

            diffX -= __cols;

            __html = '';

            for (let row = 0; row < __rows; row++)
            {
                for (let col = 0; col < __cols; col++)
                {
                    __html +=`
                        <div
                            class="cell"
                            id="${__el}_${row}_${col}"
                            style="
                                top: ${__fontHeight * (row + (diffY / 2))}px;
                                left: ${__fontWidth * (col + (diffX / 2))}px;
                                width: ${__fontWidth}px;
                                height: ${__fontHeight}px;
                            "
                        >
                            X
                        </div>
                    `;
                }
            }

            $(`#${__el}`).html(__html);
        };


    /******************************************************
     * _create()
     * 
     * Create a new terminal display - sets an error
     * message and returns false on error, otherwise
     * returns true.
     *
     */
        let     _create = (

            elementId

        ) =>
        {

    /******************************************************
     * Make sure the target element (elementId) exists
     * before we proceed.
     */
            if (! $(`#${elementId}`))
                return err.setError(`Error in ${Terminal.create()} - ${elementId} doesn't exist`);

            __el = elementId;

            $(`#${__el}`).html('');

    /******************************************************
     * First, set get the width and height of the element
     * in pixels.
     */
            __width = parseInt($(`#${__el}`).css('width').replace('px', ''));
            __height = parseInt($(`#${__el}`).css('height').replace('px', ''));
            
    /******************************************************
     * __generateCells() will populate 
     */
            __generageCells();

            return true;

        };


        __init();


        return {
            create:         _create
        };

    };


    export default Terminal;
