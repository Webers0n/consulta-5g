const consulta = document.querySelector(".modelo");
const sugestoes = document.querySelector("#sugestoes");
const resultado = document.querySelector("#resultado");
const botaoAvancar = document.querySelector("#botaoAvancar");

// As listas dos aparelhos
const vozEDados = [
    // Xiaomi
    "Redmi A3", "Redmi note 7", "Redmi note 8", "Redmi note 8 Pro", "Redmi 10C", "Redmi note 11",
    "Redmi note 12", "Redmi 12C", "Redmi 13", "Redmi 13C", "Redmi 13 Pro", "Redmi Note 13 5G","Redmi 12",
    "Poco X3", "Poco X5", "Poco X5 Pro", "Poco X6 Pro", "Poco C65", "Poco X7", "Poco X7 Pro",

    // Apple iPhone
    "iPhone 7", "iPhone 7 Plus", "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
    "iPhone 12 Pro Max", "iPhone 13", "iPhone X", "iPhone XS", "iPhone XR",

    // Samsung
    "Samsung A03", "Samsung A03 Core", "Samsung A04", "Samsung A04S", "Samsung A04E",
    "Samsung A05", "Samsung A05S", "Samsung A12", "Samsung A13 5G", "Samsung A14", "Samsung A15",
    "Samsung A16 5G", "Samsung A23", "Samsung A32", "Samsung A34", "Samsung A35", "Samsung A53",
    "Samsung A54", // Galaxy A54
    "Samsung A71",
    "Samsung M13", "Samsung M15", "Samsung M23", "Samsung M53", "Samsung M62",
    "Samsung S23", "Samsung S23 Ultra", "Samsung Galaxy S20 FE 5G",

    // Motorola
    "Moto E13", "Moto G14", "Moto G34", "Moto G53", "Moto G54", "Moto G60",
    "Moto G73", "Moto G84", "Moto G04S", "Moto G71"
];

const dadosApenas = [
    // LG
    "LGK41", "LGK41S", "LGK52", "LGK62",

    // Motorola
    "Moto E22", "Moto E40", "Moto G10", "Moto G20", "Moto G24", "Moto G32", "Moto G52", "M21S", "Moto One Macro", "Moto G6","Moto G30", "Moto G22",

    // Apple iPhone
    "iPhone 6S",

    // Samsung
    "Samsung Pro", "Samsung A31", "Samsung Galaxy A50", "Samsung Galaxy A52", "Samsung Galaxy A20", "Samsung Galaxy A20S", "Samsung Galaxy A30S", "Samsung Galaxy S20 FE",

    // Realme
    "Realme C11", "Realme C33", "Realme C53", "Realme C55", "Realme C67", "Realme Note 50", "Realme C51", "Redmi Note 13","Redmi Note 9","Redmi 9","Redmi 8","Redmi Note 7","Redmi 8 Pro",

    // Xiaomi
    "Redmi 9A", "Redmi A2", "Redmi Note 9", "Redmi Note 9 Pro", "Redmi Note 9C", "Redmi 10A", "Redmi Note 10S","OPPO Reno13 5G"
];

const incompativeis = [
    // Samsung (incompatíveis)
    "Galaxy A01", "Samsung A10S", "Samsung S10", "Samsung A11",
    "Samsung J7 Prime", "Samsung J7", "Samsung J6", "Samsung A13", "Samsung A72","Galaxy A1",
  "Galaxy A2","Samsung J2","Samsung J4",

    // Motorola (incompatíveis)
    "Moto One Macro", "Moto G8", "Moto G9 Plus", "Moto G9","Samsung A5",

    // Xiaomi
    "Redmi note 6 Pro", "Mi A2", "Samsung Galaxy A31", "Redmi 12C", "Redmi A3","Redmi 7","Xiaomi A1","Xiaomi A2",

    // LG
    "LG K9", "LG K10", "LG K12 MAX", "LG K22",

    // Outros
    "A02S", "A03S", "A10", "J4", "J4 Core", "J7 Prime",
    "G Max 2 SE 63", "Philco PCS02", "iPhone 8 Plus", "Samsung Galaxy A30", "Samsung Galaxy A31S"
];

// Junta tudo para busca
const todas = [...vozEDados, ...dadosApenas, ...incompativeis];

consulta.addEventListener("input", function () {
    const valorDigitado = consulta.value.toLowerCase().trim();

    // Limpa sugestões anteriores
    sugestoes.innerHTML = "";

    if (valorDigitado === "") {
        resultado.innerHTML = "";
        botaoAvancar.style.display = "none";
        return;
    }

    // Filtra sugestões
    const filtrados = todas.filter(modelo =>
        modelo.toLowerCase().includes(valorDigitado)
    );

    // Exibe até 5 sugestões
    filtrados.slice(0, 100).forEach(modelo => {
        const div = document.createElement("div");
        div.textContent = modelo;
        div.addEventListener("click", () => {
            consulta.value = modelo;
            consulta.dispatchEvent(new Event("input")); // atualiza resultado
            sugestoes.innerHTML = "";
            consulta.focus();
        });
        sugestoes.appendChild(div);
    });

    // Verifica se a busca é exatamente um modelo da lista
    const modeloSelecionado = filtrados.find(m =>
        m.toLowerCase() === valorDigitado
    );

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
    } else {
        resultado.innerHTML = `❓ Aparelho não encontrado <br><br>O modelo informado não consta na base de compatibilidade. <a href="https://wa.me/qr/HAFC2JUK7KE2P1" style="color:#0077ff; text-decoration: underline;">Clique aqui</a> para informar o dispositivo e solicitar inclusão na lista.`;
        resultado.style.color = "gray";
        botaoAvancar.style.display = "none";
    }
});

botaoAvancar.addEventListener("click", function () {
    window.location.href = "https://vendas5g.brisanet.net.br/brisanet/pt/BRL/";
});
