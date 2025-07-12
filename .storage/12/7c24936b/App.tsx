import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import SatelliteView from './pages/SatelliteView';
import MarketAnalysis from './pages/MarketAnalysis';
import FarmManagement from './pages/FarmManagement';

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'satellite':
        return <SatelliteView />;
      case 'market':
        return <MarketAnalysis />;
      case 'farm':
        return <FarmManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          {renderCurrentPage()}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
