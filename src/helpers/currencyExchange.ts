const objExchange:{ 'USD': number; 'EUR': number; 'UAH': number; 'PLN': number } = {
  'USD': 1, 
  'EUR': 1.2, 
  'UAH': 37, 
  'PLN': 4.5,
}


export const currencyExchange = (
  costPerUSD: number,
  typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN',
) => costPerUSD * objExchange[typeCurrency];