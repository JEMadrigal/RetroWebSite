function noAvailable1() {
  const req1 = new XMLHttpRequest();
  req1.onload = function() {
    document.getElementById("boton3").innerHTML = this.responseText;
  }
  req1.open("GET", "response.txt");
  req1.send();
}

