import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { TransactionsView } from './pages/Transactions';
import Scan from './pages/Scan';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex h-screen bg-background overflow-hidden'>
      <Sidebar />
      <main className='flex-1 overflow-y-auto'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsView />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;