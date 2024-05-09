import Dropdown from './components/Dropdown';
import Input from './components/Input';
import { useState, useEffect } from 'react';

const currencies = [
  { value: 'USD', label: '🇺🇸 US Dollar (USD)' },
  { value: 'EUR', label: '🇪🇺 Euro (EUR)' },
  { value: 'GBP', label: '🇬🇧 British Pound (GBP)' },
  { value: 'JPY', label: '🇯🇵 Japanese Yen (JPY)' },
  { value: 'SEK', label: '🇸🇪 Swedish Krona (SEK)' },
];

function App() {
  const [fromAmount, setFromAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toAmount, setToAmount] = useState('');
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [exchangeRates, setExchangeRates] = useState(
    {} as Record<string, number>
  );

  useEffect(() => {
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=${
        import.meta.env.VITE_FREE_CURRENCY_API_KEY
      }&currencies=JPY%2CEUR%2CSEK%2CGBP`
    )
      .then((response) => response.json())
      .then((data) =>
        setExchangeRates({
          USD: 1, // makes calculations easier below
          ...data.data,
        })
      )
      .catch((error) => console.error('Error:', error));

    // For testing without using the API:
    // setExchangeRates({
    //   USD: 1,
    //   EUR: 0.9293701295,
    //   GBP: 0.7972400898,
    //   JPY: 153.6111194188,
    //   SEK: 10.8148612711,
    // });
  }, []);

  useEffect(() => {
    if (fromAmount && fromCurrency && toCurrency) {
      const fromRate = exchangeRates[fromCurrency.value];
      const toRate = exchangeRates[toCurrency.value];

      setToAmount(
        ((parseFloat(fromAmount) / fromRate) * toRate).toFixed(2).toString()
      );
    }
  }, [fromAmount, fromCurrency, toCurrency, exchangeRates]);

  return (
    <>
      <h1>Currency Converter</h1>

      <div className='form-group'>
        <Dropdown
          name='fromCurrency'
          label='Source Currency'
          value={fromCurrency}
          onChange={(newValue) => setFromCurrency(newValue!)}
          options={currencies}
        />

        <Input
          name='fromAmount'
          label='Amount'
          value={fromAmount}
          onChange={(e) => setFromAmount(e.target.value)}
          type='number'
        />
      </div>

      <div className='form-group'>
        <Dropdown
          name='toCurrency'
          label='Target Currency'
          value={toCurrency}
          onChange={(newValue) => setToCurrency(newValue!)}
          options={currencies.filter((c) => c.value !== fromCurrency.value)}
        />

        <Input
          name='toAmount'
          label='Result'
          value={toAmount}
          onChange={(e) => setToAmount(e.target.value)}
          type='number'
          disabled
        />
      </div>
    </>
  );
}

export default App;
