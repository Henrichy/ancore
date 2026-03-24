import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ReceiveScreen } from './screens/ReceiveScreen';
import { SettingsScreen } from './screens/Settings/SettingsScreen';
import './index.css'; // Standardized on index.css

function App() {
  const [view, setView] = useState<'receive' | 'settings'>('receive');
  const [network, setNetwork] = useState<'mainnet' | 'testnet' | 'futurenet'>('testnet');

  return (
    <React.StrictMode>
      {/* Container from 'main' to maintain consistent UI width */}
      <div className="w-[360px] min-h-screen bg-slate-100 mx-auto shadow-xl flex flex-col items-center p-6 gap-4">
        
        {/* Simple Navigation for development */}
        <div className="flex gap-2 mb-4">
          <button onClick={() => setView('receive')} className="text-xs underline">Receive</button>
          <button onClick={() => setView('settings')} className="text-xs underline">Settings</button>
        </div>

        {view === 'receive' ? (
          <ReceiveScreen
            account={{
              publicKey: 'GD6SZQJNKL3ZYXPWLUVFXZNXUVXJTQPWMQHZMDMQHLS5VNLQBQNPFLM',
              name: 'My Stellar Wallet',
            }}
            network={network}
            onBack={() => setView('settings')}
          />
        ) : (
          <SettingsScreen />
        )}
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);