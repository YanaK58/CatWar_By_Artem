//гпт чат сгенерил сохранение имен

function saveText() {
    // Сохраняем клан
    const clan = document.querySelector('input[name="clan"]:checked')?.value;
    localStorage.setItem("clan", clan);

    // Сохраняем пол
    const selectedSex = document.querySelector('input[name="sex"]:checked')?.id;
    let sex;
    if (selectedSex === "male") {
        sex = "Кот";
    } else if (selectedSex === "female") {
        sex = "Кошка";
    } else if (selectedSex === "laminat") {
        sex = "Паркет"; 
    } else {
        sex = "Неизвестно"; 
    }
    localStorage.setItem("sex", sex);

    // Сохраняем имя
    const name = document.getElementById("name_cat").value;
    localStorage.setItem("name", name);

    // Сохраняем родителей
    const mom = document.getElementById("name_mom").value;
    const dad = document.getElementById("name_dad").value;
    localStorage.setItem("mom", mom);
    localStorage.setItem("dad", dad);
}


    const name = localStorage.getItem("name") || "Неизвестно";
    const clan = localStorage.getItem("clan") || "---";
    const sex = localStorage.getItem("sex") || "Не определился";
    const mom = localStorage.getItem("mom") || "Неизвестно";
    const dad = localStorage.getItem("dad") || "Неизвестно";
    let position = "Оруженосец";

//гпт для второй страницы 
window.onload = function() {

    document.getElementById("name_output").innerText = name;
    document.getElementById("clan_output").innerText = clan;
    document.getElementById("sex_output").innerText = sex;
    document.getElementById("mom_output").innerText = mom;
    document.getElementById("dad_output").innerText = dad;
    document.getElementById("status_output"). innerText = position;

};


function showBlock4(){

    window.location.href = "scene.html";
    fillBirthInfo();

}
//ориентауия

let change_summ = 0;
function change_orientacion(){

    //первая - натураль
    if (change_summ == 0){
        //смена всех цветов 
        document.getElementById("o1").style.color = "#000"
        document.getElementById("o2").style.color = "#333"
        document.getElementById("o3").style.color = "#777"
        document.getElementById("o4").style.color = "#aaa"
        document.getElementById("o5").style.color = "#bcbcbc"
        document.getElementById("o6").style.color = "#bcbcbc"
        document.getElementById("o7").style.color = "#aaa"
        document.getElementById("o8").style.color = "#777"
        document.getElementById("o9").style.color = "#333"
        document.getElementById("o10").style.color = "#000"

       change_summ += 1; 
    } else if(change_summ == 1){
        
        //
        document.getElementById("o1").style.color = "#FF2605"
        document.getElementById("o2").style.color = "#F86217"
        document.getElementById("o3").style.color = "#FF8B0F"
        document.getElementById("o4").style.color = "#FEE04D"
        document.getElementById("o5").style.color = "#79FC33"
        document.getElementById("o6").style.color = "#18D22E"
        document.getElementById("o7").style.color = "#24ECF7"
        document.getElementById("o8").style.color = "#3ABBFC"
        document.getElementById("o9").style.color = "#1E0AB5"
        document.getElementById("o10").style.color = "#7600BF"

       change_summ += 1; 
    } else if (change_summ == 2){
        //
        document.getElementById("o1").style.color = "#DA430D"
        document.getElementById("o2").style.color = "#DA430D"
        document.getElementById("o3").style.color = "#F78D42"
        document.getElementById("o4").style.color = "#FEAC72"
        document.getElementById("o5").style.color = "#FFD697"
        document.getElementById("o6").style.color = "#FFE6E9"
        document.getElementById("o7").style.color = "#FAA5CA"
        document.getElementById("o8").style.color = "#F271B1"
        document.getElementById("o9").style.color = "#D02892"
        document.getElementById("o10").style.color = "#96136F"

       change_summ += 1; 
    } else if (change_summ == 3){
        //
        document.getElementById("o1").style.color = "#EB2C8C"
        document.getElementById("o2").style.color = "#EB2C8C"
        document.getElementById("o3").style.color = "#EB2C8C"
        document.getElementById("o4").style.color = "#9465B6"
        document.getElementById("o5").style.color = "#9465B6"
        document.getElementById("o6").style.color = "#9465B6"
        document.getElementById("o7").style.color = "#9465B6"
        document.getElementById("o8").style.color = "#2B3CC0"
        document.getElementById("o9").style.color = "#2B3CC0"
        document.getElementById("o10").style.color = "#2B3CC0"

       change_summ += 1; 

    } else if (change_summ == 4){
        //
        document.getElementById("o1").style.color = "#030303"
        document.getElementById("o2").style.color = "#030303"
        document.getElementById("o3").style.color = "#A1A1A1"
        document.getElementById("o4").style.color = "#A1A1A1"
        document.getElementById("o5").style.color = "#A1A1A1"
        document.getElementById("o6").style.color = "#EDE9E9"
        document.getElementById("o7").style.color = "#EDE9E9"
        document.getElementById("o8").style.color = "#821E7E"
        document.getElementById("o9").style.color = "#821E7E"
        document.getElementById("o10").style.color = "#821E7E"

       change_summ = 0; 
        
    }
}


//открытие - закрытие профиля 
function open_profile() {
    event.preventDefault();

    document.getElementById("profile-content").style.display = "flex";
}

function close_profile(){
    event.preventDefault();
    
    document.getElementById("profile-content").style.display = "none";
    document.getElementById("profile_btn").style.display = "flex";
    document.getElementById("profile").style.border = "none"
}

function open_history() {
    event.preventDefault();
    document.getElementById("history").style.display = "flex"
}

function close_history() {
    event.preventDefault();
    document.getElementById("history").style.display = "none"
}

function open_inventar() {
    event.preventDefault();
    document.getElementById("inventar").style.display = "flex"
}

function close_inventar() {
    event.preventDefault();
    document.getElementById("inventar").style.display = "none"
}

//модальные окна
function openModal(){
    event.preventDefault();
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    event.preventDefault();
    document.getElementById("modal").style.display = "none";
}


