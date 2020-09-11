import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService, { Currency } from './service/exchange-service.js';

let currencyService = new CurrencyService

let request = new XMLHttpRequest();

const exchangeRateUrl = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`

$(document).ready(function () {
  $('#conversionRate').submit(function () {
    event.preventDefault();
    let currency = $('select#base_code').val();
  });


  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      let currency = new Currency(response.base_code, response.conversion_rates);
      currencyService.addCurrency(currency)
      getElements(currencyService);
    }
  }

  request.open("GET", exchangeRateUrl, true);
  request.send();

  function getElements(currencyService) {
    for (let i = 0; i < currencyService.length; i++)
      $(`#result`).html(` <div id="$(currencyService[i].conversion_rates"></div>`)
    $("$(currencyService[i].conversion_rates").text$(currencyService[i].conversion_rates)
  }
})