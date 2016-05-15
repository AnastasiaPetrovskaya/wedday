$(document).ready(function() {

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
       // console.log( $('#login-title').css("padding-top"));
        //console.log(-($('#login-title').height()) - ($('#login-title').css("padding-top")));
        //console.log($('#login-title').outerHeight());
        
    $('#login-title').css("padding-top", 0);
    $('#login-title').css("margin-bottom", 0);
        console.log($(window).height());
        $('.login-bd').css("height", $(window).height());
        $('#login-title').css("padding-top", ($('#img_bg').height())*0.25);
        $('#login-title').css("margin-bottom", -$('#sp_t').height() - ($('#img_bg').height())*0.25);
    });



});




$(document).load(function(){
});
