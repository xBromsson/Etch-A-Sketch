
//variables
let isDragging = false;
const mainContainer = document.querySelector('.main-container');
let gridInput = document.querySelector(".grid");
let xaxis = gridInput.value;
let yaxis = gridInput.value;
let clearGridButton = document.querySelector('button');
let brushSelection = document.querySelector('input[name="brushes"]:checked')
let form = document.querySelector('form');

//checks for update to grid size
clearGridButton.addEventListener("click", generateGrid);
gridInput.addEventListener("input", (event) => {

    if (gridInput.value > 100) {
        gridInput.value = 100
    }

    xaxis = gridInput.value;
    yaxis = gridInput.value;
    generateGrid();

})

//checks for update to brush selection
form.addEventListener('change', function(){
    brushSelection = document.querySelector('input[name="brushes"]:checked')
})

//returns color depending on brush selection
function brushColor(){

    if(brushSelection.value === 'rainbow'){
        r = randomRange(0,255);
        b = randomRange(0,255);
        g = randomRange(0,255);
        a = 1;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    } else if(brushSelection.value === 'black'){
        let shade = .1;
        r = 0;
        b = 0;
        g = 0;
        a = 1;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

}



//returns a random number between given range
function randomRange(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

//removes old grid and creates fresh grid equal to x and y axis
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
                cell.style.backgroundColor = brushColor();
            });
            cell.addEventListener('mouseup', () => isDragging = false)
            cell.addEventListener('mousemove', (event) => {
                if (isDragging){
                    cell.style.backgroundColor = brushColor();
                    //cell.classList.add('draw')

                }
            });
    
        }
    
    }

}

generateGrid();
console.log(brushSelection.value)




