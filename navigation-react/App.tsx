import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigation';
import { CartProvider } from './src/pages/CartContext';

export default function App() {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}
