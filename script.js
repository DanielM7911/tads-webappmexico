const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const whiteValue = document.getElementById('whiteValue');
const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const leftBox = document.getElementById('left');
const centerBox = document.getElementById('center');
const rightBox = document.getElementById('right');
const hexCode = document.getElementById('hexCode');

function updateColors() {
    const red = parseInt(redSlider.value, 10).toString(16).padStart(2, '0');
    const green = parseInt(greenSlider.value, 10).toString(16).padStart(2, '0');
    const color = `#${green}FF${red}`;
    
    redValue.textContent = redSlider.value;
    greenValue.textContent = greenSlider.value;
    whiteValue.textContent = '255';
    
    leftBox.style.backgroundColor = `rgb(0, ${greenSlider.value}, 0)`;
    centerBox.style.backgroundColor = `rgb(255, 255, 255)`;
    rightBox.style.backgroundColor = `rgb(${redSlider.value}, 0, 0)`;
    
    hexCode.textContent = color;
}

greenSlider.addEventListener('input', updateColors);
redSlider.addEventListener('input', updateColors);

updateColors();

