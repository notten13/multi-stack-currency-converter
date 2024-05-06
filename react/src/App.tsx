import Dropdown from './components/Dropdown';
import Input from './components/Input';
import { useState } from 'react';

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
          label='Convert To Currency'
          value={toCurrency}
          onChange={(newValue) => setToCurrency(newValue!)}
          options={currencies}
        />

        <Input
          name='toAmount'
          label='Amount'
          value={toAmount}
          onChange={(e) => setToAmount(e.target.value)}
          type='number'
        />
      </div>
    </>
  );
}

export default App;
