import React from 'react';
import { ImageBackground, View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../pages/CartContext';
import { cartStyles } from '../../styling/cartstyle';
import { useNavigation } from '@react-navigation/native';
import coffeelogo from '../../assets/coffeelogo.png';
import titleLogo from '../../assets/titleLogo.png';

const CartScreen = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigation = useNavigation();

  // Function  Item Removal
  const handleRemoveFromCart = (id: string) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from your cart?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", onPress: () => removeFromCart(id), style: "destructive" }
      ]
    );
  };

  // Function to Proceedd Checkout
  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      Alert.alert('Your cart is empty!', 'Add items before checking out.');
      return;
    }
    navigation.navigate('CheckoutScreen'); 
  };

  return (
    <View style={cartStyles.container}>
      {/* Logo Section */}
      <View style={cartStyles.logoContainer}>
      <Image source={coffeelogo} style={cartStyles.logo} />
      <Image source={titleLogo} style={cartStyles.logoTitle} />
      </View>

      <Text style={cartStyles.title}>Buzzy Basket</Text>

      {cart.length === 0 ? (
        <Text style={cartStyles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={cartStyles.cartItem}>
                <Image source={item.image} style={cartStyles.itemImage} />
                <View style={cartStyles.itemDetails}>
                  <Text style={cartStyles.itemName}>{item.name}</Text>
                  <Text style={cartStyles.itemPrice}>₱{item.price * item.quantity}</Text>

                  {/* Quantity Control Options*/}
                  <View style={cartStyles.quantityContainer}>
                    <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={cartStyles.quantityButton}>
                      <Text>-</Text> 
                    </TouchableOpacity>

                    {/* Quantity Display */}
                    <Text style={cartStyles.quantityText}>{item.quantity}</Text>

                    <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={cartStyles.quantityButton}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Remove Item Button */}
                  <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)} style={cartStyles.removeButton}>
                    <Text style={cartStyles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />

          {/* Proceed to Checkout Button */}
          <TouchableOpacity onPress={handleProceedToCheckout} style={cartStyles.checkoutButton}>
            <Text style={cartStyles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CartScreen;
