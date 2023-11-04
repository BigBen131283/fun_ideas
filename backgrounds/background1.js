const hexagonWidth = 100;
const hexagonHeight = 110;
const container = document.querySelector('.hex-container');
let hexContainerWidth = container.clientWidth;
let hexContainerHeight = container.clientHeight;
const numHexagonPerRow = Math.floor(hexContainerWidth / hexagonWidth);
const numRowPerContainer = Math.floor(hexContainerHeight / hexagonHeight);
// const rows = Array.from(document.querySelectorAll('.row'));
console.log(numHexagonPerRow, numRowPerContainer);

document.addEventListener("DOMContentLoaded", function() {
    
    createLines(numRowPerContainer, container)
    
})

function createLines(rows, bloc) {
    for(let i = 0; i < rows; i++){
        const line = document.createElement("div");
        line.classList.add("row");
        
        for(let i = 0; i < numHexagonPerRow + 1; i++) {
            const hexagon = document.createElement("div");
            hexagon.classList.add("hexagon");
            line.appendChild(hexagon);
        }
        
        bloc.appendChild(line);
    }
}

function resize() {
    hexContainerHeight = container.clientHeight;
    hexContainerWidth = container.clientWidth;
}

window.onresize = resize();