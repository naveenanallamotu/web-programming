/**
 * Created by chswa on 7/18/2017.
 */

function logina(){

    var us1= document.getElementById("uname");
    var pw1= document.getElementById("pwd");

    if (us1.value !== "anil" || pw1.value !== "anil"){

        alert("invalid admin login credentials, contact adminstrator");
    }else{

        alert("Admin Anil loged in successfully");
        window.location.href= "../adminmodule.html";
        alert("Welcome Anil ");

    }

}

function loginss(){

    localStorage.setItem("unamess", unamess.value);
    localStorage.setItem("pwdss", pwdss.value);
    alert("Student SignedUp Successfully");
    window.location.href="student%20login.html";



}
function logins() {

    var us3 = localStorage.getItem("unamess");
    var pw3 = localStorage.getItem("pwdss");


    var us2 = document.getElementById("unames");
    var pw2 = document.getElementById("pwds");

    if (us2.value !== us3 || pw2.value !== pw3) {

        alert("invalid crendentails, Please try agai or singup")
    } else {

        alert("you have logged in succeessfully");
        window.location.href = "../index.html";
        alert("welcome  " + " ... " + us2.value);
    }
}

var mya = angular.module('app',[]);
mya.run(function ($http) {

    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'


});

mya.controller('sacontroller',function($scope,$http) {
    $scope.addsdetails= function () {

        console.log($scope.sfname);

        var dataParams = {

            'sfname' : $scope.sfname,
            'slname' : $scope.slname,
            'semail' : $scope.semail,
            'sgrade' : $scope.sgrade,
            'sage'   : $scope.sage,
            'sadd'   : $scope.sadd,
            'sphone' : $scope.sphone

        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        var req = $http.post('http://127.0.0.1:10002/create',dataParams);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
});

mya.controller('MainCtrl',function($scope,$http){

    $scope.vm = {};
    $scope.getData=function(){
        var req = $http.get('http://127.0.0.1:10002/get');
        req.success(function(data, status, headers, config) {

            $scope.list = data;
            console.log(data);


            for(var i=0; i<100;i++){

                if(data[i].sfname === $scope.vm.name ){

                    $scope.list1 = data[i];
                    console.log(data[i]);
                    $scope.todelete=data[i]._id;
                }

            }
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });

    };

    $scope.delete = function(id,callback){

        alert("deleted succeessfully");
        $http.get('http://127.0.0.1:10002/delete/'+id)
            .success(function(data){
                console.log("Successfully deleted");
                $scope.getData();
            });
    };


    $scope.update = function(book,callback){

        $http.get('http://127.0.0.1:10002/update/'+book._id,{params:book})
            .success(function(data){
                console.log("Successfully updated");
                $scope.getData();
            });
    }

});




