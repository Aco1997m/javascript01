function clock() {

    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');


    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    if (s.toString().length == 1){
        seconds.innerHTML = "0" + s;
    } else {
        seconds.innerHTML = s;
    }

    if (m.toString().length == 1){
        minutes.innerHTML = "0" + m;
    } else {
        minutes.innerHTML = m;
    }

    hours.innerHTML = h;
    
    

    

}



var interval = setInterval(clock, 1000);
