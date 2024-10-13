document.getElementById('next').addEventListener('click', function() {
    // check if the radio button with ID hoc-chu is checked
    const hocChu = document.getElementById('rad-hoc-chu').checked;
    if (hocChu) {
        // check if the checkbox with ID lowcase is checked
        const lowcase = document.getElementById('lowcase').checked;

        let randomChar = randomVietnameseChar()
        if (lowcase) {
            randomChar = randomChar.toLowerCase();
        }
        document.getElementById('result').textContent = randomChar;
    }

    const hocToan = document.getElementById('rad-hoc-toan').checked;
    if (hocToan) {
        // if subtract input is checked
        const subtract = document.getElementById('subtract').checked;
        if (subtract) {
            var num1 = Math.floor(Math.random() * 20);
            var num2 = Math.floor(Math.random() * 20);
            // swap num1 and num2 if num1 < num2
            if (num1 < num2) {
                const temp = num1;
                num1 = num2;
                num2 = temp;
            }
            document.getElementById('result').textContent = `${num1} - ${num2} = ?`;
        } else {
            const num1 = Math.floor(Math.random() * 20);
            const num2 = Math.floor(Math.random() * 20);
            document.getElementById('result').textContent = `${num1} + ${num2} = ?`;
        }
    }
});

function randomVietnameseChar() {
    const chars = [
        'A', 'Ă', 'Â', 'B', 'C', 'D', 'Đ', 'E', 'Ê', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'Ô', 'Ơ', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ư', 'V', 'X', 'Y'
    ];
    
    return chars[Math.floor(Math.random() * chars.length)];
}

document.getElementById('rad-hoc-toan').addEventListener('change', function() {
    const lowcaseInput = document.getElementById('lowcase-group');
    if (this.checked) {
        lowcaseInput.style.display = 'none';
        document.getElementById('result').textContent = '1 + 2 = ?';
        // show substract-group
        document.getElementById('subtract-group').style.display = 'block';
    } else {
        lowcaseInput.style.display = 'block';
        // hide substract-group
        document.getElementById('subtract-group').style.display = 'none';
    }
});

document.getElementById('rad-hoc-chu').addEventListener('change', function() {
    const lowcaseInput = document.getElementById('lowcase-group');
    if (this.checked) {
        lowcaseInput.style.display = 'block';
        // change text of the div with ID result to empty string
        document.getElementById('result').textContent = 'a b c d';
        // hide substract-group
        document.getElementById('subtract-group').style.display = 'none';

    } else {
        lowcaseInput.style.display = 'none';
        // show substract-group
        document.getElementById('subtract-group').style.display = 'block';
    }
});