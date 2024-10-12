document.getElementById('next').addEventListener('click', function() {
    // check if the checkbox with ID lowcase is checked
    const lowcase = document.getElementById('lowcase').checked;

    let randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    if (lowcase) {
        randomChar = randomChar.toLowerCase();
    }
    document.getElementById('result').textContent = randomChar;
});