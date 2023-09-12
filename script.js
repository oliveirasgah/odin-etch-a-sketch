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

createGrid();