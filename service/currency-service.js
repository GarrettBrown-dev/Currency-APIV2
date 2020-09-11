export default class CurrencyService {
  constuctor() {
    this.currencyExchange = []
    this.currentID = 0
  }
  addCurrency(currency) {
    currency.id = this.assignId();
    this.CurrencyService.push(currency);
  }
  assignId() {
    this.currentID += 1;
    return this.currentID;
  }
}


export class Currency {
  constructor(base_code, conversion_rates) {
    this.base_code = baseCode
    this.conversion_rates = conversionRates
  }
}

