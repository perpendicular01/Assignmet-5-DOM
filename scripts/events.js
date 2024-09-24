
// noakhali
document.getElementById('donate-noakhali-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = parseFloat(etInputValueById('donate-noakhali-input'));
    // console.log(addMoney)

    if(addMoney <= 0  ||  isNaN(addMoney)){
        alert('Try again .. 2 Failed to Add Money');
        document.getElementById('donate-noakhali-input').value="";
        return;
    }
    else{
        const noaMon = parseFloat(getTextById('money-noakhali'));
        // console.log(noaMon);
        const totalMon = parseFloat(getTextById('money-total'));
        // console.log(totalMon);
        if(addMoney > totalMon){
            alert('Failed to Add money');
            document.getElementById('donate-noakhali-input').value="";
            return;
        }
        else{
        document.getElementById('money-total').innerText = totalMon-addMoney + " BDT";
        document.getElementById('money-noakhali').innerText = noaMon+addMoney + " BDT";

        document.getElementById('donate-noakhali-input').value="";  
        }
    }
    
})

// feni 
document.getElementById('donate-feni-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputValueById('donate-feni-input');
    // console.log(addMoney)

    if(addMoney <= 0  ||  isNaN(addMoney)){
        alert('Try again .. Failed to Add Money');
        document.getElementById('donate-feni-input').value="";
        return;
    }
    else{
        const noaMon = parseFloat(getTextById('money-feni'));
        // console.log(noaMon);
        const totalMon = parseFloat(getTextById('money-total'));
        // console.log(totalMon);
        if(addMoney > totalMon){
            alert('Failed to Add money');
            document.getElementById('donate-feni-input').value="";
            return;
        }
        document.getElementById('money-total').innerText = totalMon-addMoney + " BDT";
        document.getElementById('money-feni').innerText = noaMon+addMoney + " BDT";

        document.getElementById('donate-feni-input').value="";  
    }
    
})

//Qoata
document.getElementById('donate-qoata-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputValueById('donate-quata-input');
    // console.log(addMoney)

    if(addMoney <= 0  ||  isNaN(addMoney)){
        alert('Try again .. Failed to Add Money');
        document.getElementById('donate-quata-input').value="";
        return;
    }
    else{
        const noaMon = parseFloat(getTextById('money-quata'));
        // console.log(noaMon);
        const totalMon = parseFloat(getTextById('money-total'));
        // console.log(totalMon);
        if(addMoney > totalMon){
            alert('Failed to Add money');
            document.getElementById('donate-quata-input').value="";
            return;
        }
        document.getElementById('money-total').innerText = totalMon-addMoney + " BDT";
        document.getElementById('money-quata').innerText = noaMon+addMoney + " BDT";

        document.getElementById('donate-quata-input').value="";  
    }
    
})

document.getElementById('donate-noakhali-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputValueById('donate-noakhali-input');
    // console.log(addMoney)

    if(addMoney <= 0  ||  isNaN(addMoney)){
        alert('Try again .. Failed to Add Money');
        document.getElementById('donate-noakhali-input').value="";
        return;
    }
    else{
        const noaMon = parseFloat(getTextById('money-noakhali'));
        // console.log(noaMon);
        const totalMon = parseFloat(getTextById('money-total'));
        // console.log(totalMon);
        if(addMoney > totalMon){
            alert('Failed to Add money');
            document.getElementById('donate-noakhali-input').value="";
            return;
        }
        document.getElementById('money-total').innerText = totalMon-addMoney + " BDT";
        document.getElementById('money-noakhali').innerText = noaMon+addMoney + " BDT";

        document.getElementById('donate-noakhali-input').value="";  
    }
    
})



document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donate-container').classList.remove('hidden');
    document.getElementById('history-btn').style.backgroundColor = 'white';
    document.getElementById('donate-btn').style.backgroundColor = '#B4F461';

})

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('donate-btn').style.backgroundColor = 'white';
    document.getElementById('history-btn').style.backgroundColor = '#B4F461';
})