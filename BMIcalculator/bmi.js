/* function calculateBmi() {
    var tezina = document.bmiForm.tezina.value
    var visina = document.bmiForm.visina.value
    if (tezina > 0 && visina > 0) {
        var finalBmi = tezina / (visina / 100 * visina / 100);
        // finalBmi = Math.round(finalBmi*1000) / 1000;
        finalBmi = finalBmi.toFixed(2);

        document.bmiForm.bmi.value = finalBmi
        if (finalBmi < 18.5) {
            document.bmiForm.meaning.value = "Потхрањеност."
        }
        if (finalBmi > 18.5 && finalBmi < 25) {
            document.bmiForm.rezultat.value = "Нормална тјелесна тежина"
        }
        if (finalBmi > 25) {
            document.bmiForm.rezultat.value = "Вишак килограма."
        }
    }


    else {
        alert("Молимо испуните сва поља")
    }
}

*/

function calculateBmi() {

    var nTezina = Number(document.bmiForm.tezina.value);
    var nVisinaCentimentri = Number(document.bmiForm.visina.value);
    var txtPoruka = "ra";


    if (nTezina > 0 && nVisinaCentimentri > 0) {


        var nVisinaMetri = nVisinaCentimentri / 100;

        var finalBmi = (nTezina / Math.pow(nVisinaMetri, 2)).toFixed(2);
        switch (true) {
            case finalBmi < 18.5:
                 txtPoruka = "Потхрањеност.";
                break;
            case (finalBmi > 18.5) && (finalBmi < 25.0):
                txtPoruka = "Нормална тјелесна тежина.";
                break;
            case finalBmi > 25.0:
                txtPoruka = "Вишак килограма.";
                break;
            default: "."
        }
        document.bmiForm.rezultat.value = txtPoruka;
        document.bmiForm.bmi.value = finalBmi;

    }
}
