# Consulta 5G - Verificador de Aparelhos Compatíveis

Este projeto foi desenvolvido para facilitar o trabalho dos técnicos em campo da empresa, agilizando a consulta de compatibilidade dos modelos de celulares com a rede 5G.

## Sobre

Durante os atendimentos, os técnicos precisam verificar rapidamente se o aparelho do cliente é compatível com a rede 5G (voz e dados), apenas para dados, ou se é incompatível. Esta aplicação web simples e leve permite essa consulta de forma rápida e prática, sem perda de tempo.

## Funcionalidades

- Busca dinâmica com sugestões à medida que o técnico digita o modelo do celular.
- Exibição clara da compatibilidade do aparelho:
  - ✅ Compatível com voz e dados
  - ⚠️ Compatível apenas para dados
  - ❌ Incompatível com a rede 5G
- Botão para acessar diretamente a página de cadastro do chip 5G, quando o modelo for compatível.
- Base de dados dos modelos armazenada em arquivo JSON, facilitando atualizações.

## Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (vanilla)  
- JSON para dados

## Estrutura do Projeto

```
/
├── index.html        # Página principal da aplicação
├── style.css         # Estilos CSS para o layout e visual
├── main.js           # Script JavaScript que controla a busca e resultados
└── data/
    └── modelos.json  # Base de dados dos modelos compatíveis
```

## Como Usar

1. Abra o arquivo `index.html` no navegador.  
2. Digite o modelo do celular no campo de busca.  
3. Escolha o modelo correto nas sugestões que aparecerão.  
4. Veja o resultado da compatibilidade logo abaixo.  
5. Se o aparelho for compatível, clique em **Acessar Cadastro** para ir para a página de ativação do chip 5G.

## Atualizando a Lista de Modelos

Para atualizar ou adicionar modelos, edite o arquivo `data/modelos.json` mantendo o seguinte formato:

```json
{
  "vozEDados": ["Modelo 1", "Modelo 2"],
  "dadosApenas": ["Modelo Dados 1", "Modelo Dados 2"],
  "incompativeis": ["Modelo Não Compatível 1", "Modelo Não Compatível 2"]
}
```

## Contato e Suporte

Se o modelo do aparelho não estiver listado, utilize o link disponível na aplicação para solicitar a inclusão do dispositivo na lista.

---

© 2025 - Desenvolvido por Weberson Oliveira
