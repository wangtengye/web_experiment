index = 1;
current = 0;
$(document).ready(function () {
    $('#add').click(add);
    $('#select_all').click(select_all);
    $('#deselect_all').click(deselect_all);
    $('#remove').click(remove);
    $('#save').click(saveToCookie);
});

$(document).keydown(function (event) {
    switch (event.which) {
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
        case 13:
            toggle();
            break;
    }
})

function add() {
    $('#to_do_list').append("<li id='" + index + "i'><input type='checkbox' id='" + index + "'/>"
        + $('#textarea').val() + "<hr></li>")
    index++;
}

function select_all() {

    for (var i = 1; i < index; i++) {
        $('#' + i).attr("checked", true);
    }
}

function deselect_all() {
    for (var i = 1; i < index; i++) {
        $('#' + i).attr("checked", false);
    }
}

function remove() {
    for (var i = 1; i < index; i++) {
        if ($('#' + i).prop("checked")) {
            $('#' + i + 'i').remove();
        }

    }
}

function moveDown() {
    if (current < index - 1)
        current++;
    while ($('#' + current + 'i').length <= 0 && current < index - 1)
        current++;
    console.log(current);
    $('#' + current + 'i').addClass('select')
    $('#' + current + 'i').siblings().removeClass('select');
}

function moveUp() {

    if (current > 1)
        current--;
    while ($('#' + current + 'i').length <= 0 && current > 1)
        current--;
    console.log(current);
    $('#' + current + 'i').addClass('select')
    $('#' + current + 'i').siblings().removeClass('select');
}

function toggle() {
    var isChecked = $('#' + current).prop("checked");
    $('#' + current).attr("checked", !isChecked);
}

function saveToCookie() {
    var array = new Array();
    for (var i = 1; i < index; i++) {
        if ($('#' + i + 'i').length > 0) {
            array.push($('#' + i + 'i').text());
        }
    }
    $.cookie("todo", array);
}