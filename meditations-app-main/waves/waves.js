const buttonDuration = document.querySelector("#btn"); // доступ к кнопке длительность
buttonDuration.addEventListener("click", showDuration); // показать список длительности после клика по кнопке, вызовет функцию

let timerID;
const buttonTwo = document. querySelector("#btnTwo")// доступ к кнопке установить
buttonTwo.addEventListener('click', function(){
    set();
    buttonTwo.style.display ="none";//прячем унопку установить


})

function showDuration(e) { // функция для показа длительности
  e.preventDefault(); // также используем команду, чтобы страница не перезагружалась и инфа не исчезала
  duration.style.display = "block"; // показываем список длительности
  buttonTwo.style.display = "block"; // показываем кнопку установить
}

let amountTime = 0;

//функция установки времени таймера
function set(){
const timer = Number(document.querySelector('#duration').value);// минуты
amountTime = timer*60-1; //переменная(т.к. время меняется) общий счет времени переведен в секунды(если добавить -1, то отсчет будет минус одна секунда)
play.style.display = "flex";
countdown.style.display = "flex";
duration.style.display = "none";


//условия для подстановки цифры "0" в табло таймера при установке времени
if(timer < 10){
document.querySelector("#countdown").textContent = "0" + timer + " : 00";
}
if (timer >= 10){
    document.querySelector("#countdown").textContent = timer + " : 00";
}

stopTimer();
// audio.pause(); если нужно, чтобы при новой установке времени аудио выключалось


}

const countdown = document.querySelector("#countdown"); // создаем константу с доступом в поле html где у нас должен отображаться таймер
const button = document.querySelector('#myButton'); // доступ к кнопке
const audio = document.querySelector('#myAudio');// константа доступ к аудио


button.addEventListener('click', playMusic);// включение и выключение аудио при нажатии на кнопку звука
function playMusic(){
    if(audio.paused){
        audio.play();
    }

    else {audio.pause();
 }
}

const buttonPlay = document.querySelector('#play'); //доступ к кнопке play и функция, которая страбатывает на нажатие
buttonPlay.addEventListener("click", function() {
    timerID = setInterval(timerStart, 1000);
    audio.play();
    duration.style.display = "none";
    

})


const buttonStop = document.querySelector('#pause'); //доступ к кнопке pause и функция, которая страбатывает на нажатие
buttonStop.addEventListener("click", function() {
    stopTimer();
    audio.pause();
    
});

// функция запуска таймера
function timerStart() {
    play.style.display = "none";
    pause.style.display = "flex";
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    
   
// условия отображения времени при работающем таймере с подстановкой ноля
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

//отображение течения времени для пользователя
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;


    //после истечения времени таймер продолжает минусовой отсчет, мы скрываем это для пользователя
    if(amountTime < 0) {
        amountTime = 0;
        audio.pause();
        pause.style.display = "none";
    
        clearInterval(timerID);// здесь также нужен, чтобы можно было включать/выключать звук и после остановки таймера
     }


}

// функция остановки таймера
function stopTimer() {
    play.style.display = "flex";
    pause.style.display = "none";
    clearInterval(timerID); // здесь также нужен, чтобы можно было переустанавливать время таймера и запуск начинался только после нажатия кнопки play
    

    }

// clearInterval(timerID); работает если оставить хотя бы один из них на остановку таймера, не важно где он, но описанный функционал работает как нужно только если их два, как сейчас


