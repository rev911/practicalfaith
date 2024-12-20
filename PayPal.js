



// ENTER YOUR EMAIL ADDRESS AND THE WEB PAGE TO RETURN TO AFTER PAYMENT
var Email = "email@faithbooks.net";
var Success_Return_URL = "http://www.www.faithbooks.net";

// Pay Pal gateway web address
var PayPalURL = "https://www.paypal.com/cart/add";




// DO NOT EDIT THE JAVASCRIPT FUNCTIONS BELOW
function PPWindow(Item_Name,Item_No,Amount,Shipping,Ship2,Handling) {
Quan=document.forms[0].Quantity.value;
if (Quan == "" || Quan == "0") { alert('Please enter a quantity'); return (false); }
else{
window.open(PayPalURL+"="+Email+"&business="+Email+"&quantity="+Quan+"&item_name="+Item_Name+"&item_number="+Item_No+"&amount="+Amount+"&shipping="+Shipping+"&shipping2="+Ship2+"&handling="+Handling+"&return="+Success_Return_URL,"PPWindow","toolbar=yes,scrollbars=yes,resizable=yes,width=620,height=400,top=0,left=0");
document.forms[0].Quantity.value = "";
 }
}
function SetQuantity(QUANTITY){
document.forms[0].Quantity.value = QUANTITY;
}
function ViewCart(){
window.open('https://www.paypal.com/cart/display=1&business='+Email,'cartwin','toolbar=yes,scrollbars=yes,resizable=yes,width=620,height=400,top=0,left=0');
}
function ThisPage() {
return (false);
}

