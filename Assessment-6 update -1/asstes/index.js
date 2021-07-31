var pNum = 1;
var maxPage = 4;
function next() {
  pNum++;
  if (pNum > maxPage) pNum = 1;
  document.getElementById("zoome").src = "./asstes/slides/" + pNum + ".html";
  if (pNum == 4) {
    document.getElementById("demo").disabled = true;
  }
}

function previous() {
  pNum--;
  if (pNum < 1) pNum = 1;
  document.getElementById("demo").disabled = false;
  document.getElementById("zoome").src = "./asstes/slides/" + pNum + ".html";
}
