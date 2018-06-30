# Pixel Art Maker

## Requirements
As a user, I should be able to:
1. Dynamically set the size of a table as an _n_ by _m_ grid.
2. Choose a color.
3. Click a cell in the grid to fill the cell with the chosen color.

## Skills Used
In this project, you'll use your front-end programming skills from JavaScript Foundations and Intro to jQuery, including:

- Defining variables with const and let.
- Accessing the DOM using methods of the document object.
- Declaring functions and attaching them to DOM objects as event listeners.
- Writing nested loops and using loop variables.

## Development Strategy
1. Define your variables by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play!
  - For instance, the submit button, the table, and the color picker need to be accessed.
  - The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
2. Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
3. Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function.
  - Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input.
  - Each cell should have an event listener that sets the background color of the cell to the selected color.

Test and refer to the [rubric](https://review.udacity.com/#!/rubrics/641/view).
