var ID = 0;
// var ED = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function printime(){
    document.getElementById("second").innerHTML=seconds
    document.getElementById("minute").innerHTML=minutes
    document.getElementById("hour").innerHTML=hours
    if(seconds==60){
        minutes++;
        seconds=0;
    }

    if(minutes==60){
        hours++;
        minutes=0;

    }


    seconds++;
}


function start(){
    ID = window.setInterval(printime, 1000);
}
function stop(){
    window.clearInterval(ID);
}

function resett (){
    stop();
    minutes=0;
    seconds=0;
    hours=0;
    document.getElementById("hour").textContent="00"
    document.getElementById("second").textContent="00"
    document.getElementById("minute").textContent="00"
}

















// SINGLE VARIABLE--------------------------------------------------------------
// var ID = 0;
// // var ED = 0;
// var seconds = 0;
// // var minutes = 0;

// function printime(){
//     document.getElementById("second").innerHTML=seconds%60;
//     document.getElementById("minute").innerHTML=Math.floor(seconds/60);
    
//     seconds++;
// }

// function start(){
//     ID = window.setInterval(printime, 1000);
// }
// function stop(){
//     window.clearInterval(ID);
// }

// function resett (){
//     stop();
//     minutes=0;
//     seconds=0;
//     document.getElementById("second").textContent="00"
//     document.getElementById("minute").textContent="00"
// }










