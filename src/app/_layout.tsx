import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';

// gestor de estado de tareas asíncronas
const queryClient = new QueryClient();

const RooutLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>

        <Stack
          screenOptions={
            {
              headerShown: false,
            }
          }
        />
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

export default RooutLayout