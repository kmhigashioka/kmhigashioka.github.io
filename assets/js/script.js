$(document).ready(function () {
  $(function() {
    
    function smoothScrollingTo(target){
      $('html,body').animate({scrollTop:$(target).offset().top}, 500);
    }

    $('a[href*=\\#]').on('click', function(event){     
      event.preventDefault();
      smoothScrollingTo(this.hash);
    });

    $('#inquiry-form button[type=submit]').on('click', function () {
      $('#inquiry-form').addClass('dirty');
    });

    $('#inquiry-form').submit(function (event) {
      event.preventDefault();

      var notyOpt = {
        theme: 'sunset',
        inTimeout: 5000,
        outTimeout: 1000
      };

      var info = new Noty({
        theme: notyOpt.theme,
        text: 'Sending query.',
        type: 'information',
        timeout: notyOpt.inTimeout
      });

      info.show();

      $.ajax({
        method: 'POST',
        data: JSON.stringify({
          name: $('#inquiry-form input[name=name]').val(),
          email: $('#inquiry-form input[name=email]').val(),
          phoneNumber: $('#inquiry-form input[name=phone_number]').val(),
          inquiry: $('#inquiry-form textarea[name=inquiry]').val()
        }),
        processData: false,
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'text',
        url: 'https://send.haboob.co/v1/hooks/rJoVMVsqz/send/production',
        error: function (jqXHR, textStatus, errorThrown) {
          info.setTimeout(notyOpt.outTimeout);

          new Noty({
            theme: notyOpt.theme,
            text: 'Sending of query encountered a problem. Please try again later.',
            type: 'error',
            timeout: notyOpt.inTimeout
          }).show();
        },
        success: function (jqXHR, textStatus, errorThrown) {
          info.setTimeout(notyOpt.outTimeout);

          new Noty({
            theme: notyOpt.theme,
            text: 'Query successfully sent from ' + $('#inquiry-form input[name=email]').val() + '.',
            type: 'success',
            timeout: notyOpt.inTimeout
          }).show();
        }
      });
    });

  });
});
