
// noakhali
document.getElementById('donate-noakhali-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById('donate-noakhali-input').value);

    if (addMoney <= 0 || isNaN(addMoney)) {
        alert('Try again .. 2 Failed to Add Money');
        document.getElementById('donate-noakhali-input').value = "";
        return;
    } else {
        const noaMon = parseFloat(getTextById('money-noakhali'));
        const totalMon = parseFloat(getTextById('money-total'));

        if (addMoney > totalMon) {
            alert('Failed to Add money');
            document.getElementById('donate-noakhali-input').value = "";
            return;
        } else {
            const confirContainer = document.getElementById('confir-container');
            confirContainer.classList.remove('hidden');

            const confirBtn = document.getElementById('confir-btn');
            const confirmationHandler = function (e) {
                e.preventDefault();
                document.getElementById('donate-noakhali-input').value = "";
                confirContainer.classList.add('hidden');
            };

            document.getElementById('money-total').innerText = (totalMon - addMoney) + " BDT";
            document.getElementById('money-noakhali').innerText = (noaMon + addMoney) + " BDT";
            document.getElementById('donate-noakhali-input').value = "";

            if (!confirBtn.hasEventListener) {
                confirBtn.addEventListener('click', confirmationHandler);
                confirBtn.hasEventListener = true; 
            }


            const div = document.createElement('div');
            
        }
    }
});



// feni 
document.getElementById('donate-feni-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById('donate-feni-input').value);

    if (addMoney <= 0 || isNaN(addMoney)) {
        alert('Try again .. 2 Failed to Add Money');
        document.getElementById('donate-feni-input').value = "";
        return;
    } else {
        const noaMon = parseFloat(getTextById('money-feni'));
        const totalMon = parseFloat(getTextById('money-total'));

        if (addMoney > totalMon) {
            alert('Failed to Add money');
            document.getElementById('donate-feni-input').value = "";
            return;
        } else {
            const confirContainer = document.getElementById('confir-container');
            confirContainer.classList.remove('hidden');

            const confirBtn = document.getElementById('confir-btn');
            const confirmationHandler = function (e) {
                e.preventDefault();
                
                confirContainer.classList.add('hidden');
            };

            document.getElementById('money-total').innerText = (totalMon - addMoney) + " BDT";
            document.getElementById('money-feni').innerText = (noaMon + addMoney) + " BDT";
            document.getElementById('donate-feni-input').value = "";
            
            if (!confirBtn.hasEventListener) {
                confirBtn.addEventListener('click', confirmationHandler);
                confirBtn.hasEventListener = true; 
            }
        }
    }
});

//Qoata
document.getElementById('donate-qoata-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById('donate-quata-input').value);

    if (addMoney <= 0 || isNaN(addMoney)) {
        alert('Try again .. 2 Failed to Add Money');
        document.getElementById('donate-quata-input').value = "";
        return;
    } else {
        const noaMon = parseFloat(getTextById('money-quata'));
        const totalMon = parseFloat(getTextById('money-total'));

        if (addMoney > totalMon) {
            alert('Failed to Add money');
            document.getElementById('donate-quata-input').value = "";
            return;
        } else {
            const confirContainer = document.getElementById('confir-container');
            confirContainer.classList.remove('hidden');

            const confirBtn = document.getElementById('confir-btn');
            const confirmationHandler = function (e) {
                e.preventDefault();
                
                confirContainer.classList.add('hidden');
            };

            document.getElementById('money-total').innerText = (totalMon - addMoney) + " BDT";
            document.getElementById('money-quata').innerText = (noaMon + addMoney) + " BDT";
            document.getElementById('donate-quata-input').value = "";

            if (!confirBtn.hasEventListener) {
                confirBtn.addEventListener('click', confirmationHandler);
                confirBtn.hasEventListener = true; 
            }
        }
    }
});




document.getElementById('donate-btn').addEventListener('click', function () {
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donate-container').classList.remove('hidden');
    document.getElementById('history-btn').style.backgroundColor = 'white';
    document.getElementById('donate-btn').style.backgroundColor = '#B4F461';

})

document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('donate-btn').style.backgroundColor = 'white';
    document.getElementById('history-btn').style.backgroundColor = '#B4F461';
})