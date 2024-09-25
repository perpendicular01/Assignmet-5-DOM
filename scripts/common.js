function getInputValueById(id){
    const addMoney = parseFloat(document.getElementById(id).value);
    return addMoney;

}

function getTextById(id){
    const addMoney = parseFloat(document.getElementById(id).innerText);
    return addMoney;

}

function modelShow(){
    const confirModel = document.getElementById('confir-container');
    confirModel.showModal();
}