// src/components/affiliate/layout/AffiliateLayout.tsx
import { Outlet } from 'react-router-dom';
import AffiliateNavbar from '../components/affiliate/components/AffiliateNavbar';

const AffiliateLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-samish-light">
      {/* Header */}
      <AffiliateNavbar />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AffiliateLayout;
