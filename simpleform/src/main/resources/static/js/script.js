function updateUsersTable() {
   $.ajax({
      url: "/api/user",
      method: "get",
      success: function(data) {
         $('table tbody').html('');
         data.forEach((user, id) => {
            const row = document.createElement("TR");

            let tdID = document.createElement("TD");
            let tdFirstName = document.createElement("TD");
            let tdLastName = document.createElement("TD");
            let tdEmail = document.createElement("TD");
            $('table tbody').append(row);

            row.append(tdID);
            row.append(tdFirstName);
            row.append(tdLastName);
            row.append(tdEmail);

            tdID.innerHTML = id;
            tdFirstName.innerHTML = user.firstName;
            tdLastName.innerHTML = user.lastName;
            tdEmail.innerHTML = user.email;

            $('table > tbody > tr:last-child').click(function(event) {
               $.ajax({
                  url: "/api/user/" + id,
                  method: "get",
                  success: function(user) {
                     $('form input[name=id]').val(id);
                     $('form input[name=firstName]').val(user.firstName);
                     $('form input[name=lastName]').val(user.lastName);
                     $('form input[name=email]').val(user.email);
                  }
               });
            })
         });
      }
   });
}

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
