i = 5;
color = ["black", "black", "black", "red", "red", "red", "black", "black"]

function changeColor() {
    $('#0').css('color', color[i]);
    $('#1').css('color', color[i + 1]);
    $('#2').css('color', color[i + 2]);
    i--;
    if (i == -1) {
        i = 5;
    }
}

setInterval(changeColor, 10000);

var list = [];

function init() {
    for (var i = 0; i < 3; i++)
        list[i] = $('#' + i).html();
}

function reverse() {
    var string = "";
    for (var i = 2; i >= 0; i--)
        string += list[i] + '\n';
    alert(string);
}

init()
