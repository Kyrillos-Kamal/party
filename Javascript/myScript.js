/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
document.addEventListener('keydown',(e)=>{
  if(e.code == "Escape"){
    closeNav()
  }
})
/**------------------------------------------------------------------------------------------------------------------------------------- */

var acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block" ) {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





/**------------------------------------------------------------------------------------------------------------------------------------- */

$(function(){
    
  
  var max =100;
  
  $("textarea").keyup(function(){
      
      var length=$(this).val().length;
      var character = max - length;
      
      console.log(character)
      
      if(character<=0)
          {
               $("#char").text("your available character finished");
              
          }
      else{
      
      $("#char").text(character);
      }
      
  });

  
});















/**------------------------------------------------------------------------------------------------------------------------------------- */
/*CD */

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById(
    "days"
  ).innerHTML = `<span class="fs-3">${days} Day</span>`;
  document.getElementById(
    "hour"
  ).innerHTML = `<span class="fs-3">${hours} Hours</span>`;
  document.getElementById(
    "minute"
  ).innerHTML = `<span class="fs-3">${minutes} Minutes </span>`;
  document.getElementById(
    "second"
  ).innerHTML = `<span class="fs-3">${seconds} Seconds</span>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById(
      "days"
    ).innerHTML = `<span class="fs-3">EXPIRED</span>`;
    document.getElementById(
      "hour"
    ).innerHTML = `<span class="fs-3">EXPIRED</span>`;
    document.getElementById(
      "minute"
    ).innerHTML = `<span class="fs-3">EXPIRED</span>`;
    document.getElementById(
      "second"
    ).innerHTML = `<span class="fs-3">EXPIRED</span>`;
  }
}, 1000);
