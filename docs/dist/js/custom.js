
// mybutton = document.getElementById("myBtn");
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// let loader = document.querySelector('.loader');
// function Loader() {
//   setTimeout(function(){ 
//     loader.style.visibility = 'hidden';
//     loader.style.opacity = 0;
//     loader.style.transition = "all 1s";
//     document.body.style.height = "auto";
//     document.getElementsByTagName('html')[0].style.overflowX = "hidden";
//     document.getElementsByTagName('html')[0].style.overflowY = "auto";
//   }, 3000);
// }
// Loader();

//Our sketches serction slider script


function gotowhatsapp() {
  var alert = document.querySelector('.alert');
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
    
  if(name.value == "" || email.value == "" || phone.value == "" ){
    alert.style.display = "block";
  }else{

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    var url = "https://wa.me/+201060928316?text="
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email + "%0a"
  
    window.open(url, '_blank').focus();
  }
}
