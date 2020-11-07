//set const variables
const $tableVar = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorSelect = $('#colorPicker');


// call makeGrid() from the submit button
$('#sizePicker').submit(event=>{event.preventDefault();
  makeGrid();
  cellClick();
});

//set grid function calling values and creating grid
function makeGrid(){
  let gheight = $inputHeight.val();
  let gwidth = $inputWidth.val();
  $tableVar.empty();

  for(let i=0; i<gheight; i++){
    $tableVar.append('<tr></tr>');
  };
  for(let i=0, i<gwidth; i++){
    $('tr').append('<td></td>');
  };
};


//click function
function cellClick(){
  $('td').click(event =>{
    //let color = $colorSelect.val();
    $(event.currentTarget).css("background-color", $colorSelect.val());
  });
};



}
