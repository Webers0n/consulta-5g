const consulta = document.querySelector(".modelo");
const resultado = document.querySelector("#resultado");

const lista1 = ["teste", "iPhone 13", "Galaxy S21", "Redmi Note 12"]; // exemplo

const vozEDados = ["Redmi A3","Redmi note 7","Redmi note 8","Redmi note 8 Pro","Redmi 10C","Redmi note 11","Redmi note 12","Redmi 12C","Redmi 13","Redmi 13C","Redmi 13 Pro","iPhone 7","iPhone 7 Plus","iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max","iPhone 12 Pro Max","iPhone 13","iPhone X","iPhone XS","iPhone XR","Poco X3","Poco X5","Poco X5 Pro","Poco X6 Pro","Poco C65","Samsung A12","Samsung A13","Samsung A14","Samsung A15","Samsung A03","Samsung A03 Core","Samsung A04","Samsung A04S","Samsung A04E","Samsung A05","Samsung A05S","Samsung A23","Samsung S23","Samsung S23 Ultra","Samsung A32","Samsung A34","Samsung A35","Samsung A53","Samsung A71","Samsung A72","Samsung M13","Samsung M15","Samsung M23","Samsung M53","Samsung M62","Moto E13","Moto G14","Moto G34","Moto G53","Moto G54","Moto G60","Moto G73","Moto G84","Moto G04S","Moto G71"];

    const dadosApenas = ["LGK41","LGK41S","LGK52","LGK62","LGK22","Moto E22","Moto E40","Moto G10","Moto G20","Moto G24","Moto G32","Moto G52","Moto G71","M21S","iPhone 6S","Galaxy S20 FE","Samsung Pro","Samsung A31","Samsung A50","Samsung A52","A20","A20S","A30S","A31","Realme C11","Realme C33","Realme C53","Realme C55","Realme C67","Realme Note 50","Redmi 9A","Redmi A2","Redmi Note 9","Redmi Note 9 Pro","Redmi Note 9C","Redmi 10A","Redmi Note 10S","Redmi Note 12S"];

    const incompativeis = ["A01","A02S","A03S","A10","Galaxy A01","Samsung A10S","Samsung S10","Samsung A11","Moto One Macro","Moto G8","Moto G9 Plus","J4","J4 Core","J7 Prime","Redmi note 6 Pro","Mi A2","G Max 2 SE 63","LG K9","LG K10","LG K12 MAX","Philco PCS02"];

const todas = [...vozEDados, ...dadosApenas, ...incompativeis];

consulta.addEventListener("input", function () {
    const valorDigitado = consulta.value.toLowerCase();

    // Limpa sugestões anteriores
    sugestoes.innerHTML = "";

    if (valorDigitado === "") {
        resultado.innerHTML = "";
        botaoAvancar.style.display = "none";
        return;
    }

    // Sugestões filtradas
    const filtrados = todas.filter(modelo =>
        modelo.toLowerCase().includes(valorDigitado)
    );

    // Mostrar sugestões
    filtrados.slice(0, 5).forEach(modelo => {
        const div = document.createElement("div");
        div.textContent = modelo;
        div.addEventListener("click", () => {
            consulta.value = modelo;
            consulta.dispatchEvent(new Event("input")); // Força atualização
            sugestoes.innerHTML = "";
        });
        sugestoes.appendChild(div);
    });

    // Verificações
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
        resultado.innerHTML = `❓ Aparelho não encontrado`;
        resultado.style.color = "gray";
        botaoAvancar.style.display = "none";
    }
});

// Botão redireciona para outro site (exemplo)
botaoAvancar.addEventListener("click", function () {
    window.location.href = "https://vendas5g.brisanet.net.br/brisanet/pt/BRL/";
});
