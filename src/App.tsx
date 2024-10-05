import { useEffect } from 'react';

import AppRouter from '@/router/AppRouter';
import { useAuthStore } from '@/stores/auth.store';
import { LoadingSpinner } from '@/components/LoadingSpinner';


const App = () => {
  const authStore = useAuthStore();

  useEffect(() => {
    authStore.onCheckAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authStore.isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <LoadingSpinner size='lg' className="text-indigo-600"/>
      </div>
    );
  }

  return <AppRouter />;
};

export default App;
