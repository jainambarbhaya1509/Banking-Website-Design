function phoneNum()
{
    var phoneNum_input = parseInt(document.getElementById("phone").value);
    var customerID_input = parseInt(document.getElementById("customer_id").value);

    if(phoneNum_input == 9702288992 && customerID_input == 1234567890)
    {
        var confirmed = confirm("Are you sure you want to proceed?");
    }
    else if(phoneNum_input == 9702288992)
    {
        alert("Please enter your Customer ID to proceed");
    }
    else if(customerID_input == 1234567890)
    {
        alert("Please enter your mobile number to proceed");
    }
    else
    {
        alert("Please enter your mobile number and Customer ID to proceed");
    }
}