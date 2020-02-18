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
