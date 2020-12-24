var wakeupTime = 7;
var noon = 12;
var lunchtime = 12;
var parttime;
var evening;

var showCurrentTime = function(){
    var clock = document.getElementById("clock");

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
        hours -= 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian
    clock.innerHTML = clockTime

    var updateClock = function () {
        var time = new Date().getHours();
        var messageText = "";
        var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

        var timeEventJs = document.getElementById("time");
        var localImageJS = document.getElementById('lolcatImage');
    }

}