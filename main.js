const form = document.getElementById("form-agenda");
const nomes = [];
const numeros = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

let linhas = ``;

function adicionaLinha() {
  const inputNome = document.getElementById("nome-contato");
  const inputSobrenome = document.getElementById("sobrenome-contato");
  const inputNumero = document.getElementById("numero-contato");

  if (numeros.includes(inputNumero.value)) {
    alert(`O número: ${inputNumero.value} ja existe`);
  } else {
    nomes.push(inputNome.value, inputSobrenome.value);
    numeros.push(inputNumero.value);

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputSobrenome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;

    linhas += linha;
  }
  inputNome.value = "";
  inputSobrenome.value = "";
  inputNumero.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector(`tbody`);
  corpoTabela.innerHTML = linhas;
}
