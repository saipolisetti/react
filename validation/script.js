var attempt=3;//Variable to count number of attempts.
//Below Function Executes on click of login button
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="saidurgarao" && password=="ilumother#143"){
        alert("Login Successfully");
        window.location = "success.html";//Redirecting to other page.
        return false;
    }
    else{
        attempt--;//Decrementing by one.
        alert("You have left "+attempt+"attempt.");
        //Disablimg fields after 3 attempts.
        if(attempt == 0){
            document.getElementById("username").disabled=true;
            document.getElementById("password").disabled=true;
            document.getElementById("submit").disabled=true;
            return false;
        } 

    }
}