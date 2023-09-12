let divsGrid = [];

for(let i = 0; i < 16; i++) {
    let divsRow = [];

    for(let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('cell_grid');

        divsRow.push(div);
    }

    divsGrid.push(divsRow);
}

console.log(divsGrid);