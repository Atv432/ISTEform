function test()
{

var un = document.getElementById("first-name").value;
var last = document.getElementById("last-name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var address = document.getElementById("address").value;
var message = document.getElementById("message").value;

var unD = localStorage.setItem("first-name",un);
var lastD = localStorage.setItem("last-name",last);
var emailD = localStorage.setItem("email",email);
var phoneD = localStorage.setItem("phone",phone);
var addressD = localStorage.setItem("address",address);
var messageD = localStorage.setItem("message",message);
  
  console.log(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`);
});
