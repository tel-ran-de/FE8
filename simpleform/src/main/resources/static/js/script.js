let addRowToDataTable = function (item) {
   let row = '<tr>';
   Object.keys(item).forEach(field => {
      row += '<td>'+ item[field] +'</td>'
   });
   row += "/tr";
   $('table tbody').append(row);
};

/*let deleteRowFromDataTable = function (item) {
   let row = '<tr>';
   Object.keys(item).forEach(field => {
      row += '<td>'+ item[field] +'</td>'
   });
   row += "/tr";
   $('table tbody').delete(row);
};*/

let createClickEventHandlerForDataRow = function (id, url) {
   return function(event) {
      $.ajax({
         url: url + '/' + id,
         method: "get",
         success: function(item) {
            Object.keys(item).forEach(field => {
               $('form [name='+ field +']').val(item[field]);
            });
         }
      });
   }
};

let updateDataTable = function (url) {
   $.ajax({
      url: url,
      method: "get",
      success: function(data) {
         $('table tbody').html('');
         data.forEach((item, id) => {
            addRowToDataTable(item);
            $('table > tbody > tr:last-child').click(createClickEventHandlerForDataRow(id, url));
         });
      }
   });
};

let addCRUDFunctionality = function (formId, url) {
   updateDataTable(url);

   $(formId).submit(function(event) {
      event.preventDefault();
      const form = $(this);

      $.ajax({
         url: url,
         method: "post",
         data: form.serialize(),
         success: function(data) {
            const alert = $('form + div.alert');
            alert.text(data);
            updateDataTable(url);
            alert.fadeIn(500, function(){
               setTimeout(function(){
                  alert.fadeOut();
               }, 2000)
            });
            form[0].reset();
         }
      });
   });
};

$(document).ready(function(){
   addCRUDFunctionality ('petForm', "/petApi/pet");
});
