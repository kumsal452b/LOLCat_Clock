var wakeupTime = 7;
var noon = 12;
var lunchtime = 12;
var parttime;
var evening;

var showCurrentTime = function{
    var clock = document.getElementById("clock");

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM"
        hours -= 12;

    }
}