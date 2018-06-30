// let Set target ID to variable.
const table = '#pixelCanvas';

// let Set row elements to variable.
const row = '<tr></tr>';

// lets Set cell elements to variable.
const cell = '<td></td>';

// when the sizePicker form is submitted, run the makeGrid function.
// the makeGrid function takes the parameters event, height, and width.
$('#sizePicker').submit(function makeGrid (event, height, width) {

// We Prevent auto-refresh from deleting grid as it's displayed.
  event.preventDefault();
  
// we Clear the grid on submit, if there is one.
  $(table).empty();
  
 // get the input value of height.
  height = $('#inputHeight').val();
  
 // get the input value of width.
  width = $('#inputWidth').val();
 
// define Outer loop  by height.
  for (let m = 0; m < height; m++) {
  
// Append a row to the table m times.
    $(table).append(row);
    
// define Inner loop  by width.
    for (let n = 0; n < width; n++) {
    
// Append n cells to the last row m times.
      $('tr').last().append(cell);
      
    }
  }
});

// When the table is clicked on, run the paintGrid function on the target cell.
$(table).on('click', 'td', function paintGrid () {

// Grab the input color each time, in case it's changed.
  let color = $('#colorPicker').val();
  
// Set this cell's background to the input color.
  $(this).css('background-color', color);
  
});
