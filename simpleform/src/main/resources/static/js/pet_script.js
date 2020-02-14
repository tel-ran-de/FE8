$(document).ready(function(){
    $.ajax({
        url: "/apiPet/pet",
        method: "get",
        success: function(data) {
            let petTable = '';
            data.forEach(pet => {
                petTable +='<tr><td>'+ pet.name +'</td>' +
                    '<td>' + pet.age +'</td>' +
                    '<td>' + pet.dateOfBirth +'</td>' +
                    '<td>' + pet.kind +'</td>' +
                    '<td>' + pet.numberOfLegs +'</td></tr>';

            });
            $('table tbody').html(petTable);
        }
    });

    $(function() {
        $('form').submit(function(e) {
            e.preventDefault();
            let pname       = $('input[name="name"]').val(),
                page        = $('input[name="age"]').val(),
                pbirthDay   = $('input[name="birthDay"]').val(),
                pkind       = $('input[name="kind"]').val(),
                pnumber     = $('input[name="number"]').val();

            if($('.results').length < 1) {
                $('body').append('<table class="table">'
                    +'<tr>'
                    +'<td>'+pname+'</td>'
                    +'<td>'+page+'</td>'
                    +'<td>'+pbirthDay+'</td>'
                    +'<td>'+pkind+'</td>'
                    +'<td>'+pnumber+'</td>'
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