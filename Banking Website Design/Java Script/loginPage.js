function userPhone()
{
    var input = parseInt(document.getElementById("phone").value);


    if(input == 9702288992)
    {
        alert("Welcome");
        window.open("after_login.html", "_self");
    }
    else
    {
        alert("Please enter a mobile number to proceed");
    }
} 