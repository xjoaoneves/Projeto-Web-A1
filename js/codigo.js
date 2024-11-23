function mudarCor() {
  const header = document.getElementById("header");
  const corAtual = window.getComputedStyle(header).backgroundColor;

  if (corAtual === "rgb(0, 0, 0)") {
    header.style.backgroundColor = "bisque";
    console.log("Mudando para claro");
  } else {
    header.style.backgroundColor = "black";
    console.log("Mudando para preto");
  }
}

function mostrarDados(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const sexo = document.getElementById("sexo").value;
  const mensagem = document.getElementById("mensagem").value;
  const novidades = document.getElementById("novidades").checked;

  const url = `resultado.html?nome=${encodeURIComponent(
    nome
  )}&email=${encodeURIComponent(email)}&sexo=${encodeURIComponent(
    sexo
  )}&mensagem=${encodeURIComponent(mensagem)}&novidades=${encodeURIComponent(
    novidades
  )}`;

  window.open(url, "_blank");
}

const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get("nome");
const email = urlParams.get("email");
const sexo = urlParams.get("sexo");
const mensagem = urlParams.get("mensagem");
const novidades = urlParams.get("novidades");

const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <p><b>Nome:</b> ${nome}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Sexo:</b> ${sexo}</p>
  <p><b>Mensagem:</b> ${mensagem}</p>
  <p><b>Deseja receber novidades:</b> ${novidades ? "Sim" : "Não"}</p>
  <h1>Obrigado por enviar o formulário!</h1>
`;
