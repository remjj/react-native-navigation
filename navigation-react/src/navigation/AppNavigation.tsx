import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from '../pages/Homepage';
import CartScreen from '../pages/CartScreen';
import CheckoutScreen from '../pages/CheckoutScreen'; // ✅ Import CheckoutScreen

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Homepage" component={Homepage}  options={{ title: 'Menu' }}/>
                <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Your Cart' }}/>
                <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ title: 'Checkout' }}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
