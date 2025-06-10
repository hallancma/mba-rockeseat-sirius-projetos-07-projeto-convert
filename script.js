// Cotação de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;


//Obtendo os elementos
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacteresRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacteresRegex, "");
});


//Captando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "€");
      break;

  }
}



//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Atualiza o texto do elemento description
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //Calcula o valor total
    let total = amount * price;

    //Verifica se o valor total é um número
    if (isNaN(total)) {
      alert("Digite um valor válido");
      return;
    }

    //Formatar o valor total para o padrão brasileiro
    total = formatCurrencyBRL(total).replace("R$", "").trim();
    result.textContent = `${total} Reais`;

    // Aplica a classe que exibe o resultado
    footer.classList.add("show-result");
    console.log(result);

  } catch (error) {
    console.log(error);

    // Remove a classe que exibe o resultado
    footer.classList.remove("show-result");
    alert("Erro ao converter a moeda");
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}



