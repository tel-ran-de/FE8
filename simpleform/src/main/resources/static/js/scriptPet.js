function updatePetsTable() {
   $.ajax({
      url: "/api1/pet",
      method: "get",
      success: function(data) {
         $('table tbody').html('');
         data.forEach((pet, id) => {
            const row ='<tr><td>' + id + '</td>' +
                '<td>'+ pet.petName +'</td>' +
                '<td>' + pet.age +'</td>' +
                '<td>' + pet.dateOfBirth +'</td>' +
                '<td>' + pet.kind +'</td>' +
                '<td>' + pet.numberOfLegs +'</td></tr>';
            $('table tbody').append(row);
            $('table > tbody > tr:last-child').click(function(event) {
               $.ajax({
                  url: "/api1/pet/" + id,
                  method: "get",
                  success: function(pet) {
                     $('form input[name=id]').val(id);
                     $('form input[name=petName]').val(pet.petName);
                     $('form input[name=age]').val(pet.age);
                     $('form input[name=dateOfBirth]').val(pet.dateOfBirth);
                     $('form input[name=kind]').val(pet.kind);
                     $('form input[name=numberOfLegs]').val(pet.numberOfLegs);
                  }
               });
            })
         });
      }
   });
}


$(document).ready(function(){
   updatePetsTable();

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
            updatePetsTable();
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