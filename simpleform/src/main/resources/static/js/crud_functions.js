function addCrudFunctions(formCssSelector, tableCssSelector) {

    const url = $(formCssSelector)[0].action;

    let addRowToTable = function (item) {
        let row = '<tr>';
        Object.keys(item).forEach(field => {
            row += '<td>'+ item[field] +'</td>'
        });
        row += "/tr";
        $(tableCssSelector + ' tbody').append(row);
    };

    let createClickEventHandlerForRow = function (id) {
        return function(event) {
            $.ajax({
                url: url + "/" + id,
                method: "get",
                success: function(item) {
                    Object.keys(item).forEach(field => {
                        $(formCssSelector + ' [name='+ field +']').val(item[field]);
                    });
                }
            });
        }
    };

    let updateTable = function () {
        $.ajax({
            url: url,
            method: "get",
            success: function(data) {
                $(tableCssSelector + ' tbody').html('');
                data.forEach((item, id) => {
                    addRowToTable(item);
                    $(tableCssSelector + ' > tbody > tr:last-child').click(createClickEventHandlerForRow(id));
                });
            }
        });
    };

    let addDivAlert = function() {
        $('<div class="alert alert-info" role="alert"></div>').insertAfter(formCssSelector);
    };

    let createTable = function() {
        let body = document.getElementsByTagName("body")[0];
        let tbl = document.createElement('table');
        body.appendChild(tbl);
        let tblHead = document.createElement('thead');
        let tblBody = document.createElement("tbody");
        tbl.appendChild(tblHead);
        tbl.appendChild(tblBody);
        let headRow = document.createElement('tr');
        tblHead.appendChild(headRow);

        let labels = formCssSelector.querySelectorAll('label');
        for (let i = 0; i < labels.length; i++) {
            let headCell = document.createElement('th');
            headCell.innerHTML = labels[i];
            headRow.appendChild(headCell);
        }
    };

    createTable();

    addDivAlert();

    updateTable();

    $(formCssSelector).submit(function(event) {
        event.preventDefault();
        const form = $(this);

        $.ajax({
            url: url,
            method: "post",
            data: form.serialize(),
            success: function(data) {
                const alert = $(formCssSelector + ' + div.alert');
                alert.text(data);
                updateTable();
                alert.fadeIn(500, function(){
                    setTimeout(function(){
                        alert.fadeOut();
                    }, 2000)
                });
                form[0].reset();
            }
        });
    });
}
