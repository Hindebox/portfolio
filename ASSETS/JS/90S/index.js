document.getElementById("hide-checkbox").addEventListener("click", myFunction);

function myFunction() {
     if (document.getElementById("hide-checkbox").checked) {
          setTimeout("window.open('index','_self')", 600);
     } else {
          setTimeout("window.open('./TODAY/','_self')", 600);
     }
}