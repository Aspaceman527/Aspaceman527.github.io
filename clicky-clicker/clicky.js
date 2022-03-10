clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("clicks").innerHTML = localStorage.clickcount;
}
/*cps();

function cps() {
  if (localStorage.b1) {
    localStorage.b1 = Number(localStorage.b1)+1;
  } else {
    localStorage.b1 = 1;
  }
   document.getElementById('b1').innerHTML = localStorage.b1;
 }
    */
