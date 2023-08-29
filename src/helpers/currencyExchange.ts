const objExchange:{ 'USD': number; 'EUR': number; 'UAH': number; 'PLN': number } = {
  'USD': 1, 
  'EUR': 0.92494, 
  'UAH': 36.658, 
  'PLN': 4.13457,
}


export const currencyExchange = (
  costPerUSD: number,
  typeCurrency: 'USD' | 'EUR' | 'UAH' | 'PLN',
) => costPerUSD * objExchange[typeCurrency];