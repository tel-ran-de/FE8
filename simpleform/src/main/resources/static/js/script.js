$(document).ready(function(){
   $.ajax({
      url: "/api/user",
      method: "get",
      success: function(data) {
         let userTable = '';
         data.forEach(user => {
            userTable +='<tr><td>'+ user.firstName +'</td>' +
                '<td>' + user.lastName +'</td>' +
                '<td>' + user.email +'</td></tr>';

         });
         $('table tbody').html(userTable);
      }
   });


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
            alert.fadeIn(500, function(){
               setTimeout(function(){
                  alert.fadeOut();
               }, 2000)
               setTimeout(function() {location.reload();}, 3500);
            });
         }
      });
   });
});
