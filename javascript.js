const xaxis = 16
const yaxis = 16

const containerx = document.querySelector('#xaxis.container');


for (let i = 0; i < xaxis; i++) {

    let cell = document.createElement('div')
    cell.classList.add('cell')
    containerx.appendChild(cell)

}
