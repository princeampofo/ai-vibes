// Variables

var qt1 = document.getElementById('quantity1')
var price1 = 200
var price2 = 150
var qt2 = document.getElementById('quantity2')
var emailPattern =  new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

var subTotal1 = document.getElementById('subtotal1')
var subTotal2 = document.getElementById('subtotal2')
var grandTotal = document.getElementById('grandtotal')
var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var phone = document.getElementById('phone')
var email = document.getElementById('email')
var address = document.getElementById('address')
var zip = document.getElementById('zipCode')
var creditCard = document.getElementById('cardNumber')
var expiryDate = document.getElementById('expiryDate')

var submitButton = document.getElementById('submit')

// event handlers
qt1.addEventListener('change',total)
qt2.addEventListener('change',total)
submitButton.addEventListener("click",receipt)


// total function
function total(){
    subTotal1.value = parseInt(qt1.value) * price1
    subTotal2.value = parseInt(qt2.value) * price2
    grandTotal.value = parseInt(subTotal1.value) + parseInt(subTotal2.value)
}


// receipt function
function receipt(e){

    e.preventDefault()

    if (firstName.value == "" || firstName.value==null ){

        alert("Make sure to add a First Name")
        firstName.focus();

        firstName.select();

        firstName.style.backgroundColor="red";

        return;
    }

    else if (lastName.value == "" || lastName.value== null ){

        alert("Make sure to add a Last Name")
        lastName.focus();

        lastName.select();

        lastName.style.backgroundColor="red";

        return;
    }

    else if (phone.value == "" || phone.value== null || isNaN(phone.value) || phone.value.length < 9 ){

        alert("Make sure to enter a valid phone number")
        phone.focus();

        phone.select();

        phone.style.backgroundColor="red";

        return;
    }

    else if (email.value=="" || email.value==null || !emailPattern.test(email.value)  ) {

        alert("Make sure to entered a valid email. Eg. abc@gmail.com")
        email.focus();

        email.select();

        email.style.backgroundColor="red";

        return;

    }

    else if (zip.value=="" || zip.value==null || zip.value.length!=5 || isNaN(zip.value)){
        alert("Make sure to entered a valid zip code")
        zip.focus();

        zip.select();

        zip.style.backgroundColor="red";

        return;

    }

    else if (zip.value=="" || zip.value==null || zip.value.length!=5 || isNaN(zip.value)){
        alert("Make sure to entered a valid zip code")
        zip.focus();

        zip.select();

        zip.style.backgroundColor="red";

        return;

    }

    else if (address.value == "" || address.value== null ){

        alert("Make sure to add an address")
        address.focus();

        address.select();

        address.style.backgroundColor="red";

        return;
    }

    else if (creditCard.value == "" || creditCard.value== null || isNaN(creditCard.value) || creditCard.value.length!=16 ){

        alert("Make sure to enter a valid credit card Number with valid length")
        creditCard.focus();

        creditCard.select();

        creditCard.style.backgroundColor="red";

        return;
    }

    else if (expiryDate.value == "" || expiryDate.value== null ){

        alert("Make sure to enter an expiry date")

        return;
    }

    else{
        var quantity = parseInt(qt1.value) + parseInt(qt2.value)
        document.getElementById('formOutput').style.border = "2px dotted black"
        document.getElementById('rTitle').innerHTML = "Thanks for purchasing from us!"
        document.getElementById("rTitle2").innerHTML = "This receipt was created on " + new Date().toISOString().split('T')[0] +"."
        document.getElementById('fName').innerHTML = "First Name : " + firstName.value
        document.getElementById('lName').innerHTML = "Last Name : " + lastName.value
        document.getElementById('uAddress').innerHTML = "Address : " + address.value
        document.getElementById('zCode').innerHTML = "Zip Code: " + zip.value
        document.getElementById('cNumber').innerHTML = "Card Number: XXXX-XXXX-XXXX-" + creditCard.value.slice(12)
        document.getElementById('quantity').innerHTML = "Ticket Quantity : " + quantity.toString() 
        document.getElementById('jSubtotal').innerHTML = "Jay Z's Ticket Subtotal : $" + subTotal1.value   
        document.getElementById('bSubtotal').innerHTML = "Beyonce's Ticket Subtotal : $" + subTotal2.value        
        document.getElementById('pTotal').innerHTML = "Total Amount: $" + grandTotal.value           
       
    }

}

