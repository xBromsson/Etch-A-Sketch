const xaxis = 15
const yaxis = 15

const mainContainer = document.querySelector('.main-container');

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
    }

}


