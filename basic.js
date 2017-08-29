var dot;

//alert("hola0");
//button2.onclick.prompt("Escriba el nombre de su perro");
//dot = prompt("Escriba el nombre de su perro");
//alert("Se llama " + dot);

function boton(){
  var nombre = prompt("Escriba su nombre");
return nombre;
}

function login(){
  var  user = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  if (user == "Diego" && password == "dot") {
    window.location.href = "dashboard.html";
  } else {
    alert("Error(Logging Failed)")
    window.location.href = "login.html";
  }


}

function signup(){
  var  user = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  if (user == "Diego" && password == "dot") {
    window.location.href = "dashboard.html";
  } else {
    alert("Error(Logging Failed)")
    window.location.href = "signup.html";
  }


}

document.getElementById("login-form").user.focus()
