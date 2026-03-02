const grid = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const clearBtn = document.getElementById('clear-btn');


function createGrid() {
    grid.innerHTML = '';
    for (let i = 0; i < 400; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        
        
        pixel.addEventListener('mousedown', () => {
            pixel.style.backgroundColor = colorPicker.value;
        });

        
        pixel.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) { 
                pixel.style.backgroundColor = colorPicker.value;
            }
        });

        grid.appendChild(pixel);
    }
}

clearBtn.addEventListener('click', createGrid);


createGrid();