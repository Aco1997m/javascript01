$(document).ready(function () {
    var holder = $('#holder');
    var current = 1;
    var loop;

    loop = setInterval(next, 2000);

    function next () {
        current ++;
        if (current === 7) {
            current = 1;
           
        };
        holder.append('<img src="./images/'+current+'.jpg"></img>');
        holder.animate({
            'margin-left': '-=1000'
        }, 1500)
    }

});