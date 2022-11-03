let container = document.querySelector('.container');
let gridDiv = document.querySelectorAll('.grid-div');

let resetBtn = document.querySelector('.btn-reset');
let randomBtn = document.querySelector('.btn-random');

//Create initial grid
function createDivs() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.className = 'grid-div';

    div.addEventListener('mouseover', function () {
      div.classList.add('black-background');
    });

    container.appendChild(div);
    resetBtn.addEventListener('click', function () {
      div.classList.remove('black-background');
    });

    randomBtn.addEventListener('click', function () {
      div.classList.remove('black-background');
      div.addEventListener('mouseover', function () {
        div.style.backgroundColor = getRandomColor();
      });
    });
  }
}

//Create grids with prompt
function askSquares() {
  let squares = prompt('How many squares per side do you want?');

  removeClasses();
  removeAllChildNodes(container);

  container.classList.add('user-container');
  container.setAttribute(
    'style',
    `grid-template-columns: repeat(${squares}, 2fr); grid-template-rows: repeat(${squares}, 2fr);`
  );

  for (let i = 0; i < squares * squares; i++) {
    const div = document.createElement('div');
    div.className = 'grid-div';
    div.addEventListener('mouseover', function () {
      div.classList.add('black-background');
    });
    container.appendChild(div);

    resetBtn.addEventListener('click', function () {
      div.classList.remove('black-background');
    });
  }
}

//Remove classes from container and divs
function removeClasses() {
  container.classList.remove('container');
  gridDiv.forEach((div) => div.classList.remove('black-background'));
}

//Remove child nodes from container
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//Get Random Color
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createDivs();
