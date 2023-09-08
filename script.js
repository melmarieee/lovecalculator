document.getElementById('calculateBtn').addEventListener('click', function () {
    const yourName = document.getElementById('yourName').value;
    const partnerName = document.getElementById('partnerName').value;

    if (yourName === '' || partnerName === '') {
        alert('Please enter both names.');
        return;
    }

    const lovePercentage = calculateLovePercentage(yourName, partnerName);
    displayResult(yourName, partnerName, lovePercentage);
});

function calculateLovePercentage(name1, name2) {
    // Calculate love percentage here (you can use a random number for fun)
    return Math.floor(Math.random() * 101);
}

function displayResult(name1, name2, percentage) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h2>Results</h2>
        <p>${name1} and ${name2}'s love percentage:</p>
        <h1>${percentage}%</h1>
        <p>${getLoveMessage(percentage)}</p>
    `;
}

function getLoveMessage(percentage) {
    // You can create a list of love messages for different percentages
    if (percentage <= 20) {
        return 'Looks like there is not much love here!';
    } else if (percentage <= 50) {
        return 'Not bad, there is some love!';
    } else if (percentage <= 80) {
        return 'You two are a match made in heaven!';
    } else {
        return 'Wow! Its true love!';
    }
}