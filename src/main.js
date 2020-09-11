import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './service/exchange-service.js';
import { Currency } from '../service/exchange-service';

let exchangeService = new ExchangeService

let request = new XMLHttpRequest();

const exchangeRateUrl = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`

$(document).ready(function () {
  $('#conversionRate').click(function () {
    event.preventDefault();
    let currency = $('#money').val();
  });

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      let currency = new Currency(response.base_code, response.conversion_rates);
      getElements(currencyExchange);
    }
  }

  request.open("GET", exchangeRateUrl, true);
  request.send();

  function getElements(currencyExchange) {
    for (let i = 0; i < currencyExchange.length; i++)
    

})