
//-------------------DATE AND TIME CLOCK
const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
     let time = new Date();
     displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
     setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
     let today = new Date();

     // return number
     let dayName = today.getDay(),
          dayNum = today.getDate(),
          month = today.getMonth(),
          year = today.getFullYear();

     const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
     ];
     const dayWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
     ];
     // 
     const IDCollection = ["daynum", "month", "year"];
     // 
     const val = [dayWeek[dayName], dayNum, months[month], year];
     for (let i = 0; i < IDCollection.length; i++) {
          document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
     }
}

updateDate();


//-------------------WINDOW TYPING
var aText = new Array(
     "Hi, my name is HIND.",
     "I’m 23 years old and I live in Desenzano. I love to challenge myself "
);
var iSpeed = 100;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
     sContents = ' ';
     iRow = Math.max(0, iIndex - iScrollAt);
     var destination = document.getElementById("typedtext");

     while (iRow < iIndex) {
          sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
     if (iTextPos++ == iArrLength) {
          iTextPos = 0;
          iIndex++;
          if (iIndex != aText.length) {
               iArrLength = aText[iIndex].length;
               setTimeout("typewriter()", 500);
          }
     } else {
          setTimeout("typewriter()", iSpeed);
     }
}


typewriter();



//_______________
$.fn.isInBox = function (top, index) {

     var elementTop = top + index * $(this).outerHeight();
     var elementBottom = elementTop + $(this).outerHeight();
     var viewportTop = $(window).scrollTop();
     return viewportTop > elementTop && viewportTop < elementBottom;
}

$(function () {

     var n = $('.sub').find('.box').length;
     $('.sub').find('.box').each(function () {
          $('#dots').append('<span>');
     });

     $('.sub').css('height', (n + 1) * $('.box').height());

     $(window).on('resize scroll', function () {

          var zoneTop = $('.sub').offset().top;

          var zoneBottm = zoneTop + $('.sub').outerHeight() - $('.sub .box').last().outerHeight();
          wTop = $(window).scrollTop();

          console.log(zoneTop + ',' + wTop);

          if (wTop >= zoneTop && wTop <= zoneBottm) {
               $('.sub > .box').css('position', 'fixed');
               $('#dots').show();
          } else {
               $('.sub > .box').css('position', 'absolute');
               $('#dots').hide();
          }

          $('.sub > .box').each(function (i) {
               if ($(this).isInBox(zoneTop, i)) {
                    $(this).addClass('cur');

                    $('#dots span').removeClass('active');
                    $('#dots span').eq(i).addClass('active');
               } else {
                    if ((i == 0 && wTop < zoneTop) || (i == (n - 1) && wTop > zoneBottm)) {
                         $(this).addClass('cur');
                    } else {
                         $(this).removeClass('cur');
                    }
               }
          });
          //console.log(wTop);
     });
});