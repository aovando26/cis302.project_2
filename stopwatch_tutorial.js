

let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null; 

document.getElementById("button-start").addEventListener('click', ()=> {
	if(int!==null)	{
		clearInterval(int);
	}
	int = setInterval(displayTimer, 10);
});

document.getElementById("button-stop").addEventListener('click', ()=>{
	clearInterval(int);
});

document.getElementById("button-reset").addEventListener('click', ()=>{
	clearInterval(int); 
	[milliseconds, seconds, minutes, hours] = [0,0,0,0];
	timerRef.innerHTML = '00 : 00 : 00 :000';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
	
	let hr = (hours < 10) ? '0' + hours : hours; 
	let mins = (minutes < 10) ? '0' + minutes : minutes; 
	let secs = (seconds < 10) ? '0' + seconds : seconds; 
	let milli = (milliseconds < 10) ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
	timerRef.innerHTML = ` ${hr} : ${mins} : ${secs} : ${milli}`;
}