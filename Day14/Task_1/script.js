// JavaScript code to create HTML structure

document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.className = 'calculator container mt-5';

    // Calculator display
    const display = document.createElement('input');
    display.type = 'text';
    display.className = 'form-control mb-3';
    display.id = 'display';
    display.disabled = true;

    // Buttons
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'btn-container';

    buttons.forEach(value => {
        const button = document.createElement('button');
        button.className = 'btn btn-light';
        button.textContent = value;
        button.dataset.value = value;
        buttonContainer.appendChild(button);
    });

    container.appendChild(display);
    container.appendChild(buttonContainer);
    document.body.appendChild(container);
});

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn-container button');

    // Function to handle button clicks
    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                // Evaluate the expression
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    };
// Add event listener to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.dataset.value));
});

// Handle keyboard events
document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        display.value += event.key;
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        display.value += ` ${event.key} `;
    } else if (event.key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    } else {
        alert('Only Numbers are allowed');
    }
});
});