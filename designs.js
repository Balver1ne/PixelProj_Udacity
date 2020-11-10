//set const variables
const pixelCanvas = document.getElementById('pixelCanvas');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const sizePicker = document.getElementById('sizePicker');

//function to create the grid
function makeGrid(){
    //set values of const variables
    let gHeight = inputHeight.value;
    let gWidth = inputWidth.value;

    //create row i
    for(let i=0; i<gHeight; i++){
      let tr = pixelCanvas.insertRow(i);

      //create column j under row i
      for(let j=0; j<gWidth; j++){
        let td = tr.insertCell(j);

        //add listener for click on cell i,j and check the current color
        td.addEventListener('click', function(event){
            let color = document.getElementById('colorPicker').value;
            event.target.style.backgroundColor = color;
        })
     };
  };
};

// listener for submit button to create grid and clear previous setting
sizePicker.addEventListener('submit', function(event){
    event.preventDefault();
    pixelCanvas.innerHTML = '';
    makeGrid();
})
