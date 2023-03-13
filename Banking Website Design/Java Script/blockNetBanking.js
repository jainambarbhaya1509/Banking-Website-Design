function phoneNum()
{
    var phoneNum_input = parseInt(document.getElementById("phone").value);
    var username_input = document.getElementById("username").value;

    if(phoneNum_input == 9702288992 && username_input == "JAINAM")
    {
        var confirmed = confirm("Are you sure you want to block your NetBanking?");
    }
    else if(phoneNum_input == 9702288992)
    {
        alert("Please enter your username to proceed");
    }
    else if(username_input == "JAINAM")
    {
        alert("Please enter your mobile number to proceed");
    }
    else
    {
        alert("Please enter your mobile number and username to proceed");
    }
}