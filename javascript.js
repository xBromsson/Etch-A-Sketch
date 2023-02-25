const xaxis = 16
const yaxis = 16

const body = document.querySelector('body');

for (let i = 0; i < yaxis; i++) {
    let ycell = document.createElement('div');
    ycell.classList.add('container');
    ycell.setAttribute('id','yaxis')
    body.appendChild(ycell)

}

const yAxisList = document.querySelectorAll('#yaxis.container')

for (let i = 0; i < yaxis; i++) {
    self = yAxisList[i]
    for (let i = 0; i < xaxis; i++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        self.appendChild(cell)   
    }

}


