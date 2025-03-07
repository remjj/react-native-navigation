import { StyleSheet } from "react-native";

export const homestyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        overflow: 'hidden', // Removes scrollbar
    },

    viewContainer: {
        backgroundColor: '#FFF3B0',
        width: '100%',
        height: '15%',
        borderRadius: 2,
        flexDirection: 'row',  
        alignItems: 'center',   
        justifyContent: 'space-between', 
        paddingHorizontal: 20,  
    },

    coffeelogo: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
    },

    titleLogo: {
        width: 150, 
        height: 50,  
        resizeMode: 'contain',
    },

    shoppingCart: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },

    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#335c67',
        color: '#fff',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },

    productCard: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, 
    },

    productCardRow: {
        flexDirection: 'row',  // Horizontal layout
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: '100%',
    },

    productImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    productImageRow: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },

    productPrice: {
        fontSize: 16,
        color: '#444',
        marginTop: 5,
    },

    productDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
    },

    productDetails: {
        flex: 1,
        paddingRight: 10,
    },

    addToCartButton: {
        backgroundColor: '#e09f3e',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginTop: 8,
        alignSelf: 'flex-start',  // Align button to the left
    },

    addToCartText: {
        color: 'white',
        fontWeight: 'bold',
    },

    productCardColumn: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        alignItems: 'center', // Centers content in the column layout
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: '100%', // Adjust width for column layout
    },
});