// Master Theme Scripts

// Hamburger Menu Animation
document.addEventListener('click', ( evnt ) => {
    var target = evnt.target;
    let xmpl = target.closest('.xmpl');
    if ( xmpl ) {
        let webcomponent = xmpl.querySelector( 'm-burger' );
        if ( webcomponent ) {
            if ( webcomponent.getAttribute( 'state' ) ) {
                webcomponent.removeAttribute( 'state' );
            } else {
                webcomponent.setAttribute( 'state', 'cross' );
            }
        } else {
            xmpl.classList.toggle( 'mm-wrapper_opened' );
        }
    }
});

//-- Mobile Menu --//
$(document).ready(function() {
    "use strict";
    var menuID = "#menu";
    $(menuID).mmenu({
        "classes": "mm-slide",
        "offCanvas": {
            "position": "right"
        },
        "footer": {
            "add": true,
            "title": "copyright Protected shariq.net"
        },

        "header": {
            "title": "Menu",
            "add": true,
            "update": true
        }
    });

    // Menu Close Trigger
    $(menuID).on('closed.mm', function() {
        $('.xmpl').removeClass('mm-wrapper_opened');
    });
});

$(document).ready(function () {
    // Slider
    if ($('.tp-banner').length > 0) {
        var sltHght = 500;
        $('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: sltHght,
            hideThumbs: 10,
            fullWidth: "on",
            forceFullWidth: "on"
        });
    }

    var ht = $('.leadimage').height();
    $('.followimage').css({'height' : ht+'px'});

    // SCroll to id

});

 function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }


  var form = document.getElementById("my-form");

      async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
          })
          .catch((error) => {
            console.log(error);
            status.innerHTML = "Oops! There was a problem submitting your form";
          });
      }
      form.addEventListener("submit", handleSubmit);