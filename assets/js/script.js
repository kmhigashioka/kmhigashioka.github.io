$(document).ready(function () {
  $(function() {
    
    function smoothScrollingTo(target){
      $('html,body').animate({scrollTop:$(target).offset().top}, 500);
    }

    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        smoothScrollingTo(this.hash);
    });

    $(document).ready(function(){
      smoothScrollingTo(location.hash);
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
          "personalizations": [
            {
              "to": [
                {
                  "email": "john@example.com"
                }
              ],
              "subject": "Hello, World!"
            }
          ],
          "from": {
            "email": "from_address@example.com"
          },
          "content": [
            {
              "type": "text/plain",
              "value": "Hello, World!"
            }
          ]
        }
        ),
        dataType: 'json',
        processData: false,
        url: 'https://api.sendgrid.com/v3/mail/send',
        headers: {
          'Authorization': 'bearer ',
          'Content-Type': 'application/json'
        },
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
            text: 'Query successfully sent from <email here>.',
            type: 'success',
            timeout: notyOpt.inTimeout
          }).show();
        }
      });
    });

  });
});
