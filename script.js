function showCurrentTime() {
	let greeting = document.querySelector('#greeting');
	let afternoon = 12;
	let morning = 1;
	let night = 7;
	let hour = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	let clock = document.querySelector("#clock");
	let meridian = "AM"
	if (hour >= afternoon) {
		meridian = "PM";
		hour -= 12;
	}
	if (hour < 10) {
		hour = `0${hour}`
	}
	if (minutes < 10) {
		minutes = `0${minutes}`
	}
	if (seconds < 10) {
		seconds = `0${seconds}`
	}
	clock.textContent=`${hour} : ${minutes} : ${seconds} ${meridian}`;
	if (hour > morning){
		greeting.innerText = '"Good Morning"';
	}
	if (hour > noon){
		greeting.innerText = '"Good Afternoon"';
	}
	if (hour > nightt){
		greeting.innerText = '"Good Night"';
	}
}
let oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

