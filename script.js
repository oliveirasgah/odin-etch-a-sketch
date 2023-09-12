function createGrid(gridSize = 16) {
    const container = document.querySelector('.container');
    let divsGrid = [];

    for(let i = 0; i < gridSize; i++) {
        let divsRow = [];

        for(let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add('cell_grid');

            divsRow.push(div);
        }

        divsGrid.push(divsRow);
    }

    divsGrid.forEach(divRow => {
        divRow.forEach(div => {
            container.appendChild(div);
        });
    });
}

function removeDivsGrid() {
    const container = document.querySelector('.container');
    let firstChild = container.firstChild;

    while(firstChild) {
        container.removeChild(firstChild);
        firstChild = container.firstChild;
    }
}

const btnGrid = document.querySelector('.btn_grid');

btnGrid.addEventListener('click', e => {
    let newGridSize = prompt('Select a new grid size from 1 to 100');

    if(typeof newGridSize != 'string') return;
    if(isNaN(newGridSize) || newGridSize.trim() == '') {
        alert('You can only user numbers from 1 to 100!');
        return;
    }

    newGridSize = parseInt(newGridSize);
    
    if(newGridSize < 1 || newGridSize > 100) {
        alert('The provided value is out of range!');
        return;
    }

    removeDivsGrid();
    createGrid(newGridSize);
});

createGrid();