document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            // Clear button functionality
            if (this.id === 'clear') {
                currentInput = '';
                expression = '';
                display.value = '';
                return;
            }

            // Equals button functionality
            if (this.id === 'equals') {
                try {
                    expression = eval(expression);  // Evaluate the mathematical expression
                    display.value = expression;
                } catch (error) {
                    display.value = 'Error';
                }
                return;
            }

            // Append value to the expression and display it
            currentInput += value;
            expression += value;
            display.value = expression;
        });
    });
});
