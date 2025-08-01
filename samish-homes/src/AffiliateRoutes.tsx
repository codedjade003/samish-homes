import { Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoutes';
import AffiliateDashboard from './components/landing/AffiliateDashboard';
import AffiliateLayout from './layouts/AffiliateLayout';

export default function AffiliateRoutes() {
  return (
    <Route
      path="/affiliate"
      element={
        <ProtectedRoute allowedRoles={['public']}>
          <AffiliateLayout />
        </ProtectedRoute>
      }
    >
      <Route path="dashboard" element={<AffiliateDashboard />} />
    </Route>
  );
}
