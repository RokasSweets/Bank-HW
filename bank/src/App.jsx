import { useEffect, useState } from 'react';
import './App.css';
import AccountList from './components/AccountList';
import AccountSummary from './components/AccountSummary';
import AddNewAcccount from './components/AddNewAccount';

function App() {
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('accounts')) || []);

    const accountListGenerator = (name, lastName) => {
        setAccount(prev => [...prev, { name, lastName, id: Math.random(), sum: 0, value: '' }]);
    };

    useEffect(() => localStorage.setItem('accounts', JSON.stringify(account)), [account]);

  return (
        <div className='container border rounded mt-5'
        style={{
          background: `url(https://trikampis.online/wp-content/uploads/2023/02/wp6602988-scaled-e1677595476160.webp`,
          backgroundSize: 'auto'
        }}
        >
          <div className='row'>
            <div className='col-5'>
          <AccountSummary accounts={account}/>
          <AddNewAcccount accountListGenerator={accountListGenerator}/>
          </div>
          <AccountList accounts={account} setAccount={setAccount}/>
          </div>
        </div>
    );
}

export default App;
