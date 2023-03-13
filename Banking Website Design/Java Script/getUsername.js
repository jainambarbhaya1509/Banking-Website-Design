function phoneNum()
{
    var phoneNum_input = parseInt(document.getElementById("phone").value);
    var customerID_input = parseInt(document.getElementById("customer_id").value);
    var debitCard_input = parseInt(document.getElementById("debit_num").value);
    var accountNum_input = parseInt(document.getElementById("acc_num").value);

    if(phoneNum_input == 9702288992)
    {
        if(customerID_input == 1234567890 || debitCard_input == 12345678901234 || accountNum_input == 09876543210)
        {
            alert("Welcome");
        }
        else
        {
            alert("Please enter your Customer ID or Debit Card Number or Account Number");
        }
    }
    else
    {
        alert("Please enter a mobile number and mandatory fields to proceed");
    }
}