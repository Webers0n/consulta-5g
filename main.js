const consulta = document.querySelector(".modelo");
const sugestoes = document.querySelector("#sugestoes");
const resultado = document.querySelector("#resultado");
const botaoAvancar = document.querySelector("#botaoAvancar");

let vozEDados = [],
  dadosApenas = [],
  incompativeis = [],
  todas = [];

fetch("data/modelos.json")
  .then((res) => res.json())
  .then((data) => {
    vozEDados = data.vozEDados;
    dadosApenas = data.dadosApenas;
    incompativeis = data.incompativeis;
    todas = [...vozEDados, ...dadosApenas, ...incompativeis];
  });

consulta.addEventListener("input", function () {
  const valorDigitado = consulta.value.toLowerCase().trim();
  sugestoes.innerHTML = "";

  if (valorDigitado === "") {
    resultado.innerHTML = "";
    botaoAvancar.style.display = "none";
    return;
  }

  const filtrados = todas.filter((modelo) =>
    modelo.toLowerCase().includes(valorDigitado)
  );

  filtrados.slice(0, 100).forEach((modelo) => {
    const div = document.createElement("div");
    div.textContent = modelo;
    div.addEventListener("click", () => {
      consulta.value = modelo;
      consulta.dispatchEvent(new Event("input"));
      sugestoes.innerHTML = "";
      consulta.focus();
    });
    sugestoes.appendChild(div);
  });

  const modeloSelecionado = filtrados.find(
    (m) => m.toLowerCase() === valorDigitado
  );

  if (!modeloSelecionado) {
    resultado.innerHTML = `❓ Aparelho não encontrado <br><br>O modelo informado não consta na base de compatibilidade. <a href="https://wa.me/qr/HAFC2JUK7KE2P1" style="color:#0077ff; text-decoration: underline;">Clique aqui</a> para informar o dispositivo e solicitar inclusão na lista.`;
    resultado.style.color = "gray";
    botaoAvancar.style.display = "none";
    return;
  }

  const ehVozEDados = vozEDados.includes(modeloSelecionado);
  const ehDadosApenas = dadosApenas.includes(modeloSelecionado);
  const ehIncompativel = incompativeis.includes(modeloSelecionado);

  if (ehVozEDados) {
    resultado.innerHTML = `✅ Aparelho compatível com 5G (Voz e Dados)`;
    resultado.style.color = "green";
    botaoAvancar.style.display = "inline-block";
  } else if (ehDadosApenas) {
    resultado.innerHTML = `⚠️ Compatível apenas com 5G para dados`;
    resultado.style.color = "orange";
    botaoAvancar.style.display = "inline-block";
  } else if (ehIncompativel) {
    resultado.innerHTML = `❌ Aparelho não é compatível com 5G`;
    resultado.style.color = "red";
    botaoAvancar.style.display = "none";
  }
});

botaoAvancar.addEventListener("click", function () {
  window.location.href = "https://vendas5g.brisanet.net.br/brisanet/pt/BRL/";
});
