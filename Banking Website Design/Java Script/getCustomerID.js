function phoneNum()
{
    var phoneNum_input = parseInt(document.getElementById("phone").value);

    if(phoneNum_input == 9702288992)
    {
        alert("Welcome");
    }
    else
    {
        alert("Please enter a mobile number to proceed");
    }
}