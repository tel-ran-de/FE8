$(document).ready(function () {
    addCrudFunctions('#form1', '#table1');

    createDiv('#form1', '#alert1');
    createTable('#alert1', '#table1');
});

function createDiv(formCssSelector, alertCssSelector) {
// Добавление нового элемента на страницу.

    let $myNewElement = $('<div></div>')
        .addClass("alert alert-info")
        .attr('id', alertCssSelector)
        .attr('role-data', 'alert');
    $myNewElement.insertAfter(formCssSelector);
}

function createTable(alertCssSelector, tableSccSelector) {
    let $myNewElement = $('table')
        .addClass('table')
        .attr('id', tableSccSelector);

    function addRowToTable(item) {
        let row = '<tr>';
        Object.keys(item).forEach(field => {
            row += '<td>' + item[field] + '</td>'
        });
        row += "/tr";
        $(tableCssSelector + ' tbody').append(row);
    };

    $myNewElement.insertAfter(alertCssSelector);
}