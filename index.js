let cat_name = '';
let name_mom = '';
let name_dad = '';
//имя оруженосца
let name_or ='';

let clan_1 = " Грозовое племя";
let clan_2 = " Речное племя";
let clan_3 = " племя Ветра";
let clan_4 = " племя Теней";

//имена из формы
function saveText (){
    cat_name = document.getElementById('name_cat').value;
    name_mom = document.getElementById('name_mom').value;
    name_dad = document.getElementById('name_dad').value;

    localStorage.setItem("myName", cat_name);
    localStorage.setItem("momName", name_mom);
    localStorage.setItem("dadName", name_dad);
}


//какая то хуйня от гпт, пожет поможет 

function fillBirthInfo() {
    const myName = localStorage.getItem("myName");
    const momName = localStorage.getItem("momName");
    const myClan = localStorage.getItem("myClan");

    if (myName) {
        document.getElementById("name_output").textContent = myName;
    }
    if (momName) {
        document.getElementById("mom_output").textContent = momName;
    }
    if (myClan) {
        document.getElementById("clan_output").textContent = myClan;
    }
}


function saveName(){
    name_or = document.getElementById('name_or').value; //сохраняет инпут в переменную
    document.getElementById('name_or_output').innerText = name_or; //выводит текст или переменную в элемент
}

//чек инпуты из анкеты
function saveClan(){

    event.preventDefault();

    let clan = "";

    if (document.getElementById("ThunderClan").checked){
        clan = "Грозовом племени";
    } else if (document.getElementById("RiverClan").checked){
        clan = "Речном племени";
    } else if (document.getElementById("WindClan").checked){
        clan = "племени Ветра";
    } else if (document.getElementById("ShadowClan").checked){
        clan = "племени Теней";
    }

    localStorage.setItem("myClan", clan);
}



function closeModal() {
    event.preventDefault();
    document.getElementById("modal_hi").style.display = "none";
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
    action_summ = 0;
    position = "Оруженосец";
    document.getElementById("position").innerText = position;
    //скрывание остальных частей
    document.getElementById("kitty").style.display = "none";
    document.getElementById("apprentice").style.display = "block";

    document.getElementById("toBecomeAppre").style.display ="none";
    document.getElementById("summ").innerText = "До посвящения осталось: " + (apprentice - action_summ) ;
    document.getElementById("h2").innerText = "Мне доступны действия: "
}

function toBecomeWarr(){
    console.log("come warrior");
    action_summ = 0;
    position = "Воитель";
    document.getElementById("position").innerText = position;
    //скрывание остальных частей
    document.getElementById("apprentice").style.display = "none";
    document.getElementById("warrior").style.display = "block";


    document.getElementById("toBecomeWarr").style.display ="none";
    document.getElementById("summ").innerText = "До попадания в звездное племя осталось: " + (apprentice - action_summ) ;
    document.getElementById("h2").innerText = "Мне доступны действия: "
}

function toBecomeStar(){
    console.log("come star");
    action_summ = 0;
    position = "Звёздный предок";
    document.getElementById("position").innerText = position;
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
    document.getElementById("summ").innerText = "До посвящения осталось: " + (apprentice - action_summ) ;
    //появлкние кнопочек 
    if(action_summ >= apprentice){
        document.getElementById("toBecomeAppre").style.display = "flex";
    }
}

function sleep (){
    event.preventDefault();
    console.log('работает!');
    document.getElementById("h2").innerText = "Я учтроился в удобной подстилке из мха и лисьтев и провалился в сон. Что же мне сегодня присниться?";
    action_summ += 1;
    document.getElementById("summ").innerText = "До посвящения осталось: " + (apprentice - action_summ);
    //появлкние кнопочек 
    if(action_summ >= apprentice){
        document.getElementById("toBecomeAppre").style.display = "flex";
    }
}

function play (){
    event.preventDefault();
    console.log('работает!');
    document.getElementById("h2").innerText = "Я начал пытаться поймать свой хвост. Почему он вечно от меня убегает?";
    action_summ += 1;
    document.getElementById("summ").innerText = "До посвящения осталось: " + (apprentice - action_summ);
    //появлкние кнопочек 
    if(action_summ >= apprentice){
        document.getElementById("toBecomeAppre").style.display = "flex";
    }
}

//действия оруженосца
function hunt(){
    event.preventDefault();
    document.getElementById("h2").innerText = "Нужно пойти наловить жестяных полёвок для племни!";
    action_summ += 1;
    if (position == "Оруженосец"){
           document.getElementById("summ").innerText = "До посвящения осталось: " + (warrior - action_summ);
               //появлкние кнопочек 
                if(action_summ >= warrior){
                    document.getElementById("toBecomeWarr").style.display = "flex";
                }
    } else{
        document.getElementById("summ").innerText = "До попадания в звездное племя осталось: " + (star - action_summ);
            //появлкние кнопочек 
            if(action_summ >= star){
                    document.getElementById("toBecomeStar").style.display = "flex";
            }
            
    }
}

function train(){
    event.preventDefault();
    document.getElementById("h2").innerText = "Надо больше тренироваться и тогда я стану сильнее";
    action_summ += 1;
    if (position == "Оруженосец"){
           document.getElementById("summ").innerText = "До посвящения осталось: " + (warrior - action_summ);
                 //появлкние кнопочек 
                if(action_summ >= warrior){
                    document.getElementById("toBecomeWarr").style.display = "flex";
                }
    } else{
            document.getElementById("summ").innerText = "До попадания в звездное племя осталось: " + (star - action_summ);
            //появлкние кнопочек 
            if(action_summ >= star){
                    document.getElementById("toBecomeStar").style.display = "flex";
            }
    }
}

//действия воителя
function patrol(){
    event.preventDefault();
    document.getElementById("h2").innerText = "Отправлюсь ка я проверить границы нашего племени";
    action_summ += 1;
    document.getElementById("summ").innerText = "До попадания в звездное племя осталось: " + (star - action_summ);
    //появлкние кнопочек 
    if(action_summ >= star){
        document.getElementById("toBecomeStar").style.display = "flex"
    }
}

function dream(){
    event.preventDefault();
    document.getElementById("h2").innerText = "Увидел сон. Почему мне сянтся голубые мужики? Что звёздное племя хочет мне этим сказать? ...";
    action_summ += 1;
    document.getElementById("summ").innerText = "До попадания в звездное племя осталось: " + (star - action_summ);
    //появлкние кнопочек 
    if(action_summ >= star){
        document.getElementById("toBecomeStar").style.display = "flex"
    }
}

//действия звездного племени 
function depression(){
    event.preventDefault();
    document.getElementById("h2").innerText = "*Впал в депресиию изза того что умер*";
}

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




// Если это страница жизни, показать имя
window.onload = function () {
    var clan = localStorage.getItem("myClan");
    var name = localStorage.getItem("myName");
    var mom = localStorage.getItem("momName");
    var dad = localStorage.getItem("dadName");

    // Вставляем данные в HTML
    if (document.getElementById("name_output")) {
        document.getElementById("name_output").textContent = name || "???";
    }
    if (document.getElementById("clan_output")) {
        document.getElementById("clan_output").textContent = clan || "???";
    }
    if (document.getElementById("mom_output")) {
        document.getElementById("mom_output").textContent = mom || "???";
    }
    if (document.getElementById("dad_output")) {
        document.getElementById("dad_output").textContent = dad || "???";
    }
};
