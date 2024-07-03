document.addEventListener('DOMContentLoaded', function() {
    const colorSelect = document.getElementById('colorSelect');
    const changeColorButton = document.getElementById('changeColorButton');

    changeColorButton.addEventListener('click', function() {
        const selectedColor = colorSelect.value;
        document.body.style.backgroundColor = selectedColor;
    });
});
