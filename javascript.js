
//variables
let isDragging = false;
const mainContainer = document.querySelector('.main-container');
let gridInput = document.querySelector(".grid");
let xaxis = gridInput.value;
let yaxis = gridInput.value;
let clearGridButton = document.querySelector('button');

//listeners
clearGridButton.addEventListener("click", generateGrid);
gridInput.addEventListener("input", (event) => {

    if (gridInput.value > 100) {
        gridInput.value = 100
    }

    xaxis = gridInput.value;
    yaxis = gridInput.value;
    generateGrid();

})

//functions
function generateGrid(){

    let currentGrid = document.querySelectorAll('#yaxis.container')

    if(currentGrid instanceof NodeList) {
        currentGrid.forEach(element => {
            element.remove();
        });
    }

    for (let i = 0; i < yaxis; i++) {
        let ycell = document.createElement('div');
        ycell.classList.add('container');
        ycell.setAttribute('id','yaxis')
        mainContainer.appendChild(ycell)
    
    }
    
    const yAxisList = document.querySelectorAll('#yaxis.container')
    
    for (let i = 0; i < yaxis; i++) {
        self = yAxisList[i]
        for (let i = 0; i < xaxis; i++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            self.appendChild(cell) 
            cell.addEventListener('mouseover', () => cell.classList.add('hover'))
            cell.addEventListener('mouseout', () => cell.classList.remove('hover'))
            cell.addEventListener('mousedown', (event) => {
                event.preventDefault();
                isDragging = true;
                cell.classList.add('draw')
            });
            cell.addEventListener('mouseup', () => isDragging = false)
            cell.addEventListener('mousemove', (event) => {
                if (isDragging){
                    cell.classList.add('draw') 
                }
            });
    
        }
    
    }

}

generateGrid();





