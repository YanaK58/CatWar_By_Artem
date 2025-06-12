let cat_name = '';
let name_mom = '';
let name_dad = '';
//имя оруженосца
let name_or ='';

let clan_1 = " Грозовое племя";
let clan_2 = " Речное племя";
let clan_3 = " племя Ветра";
let clan_4 = " племя Теней";

function saveText (){
    cat_name = document.getElementById('name_cat').value;
    name_mom = document.getElementById('name_mom').value;
    name_dad = document.getElementById('name_dad').value;
    document.getElementById('name_output').innerText = cat_name;
    document.getElementById('mom_output').innerText = name_mom;
    document.getElementById('dad_output').innerText = name_dad;
}


function saveName(){
    name_or = document.getElementById('name_or').value; //сохраняет инпут в переменную
    document.getElementById('name_or_output').innerText = name_or; //выводит текст или переменную в элемент
}

function saveClan(){
    event.preventDefault();
    const thunderClan = document.getElementById("ThunderClan");
    const riverClan = document.getElementById("RiverClan");
    const windClan = document.getElementById("WindClan");
    const shadowClan = document.getElementById("ShadowClan");

    if (thunderClan.checked){
        console.log("hi");
        document.getElementById("clan_output").innerText = "Грозовое племя";

    } else if (riverClan.checked){
        console.log("river");
        document.getElementById("clan_output").innerText = " Речное племя";

    } else if(windClan.checked){
        console.log("wind");
        document.getElementById("clan_output").innerText = " племя Ветра";

    } else if (shadowClan.checked){
        console.log("shadow");
        document.getElementById("clan_output").innerText = " племя Теней";
    
    }
}



function showBlock3(){
    event.preventDefault();
    document.getElementById('S_1').style.display ='none';
    document.getElementById('S_2').style.display ='none';
    document.getElementById('S_3').style.display ='flex';
}

function showBlock4(){
    event.preventDefault();
    document.getElementById('S_3').style.display ='none';
    document.getElementById('S_4').style.display = 'flex';
}

function showBlock5(){
    event.preventDefault();
    document.getElementById('S_4').style.display = 'none';
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('S_5').style.display = 'flex';
}

function showBlock6(){
    event.preventDefault();
    document.getElementById('S_5').style.display = 'none';
    document.getElementById('S_6').style.display = 'flex';

}

function showBlock7(){
    event.preventDefault();
    document.getElementById('S_6').style.display = 'none';
    document.getElementById('S_7').style.display = 'flex';
}

function showBlock8(){
    event.preventDefault();
    document.getElementById('S_6').style.display = 'none';
    document.getElementById('S_8').style.display = 'flex';
}

function showBlock2(){
    event.preventDefault();
    document.getElementById('S_8').style.display = 'none';
    document.getElementById('S_7').style.display = 'none';
    document.getElementById('S_2').style.display = 'flex';
}

// Получаем элементы
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");


// Открытие модального окна
btn.onclick = function () {
  modal.style.display = "block";
}





