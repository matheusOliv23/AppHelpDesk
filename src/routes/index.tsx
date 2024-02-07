import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './AppStack';
import { useAuth } from 'src/context/Auth';
import { AuthRoutes } from './AuthStack';

export function Routes() {
  const queryClient = new QueryClient();
  const { authData } = useAuth();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        {authData ? <AuthRoutes /> : <AppRoutes />}
      </QueryClientProvider>
    </NavigationContainer>
  );
}
