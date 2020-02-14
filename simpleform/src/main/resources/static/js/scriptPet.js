$(document).ready(function(){
   $.ajax({
      url: "/api1/pet",
      method: "get",
      success: function(data) {
         let petTable = '';
         data.forEach(pet => {
            petTable +='<tr><td>'+ pet.petName +'</td>' +
                '<td>' + pet.age +'</td>' +
                '<td>' + pet.dateOfBirth + '</td>' +'<td>'+pet.kind +'<td>'+
                pet.numberOfLegs+'</td></tr>';

         });
         $('table tbody').html(petTable);
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
            });
         }
      });

      $.ajax({
         url: "/api1/pet",
         method: "get",
         success: function(data) {
            let petTable = '';
            data.forEach(pet => {
               petTable +='<tr><td>'+ pet.petName +'</td>' +
                   '<td>' + pet.age +'</td>' +
                   '<td>' + pet.dateOfBirth + '</td>' +'<td>'+pet.kind +'<td>'+
                   pet.numberOfLegs+'</td></tr>';

            });
            $('table tbody').html(petTable);
         }
      });



   });
});