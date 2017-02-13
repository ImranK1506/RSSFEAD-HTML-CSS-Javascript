// add daybreak
var today = new Date();
var hour = today.getHours();
var greeting;

if (hour >= 18) {	
	greeting = "Good evening!";
}else if (hour >= 12) {
	greeting = "Good afternoon!";
}else if (hour >= 0) {
	greeting = "Good morning!";
}else {
	greeting = "Welcome!";
}
	
document.write('<center>' + '<h2 class="greeting" style=\"font-size:60px; font-family:Brush Script MT", cursive;\">' + greeting + '</h2>' + '</center>');

// Timeclock
function startTime() {
var today = new Date();
    
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = isAMorPM(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = 'The current time is' + " " + '<i>'+ h + ":" + m + ":" + s  + " - " + ampm + '</i>';
    setTimeout(startTime, 1000);
}

function isAMorPM(i) {
	var val;
	if (i >= 12) {
		val = "PM"
	} else {
	 	val = "AM"
}
return val;
}

// add zero in front
function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}







