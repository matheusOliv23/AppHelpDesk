import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function Routes() {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
