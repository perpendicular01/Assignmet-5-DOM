
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
            document.getElementById('donate-noakhali-input').value = "";

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
            document.getElementById('donate-feni-input').value = "";
            
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
            document.getElementById('donate-quata-input').value = "";
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


document.getElementById('donate-noakhali-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById('donate-noakhali-input').value);
    console.log(addMoney);
    if(addMoney>0){
        console.log('hello');
        
        const bap = document.getElementById('history-container');

        const div = document.createElement('div');
        div.classList.add('border', 'border-[1px]', 'rounded-2xl', 'p-8', 'mb-6');

        const para = document.createElement('p');
        para.classList.add('font-bold', 'text-black', 'mb-4', 'text-base', 'md:text-xl');
        para.innerText = addMoney + ' Taka is Donated for famine-2024 at Noakhali, Bangladesh';

        div.appendChild(para);

        const dateToday = new Date().toString();
        const para2 = document.createElement('p');
        para2.classList.add( 'text-sm', 'md:text-base', 'text-black', 'text-opacity-75');
        para2.innerText = 'Date: ' +   dateToday;

        
        div.appendChild(para2);
        bap.append(div);

    }
    else{
        console.log('rohan')
    }
});