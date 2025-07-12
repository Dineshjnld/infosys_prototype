import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Satellite, 
  TrendingUp, 
  Settings,
  Menu,
  X,
  Leaf
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'satellite', label: 'Satellite View', icon: Satellite },
    { id: 'market', label: 'Market Analysis', icon: TrendingUp },
    { id: 'farm', label: 'Farm Management', icon: Settings }
  ];

  const handlePageChange = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-200 px-6 py-4">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">AgriGuru</span>
            </div>
            <span className="text-sm text-gray-600 bg-green-100 px-2 py-1 rounded-full">
              SDG2: Zero Hunger
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => handlePageChange(item.id)}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-lg font-bold text-green-800">AgriGuru</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-green-200 bg-white">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    onClick={() => handlePageChange(item.id)}
                    className="w-full justify-start gap-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}