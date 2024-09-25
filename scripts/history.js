

document.getElementById('donate-noakhali-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById('donate-noakhali-input').value);
    console.log(addMoney);
    if(addMoney>0){
     //   console.log('hello');
        
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


document.getElementById('donate-feni-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById('donate-feni-input').value);
    console.log(addMoney);
    if(addMoney>0){
       // console.log('hello');
        
        const bap = document.getElementById('history-container');

        const div = document.createElement('div');
        div.classList.add('border', 'border-[1px]', 'rounded-2xl', 'p-8', 'mb-6');

        const para = document.createElement('p');
        para.classList.add('font-bold', 'text-black', 'mb-4', 'text-base', 'md:text-xl');
        para.innerText = addMoney + ' Taka is Donated for Flood Relief in Feni,Bangladesh';

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


document.getElementById('donate-qoata-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById('donate-quata-input').value);
    console.log(addMoney);
    if(addMoney>0){
       // console.log('hello');
        
        const bap = document.getElementById('history-container');

        const div = document.createElement('div');
        div.classList.add('border', 'border-[1px]', 'rounded-2xl', 'p-8', 'mb-6');

        const para = document.createElement('p');
        para.classList.add('font-bold', 'text-black', 'mb-4', 'text-base', 'md:text-xl');
        para.innerText = addMoney + ' Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh';

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