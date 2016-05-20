$(document).ready(function() {
    $("#invite_form").attr('autocomplete', 'off');
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


    var $validator = $("#invite_form").validate({
        rules:{
             name:{
                 required: true,
                 minlength: 6
             },
             email:{
                 required: true,
                 email: true,
             },
        },
        messages:{
             login:{
                 required: "Это поле обязательно для заполнения",
                 minlength: "Логин должен быть минимум 4 символа",
             },
             pswd:{
                 required: "Это поле обязательно для заполнения",
             },
        }
    });


    $('#invite_form').submit(function() { // catch the form's submit event
        var data = {},
            comming = null,
            name = null,
            email = null,
            comment = null,
            pair = [];

        //form validtion
        var $valid = $("#invite_form").valid();
        if (!$valid) {
            $validator.focusInvalid();
            return false;
        }

        //making request data
        if  ($('#yes').hasClass("yes_no_active")) {
            comming = true;
        } else {
            comming = false;
        }
        $("#guests").find($("input")).each(function(index, element) {
            pair.push(element.value);
        });

        data = {
            "comming" : comming,
            "name" : $('#name').val(),
            "email" : $('#email').val(),
            "comment" : $('#comment').val(),
            "pair" : JSON.stringify(pair)
        }

        $.ajax({ // create an AJAX call...
            data: data, //$('#invite_form').serializeArray(), // get the form data
            type: "post", //$(this).attr('method'), // GET or POST
            url: '/accept_invite', //$(this).attr('action'),//'/accept_invite', // the file to call
            dataType: "json",
            success: function(response) { // on success..
                if (comming) {
                    $('#g_yes').css({"display":"block"});
                    $('#g_no').css({"display":"none"});
                } else {
                    $('#g_no').css({"display":"block"});
                    $('#g_yes').css({"display":"none"});
                }
            }
        });
        return false;
    });


    $('#yes').click(function(){
        $('#no').removeClass('yes_no_active');
        $('#yes').addClass('yes_no_active');
    });

    $('#no').click(function(){
        $('#yes').removeClass('yes_no_active');
        $('#no').addClass('yes_no_active');
    });

    $('#add_guest').click(function() {
        var inputs = $("#guests").find($("input") );
        console.log(inputs.length)

        var doc = document;
        var fragment = doc.createDocumentFragment();

        var div = doc.createElement("div");
        div.className = "input-group input_group_padding";

        var input = doc.createElement("input");
        $(input).attr("type", "text");
        $(input).attr("name", "guest_name[" + inputs.length +"]");
        input.className = "form-control form_input_1";
        input.value = $('#guest_name').val();
        div.appendChild(input);

        var span = doc.createElement("span");
        span.className = "input-group-btn form_span ";
        $(span).attr("type", "button");
        var button = doc.createElement("button");
        button.className = "btn_in_span btn_delete_guest";
        $(button).attr("type", "button");
        $(button).attr("id", "btn_del_guest_" + inputs.length);

        button.onclick = function () {
            $(this).parent().parent().remove();
        };


        var i = doc.createElement("i");
        i.className = "fa fa-trash";
        button.appendChild(i);
        span.appendChild(button);
        div.appendChild(span);
        fragment.appendChild(div);

        doc.getElementById("guests").appendChild(fragment);

        doc.getElementById('guest_name').value = ''; 

    });


    $('.btn_delete_guest').click(function() {
        $(this).parent(".input-group").remove();

    });

});
