import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './service/exchange-service.js';

function getElements(response) {
  if (response.main) {
    $(`.showConversion`).text(`The conversion for ${currency} is ${response.main.conversion_rates}`)
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(currency) {
  const response = await ExchangeService.getRate(currency);
  getElements(response);
}

$(document).ready(function () {
  $('#conversionRate').click(function () {
    let currency = $('#money').val();
    clearFields();
    makeApiCall(currency);
  });
});