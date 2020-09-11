import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import exchangeService from './service/exchangeService.js';

function getElements(response) {
  if (response.main) {
    $(`.showConversion`).text(`The conversion for ${currency} is ${response.main.conversion_rates}`)
    debugger
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(currency) {
  const response = await CurrencyService.getRate(currency);
  getElements(response);
}

$(document).ready(function () {
  $('#').click(function () {
    let currency = $('#').val();
    clearFields();
    makeApiCall(currency);
  });
});