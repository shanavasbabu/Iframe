function loadData() {
  setTimeout(function () {
    document.getElementById("one").style.visibility = "visible";
    document.getElementById("txt1").style.visibility = "visible";
  }, 1000);
  setTimeout(function () {
    document.getElementById("two").style.visibility = "visible";
    document.getElementById("txt3").style.visibility = "visible";
  }, 2000);
  setTimeout(function () {
    document.getElementById("three").style.visibility = "visible";
    document.getElementById("txt4").style.visibility = "visible";
  }, 3000);
  setTimeout(function () {
    document.getElementById("four").style.visibility = "visible";
    document.getElementById("txt2").style.visibility = "visible";
  }, 4000);
  setTimeout(function () {
    document.getElementById("char").style.visibility = "visible";
  }, 4000);
  setTimeout(function () {
    document.getElementById("Btn").style.visibility = "visible";
  }, 5000);
}

function block() {
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
}

function close() {
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
}
