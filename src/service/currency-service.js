export default class CurrencyService {

  static async Currency() {
    const API_URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    // `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest`;
    const res = await fetch(API_URL);
    const data = await res.json();
    return data
  }
}
