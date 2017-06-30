/**
 * Created by NAVEENA on 27-06-2017.
 */
$(document).ready(function(){
    $('#searchUser').on('keyup',function(e){
        var username = e.target.value;
        $.ajax({
            url:'https://api.github.com/users/'+username,
        }).done(function(user){
            $('#profile').html(
                $(user.name)
            );
        });
    });

});