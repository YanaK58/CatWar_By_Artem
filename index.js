//гпт чат сгенерил сохранение имен

function saveText() {
    // Сохраняем клан
    const clan = document.querySelector('input[name="clan"]:checked')?.value;
    localStorage.setItem("clan", clan);

    // Сохраняем пол
    const sex = document.querySelector('input[name="sex"]:checked')?.id === "male" ? "Кот" : "Кошка";
    localStorage.setItem("sex", sex);

    // Сохраняем имя
    const name = document.getElementById("name_cat").value;
    localStorage.setItem("name", name);

    // Сохраняем родителей
    const mom = document.getElementById("name_mom").value;
    const dad = document.getElementById("name_dad").value;
    localStorage.setItem("mom", mom);
    localStorage.setItem("dad", dad);

    // Сохраняем дополнительных родственников
    const relatives = [];
    for (let i = 1; i <= 3; i++) {
        const nameInput = document.getElementById(`name_fam${i}`);
        const statusInput = document.getElementById(`status_fam${i}`);
        if (nameInput && statusInput) {
            relatives.push({ name: nameInput.value, status: statusInput.value });
        }
    }
    localStorage.setItem("relatives", JSON.stringify(relatives));
}


    const name = localStorage.getItem("name") || "Неизвестно";
    const clan = localStorage.getItem("clan") || "---";
    const sex = localStorage.getItem("sex") || "Не определился";
    const mom = localStorage.getItem("mom") || "Неизвестно";
    const dad = localStorage.getItem("dad") || "Неизвестно";
    const relatives = JSON.parse(localStorage.getItem("relatives") || "[]");
//гпт для второй страницы 
window.onload = function() {

    


    document.getElementById("name_output").innerText = name;
    document.getElementById("clan_output").innerText = clan;
    document.getElementById("sex_output").innerText = sex;
    document.getElementById("mom_output").innerText = mom;
    document.getElementById("dad_output").innerText = dad;
    document.getElementById("status_output"). innerText = position;

/*
    const spans = document.querySelectorAll(".profile-content span");
    spans[0].textContent = name;
    spans[1].textContent = clan;
    spans[2].textContent = "Котёнок"; // Начальный статус
    spans[3].textContent = sex;
    spans[4].textContent = mom;
    spans[5].textContent = dad;
*/

    // Родственники
    const container = document.getElementById("extra-relatives-container");
    container.innerHTML = ""; // очищаем перед вставкой

    for (let i = 0; i < relatives.length; i++) {
        const relative = relatives[i];
        if (relative && relative.name.trim() !== "" && relative.status.trim() !== "") {
            const p = document.createElement("p");
            p.textContent = `${relative.status}: ${relative.name}`;
            container.appendChild(p);
        }
    }

};


//для блока 3 
function fillBirthInfo() {
    document.getElementById("clan_output").innerText = localStorage.getItem("clan");
    document.getElementById("name_output").innerText = localStorage.getItem("name");
    document.getElementById("mom_output").innerText = localStorage.getItem("mom");
}





//добавить родственника
add_summ = 0
function add(){
    if (add_summ == 0){
        document.getElementById("add_relative").innerHTML = ' <input type="text" id="status_fam1" placeholder="Кем приходится"> <input type="text" id="name_fam1" placeholder="Имя">';
        add_summ += 1;
    } else if (add_summ == 1){
        document.getElementById("add_relative").innerHTML = ' <input type="text" id="status_fam1" placeholder="Кем приходится"> <input type="text" id="name_fam1" placeholder="Имя"> <input type="text" id="status_fam1" placeholder="Кем приходится"> <input type="text" id="name_fam1" placeholder="Имя">';
        add_summ += 1;
    } else if (add_summ == 2){
        document.getElementById("add_relative").innerHTML = '<input type="text" id="status_fam1" placeholder="Кем приходится"> <input type="text" id="name_fam1" placeholder="Имя"> <input type="text" id="status_fam1" placeholder="Кем приходится"> <input type="text" id="name_fam1" placeholder="Имя"> <input type="text" id="status_fam1" placeholder="Кем приходится"> <input type="text" id="name_fam1" placeholder="Имя">';
        add_summ += 1;
    } else {
        document.getElementById("add").style.display = "none";
        alert("Вы достигли лимита добавленных родственников");
        
    }
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
        document.getElementById("o1").style.color = "#FF57A8"
        document.getElementById("o2").style.color = "#FF57A8"
        document.getElementById("o3").style.color = "#FF57A8"
        document.getElementById("o4").style.color = "#FFD328"
        document.getElementById("o5").style.color = "#FFD328"
        document.getElementById("o6").style.color = "#FFD328"
        document.getElementById("o7").style.color = "#FFD328"
        document.getElementById("o8").style.color = "#008EF5"
        document.getElementById("o9").style.color = "#008EF5"
        document.getElementById("o10").style.color = "#008EF5"

       change_summ += 1;
        
    }else if (change_summ == 5){
        //
        document.getElementById("o1").style.color = "#FF84A4"
        document.getElementById("o2").style.color = "#FF84A4"
        document.getElementById("o3").style.color = "#A1C8F3"
        document.getElementById("o4").style.color = "#FF84A4"
        document.getElementById("o5").style.color = "#FF84A4"
        document.getElementById("o6").style.color = "#A1C8F3"
        document.getElementById("o7").style.color = "#FF84A4"
        document.getElementById("o8").style.color = "#FF84A4"
        document.getElementById("o9").style.color = "#A1C8F3"
        document.getElementById("o10").style.color = "#FF84A4"

       change_summ += 1; 
        
    }else if (change_summ == 6){
        //
        document.getElementById("o1").style.color = "#FF54AB"
        document.getElementById("o2").style.color = "#FF54AB"
        document.getElementById("o3").style.color = "#FF54AB"
        document.getElementById("o4").style.color = "#28DB7D"
        document.getElementById("o5").style.color = "#28DB7D"
        document.getElementById("o6").style.color = "#28DB7D"
        document.getElementById("o7").style.color = "#28DB7D"
        document.getElementById("o8").style.color = "#008EF0"
        document.getElementById("o9").style.color = "#008EF0"
        document.getElementById("o10").style.color = "#008EF0"

       change_summ += 1; 
        
    } else if (change_summ == 7){
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

       change_summ += 1; 
        
    } else if (change_summ == 8){
        //
        document.getElementById("o1").style.color = "#70C492"
        document.getElementById("o2").style.color = "#70C492"
        document.getElementById("o3").style.color = "#B6E6CC"
        document.getElementById("o4").style.color = "#B6E6CC"
        document.getElementById("o5").style.color = "#EDE9E9"
        document.getElementById("o6").style.color = "#EDE9E9"
        document.getElementById("o7").style.color = "#ECB0C9"
        document.getElementById("o8").style.color = "#ECB0C9"
        document.getElementById("o9").style.color = "#DF3D6C"
        document.getElementById("o10").style.color = "#DF3D6C"

       change_summ += 1; 
        
    } else if (change_summ == 9){
        //
        document.getElementById("o1").style.color = "#E1EB01"
        document.getElementById("o2").style.color = "#E1EB01"
        document.getElementById("o3").style.color = "#E1EB01"
        document.getElementById("o4").style.color = "#EDE9E9"
        document.getElementById("o5").style.color = "#EDE9E9"
        document.getElementById("o6").style.color = "#9555CF"
        document.getElementById("o7").style.color = "#9555CF"
        document.getElementById("o8").style.color = "#9555CF"
        document.getElementById("o9").style.color = "#030408"
        document.getElementById("o10").style.color = "#030408"

       change_summ += 1; 

    }else if (change_summ == 10){
        //
        document.getElementById("o1").style.color = "#FF87AA"
        document.getElementById("o2").style.color = "#FF87AA"
        document.getElementById("o3").style.color = "#EDE9E9"
        document.getElementById("o4").style.color = "#EDE9E9"
        document.getElementById("o5").style.color = "#D85CE4"
        document.getElementById("o6").style.color = "#D85CE4"
        document.getElementById("o7").style.color = "#030408"
        document.getElementById("o8").style.color = "#030408"
        document.getElementById("o9").style.color = "#233FBD"
        document.getElementById("o10").style.color = "#233FBD"

       change_summ = 0; 
    }
}

/*
        //
        document.getElementById("o1").style.color = "#"
        document.getElementById("o2").style.color = "#"
        document.getElementById("o3").style.color = "#"
        document.getElementById("o4").style.color = "#"
        document.getElementById("o5").style.color = "#"
        document.getElementById("o6").style.color = "#"
        document.getElementById("o7").style.color = "#"
        document.getElementById("o8").style.color = "#"
        document.getElementById("o9").style.color = "#"
        document.getElementById("o10").style.color = "#"

       change_summ += 1; 
*/


//открытие - закрытие профиля 
function open_profile() {
    event.preventDefault();

    document.getElementById("profile-content").style.display = "flex";
    document.getElementById("profile_btn").style.display = "none";
    document.getElementById("profile").style.border = " #333 2px solid"
}

function close_profile(){
    event.preventDefault();
    
    document.getElementById("profile-content").style.display = "none";
    document.getElementById("profile_btn").style.display = "flex";
    document.getElementById("profile").style.border = "none"
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

function showBlock3(){
    event.preventDefault();
    console.log('showBlock3 работает!');
    document.getElementById('S_2').style.display ='none';
    document.getElementById('S_3').style.display ='flex';
    fillBirthInfo();
}

function showBlock4(){

    window.location.href = "life.html";
    fillBirthInfo();

}


//должность
let position = "Котёнок"

//счетчик для переключения должностей 
let action_summ = 0;

//до должности осталось 
let apprentice = 5;
let warrior = 5;
let star = 5;

//кнопочки стать ....
function toBecomeAppre(){
    console.log("come appre");
    
    position = "Оруженосец";
    document.getElementById("status_output").innerText = position;

    //смена имени
    const appre_name = prompt("Меня посвятят в оруженосцы. Какое будет мое новое имя? Оставь пустым если хочешь оставить предыдущее")
    if ( appre_name) {
        alert("Твоё новое имя: " + appre_name);
        document.getElementById("name_output").innerText = appre_name;
    }

    //скрывание остальных частей
    document.getElementById("kitty").style.display = "none";
    document.getElementById("apprentice").style.display = "block";

    document.getElementById("toBecomeAppre").style.display ="none";
    document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
    document.getElementById("h2").innerText = "Мне доступны действия: "
}

function toBecomeWarr(){
    console.log("come warrior");
    position = "Воитель";
    document.getElementById("status_output").innerText = position;

    //смена имени
    const warr_name = prompt("Меня посвятят в Воители. Какое будет мое новое имя? Оставь пустым если хочешь оставить предыдущее")
    if ( warr_name) {
        alert("Твоё новое имя: " + warr_name);
        document.getElementById("name_output").innerText = warr_name;
    }

    //скрывание остальных частей
    document.getElementById("apprentice").style.display = "none";
    document.getElementById("warrior").style.display = "block";


    document.getElementById("toBecomeWarr").style.display ="none";
    document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
    document.getElementById("h2").innerText = "Мне доступны действия: "
}

function toBecomeStar(){
    console.log("come star");
    position = "Звёздный предок";
    document.getElementById("status_output").innerText = position;
    //скрывание остальных частей
    document.getElementById("warrior").style.display = "none";
    document.getElementById("star").style.display = "block";
    document.getElementById("toBecomeKitty").style.display = "block"

    document.getElementById("toBecomeStar").style.display ="none";
    document.getElementById("h2").innerText = "Мне доступны действия: "
    document.getElementById("summ").style.display ="none";
}


function newLive(){
    location.reload();
    localStorage.clear();
}


//страницчка жизни 
//действия котенок

function drink (){
    event.preventDefault();
    console.log('работает!');
    document.getElementById("h2").innerText = "Я попил молока";
    action_summ += 1;
    document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
    //появлкние кнопочек   "Сейчас мне: " + (apprentice - action_summ) + " лун"
    if(action_summ >= 6){
        document.getElementById("toBecomeAppre").style.display = "flex";
    }
}

function sleep (){
    event.preventDefault();
    console.log('работает!');
    document.getElementById("h2").innerText = "Я учтроился в удобной подстилке из мха и лисьтев и провалился в сон. Что же мне сегодня присниться?";
    action_summ += 1;
    document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
    //появлкние кнопочек 
    if(action_summ >= 6){
        document.getElementById("toBecomeAppre").style.display = "flex";
    }
}

function play (){
    event.preventDefault();
    console.log('работает!');
    document.getElementById("h2").innerText = "Я начал пытаться поймать свой хвост. Почему он вечно от меня убегает?";
    action_summ += 1;
    document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
    //появлкние кнопочек 
    if(action_summ >= 6){
        document.getElementById("toBecomeAppre").style.display = "flex";
    }
}
let relationship = false;

//действия оруженосца
function hunt(){
    event.preventDefault();
    document.getElementById("h2").innerText = "Нужно пойти наловить жестяных полёвок для племни!";
    
    if (position == "Оруженосец"){
            

            action_summ += 1;
            document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
            //появлкние кнопочек 
            if( action_summ >= 8 & relationship == false ){
                document.getElementById("relationship").style.display = "flex"
                relationship = true;
                if (sex == "Кот"){
                    alert ("Я уже достаточно взрослый что бы заводить отношения")
                } else {
                    alert ("Я уже достаточно взрослая что бы заводить отношения")
                } 
            }else if(action_summ >= 12){
                document.getElementById("toBecomeWarr").style.display = "flex";
            
            }
            
            
    } else{
        document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
        action_summ += 10;
        document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
            //появлкние кнопочек 
            if(action_summ >= 100){
                    document.getElementById("toBecomeStar").style.display = "flex";
            }
            
    }
}

function train(){
    event.preventDefault();
    document.getElementById("h2").innerText = "Надо больше тренироваться и тогда я стану сильнее";
    

    if (position == "Оруженосец"){
        action_summ += 1;
        document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
                 //появлкние кнопочек 
                if( action_summ >= 8 & relationship == false ){
                document.getElementById("relationship").style.display = "flex"
                relationship = true;
                if (sex == "Кот"){
                    alert ("Я уже достаточно взрослый что бы заводить отношения")
                } else {
                    alert ("Я уже достаточно взрослая что бы заводить отношения")
                } 
            }else if(action_summ >= 12){
                document.getElementById("toBecomeWarr").style.display = "flex";
            
            }
    } else{
        action_summ += 10;
        document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
            //появлкние кнопочек 
            if(action_summ >= 100){
                document.getElementById("toBecomeStar").style.display = "flex";
            }
    }
}

//действия воителя
function patrol(){
    event.preventDefault();
    document.getElementById("h2").innerText = "Отправлюсь ка я проверить границы нашего племени";
    action_summ += 10;
    document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
    //появлкние кнопочек 
    if(action_summ >= 100){
        document.getElementById("toBecomeStar").style.display = "flex"
    }
}

function dream(){
    event.preventDefault();
    document.getElementById("h2").innerText = "Увидел сон. Почему мне сянтся голубые мужики? Что звёздное племя хочет мне этим сказать? ...";
    action_summ += 10;
    document.getElementById("summ").innerText = "Сейчас мне: " +  action_summ + " лун";
    //появлкние кнопочек 
    if(action_summ >= 100){
        document.getElementById("toBecomeStar").style.display = "flex"
    }
}

//действия звездного племени 
function depression(){
    event.preventDefault();
    document.getElementById("h2").innerText = "*Впал в депресиию изза того что умер*";
}

//действиe "найти пару"
//id="relationship" onclick="tinder()"
function tinder() {}

////////////////////////////////////////////////////////////////////

/*
// Получаем элементы
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");


// Открытие модального окна
btn.onclick = function () {
  modal.style.display = "block";
}
  */



