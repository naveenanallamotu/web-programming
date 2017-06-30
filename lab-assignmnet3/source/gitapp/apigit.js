/**
 * Created by NAVEENA on 27-06-2017.
 */
function myfunction(){
    var str1=document.getElementById("searchUser").value;
    var url = "https://api.github.com/users/"+str1;
    $("#data").empty();
    $.ajax({
        'url': url,
        'type': 'GET',
        'success': function (data) {
            follow = data.followers;
            if(follow >= 5) {
                var table = '';
                table += "<label id='tableLabel'></label>";
                table += "<tbody>";
                table += "<tr><td>Name:</td><td>" + data.login + "</td></tr>";
                table += "<tr><td>ID:</td><td>" + data.id + "</td></tr>";
                table += "<tr><td>Profile picture</td><td><img src='" + data.avatar_url + "'</td></tr>";
                table += "<tr><td>User's Link:</td><td>" + data.html_url + "</td></tr>";
                table += "<tr><td>Date of Creation of  account</td><td>" + data.created_at + "</td></tr>";
                table += "<tr><td>Followers:</td><td>" + data.followers + "</td></tr>";
                table += "<tr><td>PublicRepositories count:</td><td>" + data.public_repos + "</td></tr>";
                table += "</tbody>";
                document.getElementById("data").innerHTML = table;
            }
            else{
                window.alert(data.login +" "+ "have Followers less than 5.")
            }
        }
    });
}