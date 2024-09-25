
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
            document.getElementById('money-total').innerText = (totalMon - addMoney) + " BDT";
            document.getElementById('money-noakhali').innerText = (noaMon + addMoney) + " BDT";
            

            modelShow();       
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
            document.getElementById('money-total').innerText = (totalMon - addMoney) + " BDT";
            document.getElementById('money-feni').innerText = (noaMon + addMoney) + " BDT";
            
            
            modelShow();
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
            document.getElementById('money-total').innerText = (totalMon - addMoney) + " BDT";
            document.getElementById('money-quata').innerText = (noaMon + addMoney) + " BDT";
            
            modelShow();
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





document.getElementById('confir-btn').addEventListener('click', function(){
    document.getElementById('donate-noakhali-input').value = "";
    document.getElementById('donate-feni-input').value = "";
    document.getElementById('donate-quata-input').value = "";
})