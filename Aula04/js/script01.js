function for1() {
  for (var x = 1; x <= 10; x++) {
    console.log("Contei " + x);
  }
}
function par() {
  for (var x = 1; x <= 20; x++) {
    if (x % 2 == 0) {
      console.log("Este número é par: " + x);
    }
  }
}

function tabuada() {
  var n = prompt("Digite um valor para a tabuada");
  for (var ct = 1; ct <= 10; ct++) {
    console.log(n + " x " + ct + " = " + ct * n);
  }
}
function calculaCPF() {
  var cpfUsuario;
  var cpf9;
  var peso10 = 10;
  var peso11 = 11;
  var resultado = 0;
  var resto;

  //   cpfUsuario = prompt("Digite o seu cpf");

  cpfUsuario = document.getElementById("cpf").value;

  cpf9 = cpfUsuario.substring(0, 9);
  console.log(cpf9);

  for (var i = 0; i <= 8; i++) {
    console.log(cpf9[i]);

    resultado += cpf9[i] * peso10;

    peso10--;
  }

  resto = resultado % 11;

  if (resto < 2) {
    cpf9 += "0";
  } else {
    cpf9 += "" + (11 - resto);
  }
  console.log(cpf9);

  resultado = 0;

  for (var i = 0; i <= 9; i++) {
    console.log(cpf9[i]);

    resultado += cpf9[i] * peso11;

    peso11--;
  }

  resto = resultado % 11;

  if (resto < 2) {
    cpf9 += "0";
  } else {
    cpf9 += "" + (11 - resto);
  }
  console.log(cpf9);

  if (cpf9 == cpfUsuario) {
    alert("CPF Válido");
  } else {
    alert("CPF Inválido");
  }
}
