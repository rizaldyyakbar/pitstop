import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex min-h-screen bg-background'>
      <Sidebar />
      <main className='flex-1 overflow-y-auto'>
      <Dashboard />
    </main>
    </div>
  );
}

export default App;