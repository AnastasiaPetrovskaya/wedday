/*$(document).ready(function() {

    $('#login-title').css("padding-top", 0);
    $('#login-title').css("margin-bottom", 0);

    var img = document.getElementById('img_bg'); 
    //or however you get a handle to the IMG
    var width = img.clientWidth;
    var height = img.clientHeight;
    console.log(height);

        console.log($(window).height());
        console.log($('#img_bg').outerHeight());
    $('#login-title').css("padding-top", ($('#img_bg').height())*0.25);
    $('#login-title').css("margin-bottom", -$('#sp_t').height() - ($('#img_bg').height())*0.25);
    $('.login-bd').css("height", $(window).height());
    
    $( window ).resize(function() {
    $('#login-title').css("padding-top", 0);
    $('#login-title').css("margin-bottom", 0);
        console.log($(window).height());
        $('.login-bd').css("height", $(window).height());
        $('#login-title').css("padding-top", ($('#img_bg').height())*0.25);
        $('#login-title').css("margin-bottom", -$('#sp_t').height() - ($('#img_bg').height())*0.25);
    });
});
*/

/*
$(document).ready(function() {
    $.ajaxSetup({ 
         beforeSend: function(xhr, settings) {
             function getCookie(name) {
                 var cookieValue = null;
                 if (document.cookie && document.cookie != '') {
                     var cookies = document.cookie.split(';');
                     for (var i = 0; i < cookies.length; i++) {
                         var cookie = jQuery.trim(cookies[i]);
                         // Does this cookie string begin with the name we want?
                         if (cookie.substring(0, name.length + 1) == (name + '=')) {
                             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                             break;
                         }
                     }
                 }
                 return cookieValue;
             }
             if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                 // Only send the token to relative URLs i.e. locally.
                 xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
             }
         } 
    });



    $('#login_form').submit(function() { // catch the form's submit event


        $.ajax({ // create an AJAX call...
            data: $('#login_form').serializeArray(), // get the form data
            type: "post", //$(this).attr('method'), // GET or POST
            url: '/login', //$(this).attr('action'),//'/accept_invite', // the file to call
            dataType: "json",
           /* error: function(error) { // on success..
                    $('#login_error').css({"display":"block"});
            },
            success: function(response) { // on success..
                    //$('#login_error').css({"display":"block"});
                window.location.href = ''
            },
*/

        })
        .done(function(data){
            if (data.success) {
                window.location = 'lesha-nastya.ru'
            } else {
                $('#login_error').css({"display":"block"});
            }
        });

        return false;
    });


*/
});
