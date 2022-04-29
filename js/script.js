function reaction() {
    document.getElementById("eT").style.fontSize = "40px";
}
function reaction1() {
    document.getElementById("eT1").innerHTML = "";
}
function reaction2() {
    document.getElementById("eT2").innerHTML = "Надеюсь, все поняли!!!???";
}
function rez() {
    var text;
    var rezultat = prompt("2+2*2");
    if (rezultat==6) {text = "Правильно, молодец!";}
    else { text = "НЕПРАВИЛЬНО! Подумай лучше."; }
    document.getElementById("verno").innerHTML = text;
}