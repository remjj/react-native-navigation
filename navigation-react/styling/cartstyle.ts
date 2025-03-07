import { StyleSheet } from 'react-native';

export const cartStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 20,
      },
      logo: {
        width: 70, 
        height: 70,
        marginRight: 8, 
      },

      logoTitle: {
        width: 250, 
        height: 50,
        resizeMode: 'contain',
      },
      
      // Shopping Cart Title
    title: {
        fontSize: 24,
        color: '#e09f3e',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    // Empty Cart
    emptyCartText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'gray',
    },

    //Cart Section
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff3b0',
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },

    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
    },

    itemDetails: {
        flex: 1,
    },

    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    itemPrice: {
        fontSize: 16,
        color: '#666',
    },

    quantityContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff3b0',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantityText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },

    //Remove Button
    removeButton: {
        backgroundColor: '#9e2a2b',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    removeButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },

    //Checkout Button
    checkoutButton: {
        backgroundColor: '#540b0e',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    checkoutText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    
});
