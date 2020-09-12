import $ from 'jquery';
// import CurrencyService, { Currency } from './service/currency-services';


$(document).ready(() => {
  $('#submit-add').click(async function (event) {
    event.preventDefault();
    const currency = $('select#currencies').val();
    const exchangeRateUrl = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`;

    try {
      const response = await fetch(exchangeRateUrl);
      const jsonResponse = await response.json();
    } catch (error) {
      console.log("error: ", error);
      // alert("sup wit this error");
    }

  });
});



// request.onreadystatechange = function (response) {
//   if (this.readyState === 4 && this.status === 200) {
//     const response = JSON.parse(this.response);
//     let currency = new Currency(response.base_code, response.conversion_rates);
//     currencyService.addCurrency(currency)
//     getElements(currencyService);
//   }
// }

// request.open("GET", exchangeRateUrl, true);
// request.send();

// function getElements(currencyService) {
//   for (let i = 0; i < currencyService.length; i++) {
//     $(`#result`).html(` <div id="$(currencyService[i].conversion_rates"></div>`)
//     $("$(currencyService[i].conversion_rates").text$(currencyService[i].conversion_rates)
//   }
// }
