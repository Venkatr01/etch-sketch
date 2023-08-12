const size = prompt("Enter size of grid",16);
const gridWidth = 365 / (size* size);
console.log(gridWidth);

let container = document.querySelector('#container');
const eraser = document.querySelector('#eraser');
const paint = document.querySelector('#paintbtn');



for( let i = 0;i < size * size; i++){
    const newDiv = document.createElement('div');
    
    newDiv.classList.add('grid');
    container.appendChild(newDiv);
    const divCombined = document.querySelectorAll('.grid');
    const grid = document.querySelector('.grid');
    
    
    function paintFunc(){
        divCombined.forEach((grid) => {
            grid.addEventListener('mouseenter',()=>{
                grid.style.cssText = 'background-color: yellow';
            })
        })
    }

    function eraserFunc(){
        divCombined.forEach((grid) => {
            grid.addEventListener('mouseenter',()=>{
                grid.style.cssText = 'background-color: rgb(224, 224, 233)'
            })
        })
    }

    divCombined.forEach((grid) => {
        grid.style.width = `${gridWidth}`;
    })
    
    eraser.addEventListener('click',eraserFunc);
    paint.addEventListener('click',paintFunc);
}



