$(document).ready(function() {

    $('select').material_select();

    $('.modal').modal({

        dismissible: false, 
        opacity: .5, 
        inDuration: 300, 
        outDuration: 200, 
        startingTop: '4%', 
        endingTop: '10%' 
    });
});

// Activate submit button
$('#submitButton').on('click', function(event) {
    
    event.preventDefault();

    // Gather user inputs

    var userInput = {

        name: $('#user_name').val().trim(),

        photo: $('#user_photo').val().trim(),

        scores:[
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim()
        ]
    };

    // Add user inputs to friends list

    $.post('/api/friends', userInput)

      .done(function(data) {

          $('#friendMatch').html(data.matchName);

          $("#friendImage").attr("src", data.matchImage);

        // Pop open the modal dialog
          $('#modal1').modal('open');

      });
});