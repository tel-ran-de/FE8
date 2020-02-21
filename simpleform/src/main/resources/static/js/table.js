$(document).ready(function () {
createTable();

});

function createTable(){
    $('body').append('<table />');

    for (i = 0; i < 3; i++) {
        $('body table').append('<tr><td>' + 'result' + i + '</td></tr>');
    }
}
