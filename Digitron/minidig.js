function izracunaj(operacija) {
    var broj1 = document.getElementById("br1").value;
    var broj2 = document.getElementById("br2").value;
    var rezultat = 0;


     {
        switch (operacija) {
            case 1: rezultat = +broj1 + +broj2;
                break;
            case 2: rezultat = broj1 - broj2;
                break;
            case 3: rezultat = broj1 * broj2;
                break;
            case 4: rezultat = broj1 / broj2;
                break;
        }

        document.getElementById("rez").value = rezultat;
    } 
}