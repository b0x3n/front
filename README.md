# Testbed

Update - __13/06/2024__

I've started working on the terminal interface module - it will populate an element with a grid of character cells that can be referenced by co-ordinates.

Compromises needed to be made. We do not know in advance what the __height__ and __width__ of a character will be nor do we know in advance the dimensions of the element that the terminal will be created in, we need to figure all of that out as we go.

The user can specify the __font size__ which gives us the __height of a character cell__ - we can then use this to calculate the total number of __rows__ we will require for the display.

    rows = (terminal_height / font_size)_

Next, we need to populate a cell with a single character in the given font size - from there we can measure the __width of the cell__ to get the width of a monospace character at the given font size, then we can finally figure out how many __columns__ we require.

    columns = (terminal_width / font_width)_

From there we can build the HTML for the display. We simply create a grid of __div__ containers of class __.cell__ (see *source/scss/style/_terminal.scss*) and generate unique ID's using the __row__ and __column__ numbers so that __each cell can be referenced individually__.

For example, if our __Terminal__ element is named _"term"_, then ```Terminal.create()``` will generate cells with ID's named like this:

    term_0_0    // Cell at row 0, column 0.
    term_0_1    // Cell at row 0, column 1.
    term_1_0    // Cell at row 1, column 0.
    term_1_1    // Cell at row 1, column 1.

And so on - if you check the demo at https://b0x3n.github.io/front - for now the display is simply populated with __X__'s.

Now I have to work on __keyboard input__, once I have that working I can move on to the next stage of the project!


Update - __12/06/2024__

The project started today, I just created this repo and pushed the skeleton demo app on git pages.

This repo contains the code for a static website/application - __this is not the final project__, it's designed purely for _testing_ and _demonstration_ purposes.

The goal at this stage is fairly simple. I want to create a user interface that mimics an old-style computer terminal. This interface will provide a platform for a much larger project in the future.

I need to create a sort of terminal emulator using HTML, CSS and JavaScript. The main objective now is to write modules to handle input and output, we need to be able to create a terminal that is divided into a grid of _character cells_ that can be individually referenced using line/column co-ordinates (think __ncurses__).

Visit https://b0x3n.github.io/front for more information and to view/test the app in its current state.

Once  I'm satisfied that the system works properly I can move onto __phase two__ of the project, more on that later!

Additional - Implemented __sass__ and __jQuery__, everything is set up now - I can finally start writing the code for input and output handling.

