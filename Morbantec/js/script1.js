function calc(){
    var w = document.getElementById("Width").value;
    var h = document.getElementById("Hight").value;

    var area = w * h;
    document.getElementById("answer").value = area;
}