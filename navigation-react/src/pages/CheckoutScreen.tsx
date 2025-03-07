import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../pages/CartContext';
import { checkoutStyles } from '../../styling/checkoutstyle'; 
import { cartStyles } from '../../styling/cartstyle';
import { useNavigation } from '@react-navigation/native';
import coffeelogo from '../../assets/coffeelogo.png';
import titleLogo from '../../assets/titleLogo.png';

const CheckoutScreen = () => {
  const { cart, clearCart } = useCart(); // Add clearCart
  const navigation = useNavigation();

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle Checkout
  const handleCheckout = () => {
    Alert.alert(
      'Checkout Successful',
      'Thank you for your purchase!',
      [{ text: 'OK', onPress: () => {
        clearCart(); 
        navigation.navigate('Homepage');
      }}]
    );
  };

  return (
    <View style={checkoutStyles.container}>
      {/* Logo Section */}
            <View style={cartStyles.logoContainer}>
            <Image source={coffeelogo} style={cartStyles.logo} />
            <Image source={titleLogo} style={cartStyles.logoTitle} />
            </View> 
      <Text style={checkoutStyles.title}>The Hive Exit</Text>

      {cart.length === 0 ? (
        <Text style={checkoutStyles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={checkoutStyles.cartItem}>
                <Image source={item.image} style={checkoutStyles.itemImage} />
                <View style={checkoutStyles.itemDetails}>
                  <Text style={checkoutStyles.itemName}>{item.name}</Text>
                  <Text style={checkoutStyles.itemPrice}>
                    ₱{item.price} x {item.quantity} = ₱{item.price * item.quantity}
                  </Text>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />

          {/* Total Price */}
          <Text style={checkoutStyles.totalPrice}>Total: ₱{totalPrice.toFixed(2)}</Text>

          {/* Checkout Button */}
          <TouchableOpacity onPress={handleCheckout} style={checkoutStyles.checkoutButton}>
            <Text style={checkoutStyles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CheckoutScreen;
