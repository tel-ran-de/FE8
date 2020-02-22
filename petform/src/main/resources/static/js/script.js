$(document).ready(function(){
   $.ajax({
      url: "/api1/form",
      method: "get",
      success: function(data) {
         let petTable = '';
         data.forEach(pet => {
            petTable +='<tr><td>'+ pet.petName +'</td>' +
                '<td>' + pet.petAge +'</td>' +
                '<td>' + pet.birthDay +'</td>' +
                '<td>' + pet.petKind +'</td>'

         });
         $('table tbody').html(petTable);
      }
   });

   $(function() {
      $('form').submit(function(e) {
         e.preventDefault();
         let petName       = $('input[name="petName"]').val(),
             petAge        = $('input[name="petAge"]').val(),
             birthDay   = $('input[name="birthDay"]').val(),
             petKind       = $('input[name="petKind"]').val();

         if($('.results').length < 1) {
            $('body').append('<table class="table">'
                +'<tr>'
                +'<td>'+petName +'</td>'
                +'<td>'+petAge+'</td>'
                +'<td>'+birthDay+'</td>'
                +'<td>'+petKind+'</td>'
                +'</tr>'
                + '</table>');
         }

      });

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
            alert.text("Form submitted successfully");
            alert.fadeIn(500, function(){
               setTimeout(function(){
                  alert.fadeOut();
               }, 2000)
            });
         }
      });
   });
});