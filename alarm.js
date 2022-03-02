const alarmSubmit = document.getElementById('clock');


alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('sound.mp3');
function ringBell(){
    audio.play();
}
function setAlarm(e) {
    
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value) ;
    now = new Date(); 
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() =>{
         ringBell();
        }, timeToAlarm);
    }
}
function clearAlarm(){
    audio.pause();
}
