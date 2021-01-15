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
