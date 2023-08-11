const size = prompt("Enter size of grid",16);
console.log(size * size);

let container = document.querySelector('#container');

for( let i = 0;i < size * size; i++){
    const newDiv = document.createElement('div');
    // newDiv.setAttribute('draggable',true);
    newDiv.classList.add('grid');
    container.appendChild(newDiv);

    newDiv.addEventListener('hover',()=>{
        newDiv.style.backgroundColor = 'red';
    })
}

