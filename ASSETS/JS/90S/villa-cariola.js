document.getElementById("hide-checkbox").addEventListener("click", myFunction);

function myFunction() {
     if (document.getElementById("hide-checkbox").checked) {
          setTimeout("window.open('#','_self')", 600);
     } else {
          setTimeout("window.open('../TODAY/PROJECTS/villa-cariola','_self')", 600);
     }
}