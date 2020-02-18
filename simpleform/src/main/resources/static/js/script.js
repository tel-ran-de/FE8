let addRowToUserTable = function (user) {
   let row = '<tr>';
   Object.keys(user).forEach(field => {
      row += '<td>'+ user[field] +'</td>'
   });
   row += "/tr";
   $('table tbody').append(row);
};

let createClickEventHandlerForUserRow = function (id) {
   return function(event) {
      $.ajax({
         url: "/api/user/" + id,
         method: "get",
         success: function(user) {
            Object.keys(user).forEach(field => {
               $('form [name='+ field +']').val(user[field]);
            });
         }
      });
   }
};

let updateUsersTable = function () {
   $.ajax({
      url: "/api/user",
      method: "get",
      success: function(data) {
         $('table tbody').html('');
         data.forEach((user, id) => {
            addRowToUserTable(user);
            $('table > tbody > tr:last-child').click(createClickEventHandlerForUserRow(id));
         });
      }
   });
};

$(document).ready(function(){
   updateUsersTable();

   $('form').submit(function(event) {
      event.preventDefault();
      const form = $(this);

      $.ajax({
         url: this.action,
         method: "post",
         data: form.serialize(),
         success: function(data) {
            const alert = $('form + div.alert');
            alert.text(data);
            updateUsersTable();
            alert.fadeIn(500, function(){
               setTimeout(function(){
                  alert.fadeOut();
               }, 2000)
            });
            form[0].reset();
         }
      });
   });
});
