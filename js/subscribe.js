/*
    Sand newsletter
    **********************************************************************/
$('#subscribe').click(function () {
  var error = false;
  var emailCompare = /^([a-z0-9_.-]+)@([0-9a-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
  var email = $('input#nlmail').val().toLowerCase(); // get the value of the input field
  if (email == "" || email == " " || !emailCompare.test(email)) {
    $('#err-subscribe').show(500);
    $('#err-subscribe').delay(4000);
    $('#err-subscribe').animate({
      height: 'toggle'
    }, 500, function () {
      // Animation complete.
    });
    error = true; // change the error state to true
  }

  if (error === false) {
    $.ajax({
      type: 'POST',
      url: 'mail/newsletter.php',

      data: {
        email: $('#nlmail').val()
      },
      error: function (request, error) {
        alert("Hiba történt! Próbáld meg később!");
      },
      success: function (response) {
        if (response == 'OK') {
          $('#success-subscribe').show();
          $('#nlmail').val('')
        } else {
          alert("Hiba történt! Próbáld meg később!");
        }
      }
    });
  }

  return false;
});
