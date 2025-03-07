import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert, SectionList } from 'react-native';
import { Props } from '../navigation/props';
import { homestyles } from '../../styling/homestyle';
import { useCart } from '../pages/CartContext';

import coffeelogo from '../../assets/coffeelogo.png';
import shoppingcart from '../../assets/shoppingcart.png';
import titleLogo from '../../assets/titleLogo.png';

//Images for Hot Coffee
import espressoImage from '../../assets/espresso.png';
import hotcappuccino from '../../assets/hotcappuccino.png';
import hotLatte from '../../assets/hotLatte.png';
import hotMocha from '../../assets/hotMocha.jpg';

//Images for Iced Coffee
import icedEspresso from '../../assets/icedEspresso.jpg';
import americanoImage from '../../assets/americano.jpeg';
import mochaLatte from '../../assets/mochaLatte.jpg';
import macchiatoCoffee from '../../assets/macchiatoCoffee.jpg';
//Images for Non-coffee
import matchaImage from '../../assets/matchaLatte.jpg';
import hotChoco from '../../assets/hotChoco.jpg';
import icedTea from '../../assets/icedTea.jpg';
import strawberryMilk from '../../assets/strawberryMilk.jpg';
// Images for Frappuccinos
import vanillaFrappe from '../../assets/vanillaFrappe.jpg';
import caramelVanilla from '../../assets/caramelVanilla.jpg';

const coffeeSections = [
    {
        title: "Hot Beverages",
        data: [
            { id: '1', name: 'Stingpresso', price: 100, description: 'Strong and bold shot of coffee.', image: espressoImage },
            { id: '2', name: 'Hiveccino', price: 140, description: 'A cappucino smooth as a honeycomb.', image: hotcappuccino },
            { id: '3', name: 'Blaze Latte ', price: 140, description: 'A warm, velvety latte with a kick.', image: hotLatte },
            { id: '4', name: 'Mocha Surge', price: 145, description: 'Rich mocha that has an electrifying buzz.', image: hotMocha },
        ]
    },
    {
        title: "Signature Iced Coffees",
        data: [
            { id: '5', name: 'Chillpresso', price: 100, description: 'A strong and refreshing iced esspresso shot.', image: icedEspresso },
            { id: '6', name: 'Americano', price: 120, description: 'Espresso diluted with hot water.', image: americanoImage },
            { id: '7', name: 'Buzzed Mocha', price: 150, description: 'An espresso infused with chocolate and steamed milk.', image: mochaLatte },
            { id: '8', name: 'Macchiato', price: 160, description: 'Espresso with a dash of frothy milk.', image: macchiatoCoffee },
        ]
    },
    {
        title: "Non-Coffee Based",
        data: [
            { id: '9', name: 'Matcha Buzz', price: 130, description: 'Smooth, creamy matcha with a refreshing kick.', image: matchaImage },
            { id: '10', name: 'Breezy Iced Tea', price: 100, description: 'Refreshing iced tea.', image: icedTea },
            { id: '11', name: 'Choco Rush', price: 110, description: 'Rich chocolate drink.', image: hotChoco },
            { id: '12', name: 'Berry Bliss Milk', price: 110, description: 'Sweet strawberry milk.', image: strawberryMilk },
        ]
    },
    {
        title: "Frappuccinos",
        data: [
            { id: '13', name: 'Vanilla Frostbuzz', price: 150, description: 'Creamy vanilla blended with ice.', image: vanillaFrappe },
            { id: '14', name: 'Caramel Drizzle Frostbuzz', price: 160, description: 'Caramel-infused vanilla frappuccino.', image: caramelVanilla },
        ]
    }
];

const Homepage: React.FC<Props> = ({ navigation }) => {
    const { addToCart } = useCart(); 

    const handleAddToCart = (item: any) => {
        addToCart({ ...item, quantity: 1 });
        Alert.alert("Added to Cart", `${item.name} has been added to your cart! 🛒`, [{ text: "OK", style: "default" }]);
    };

    return (
        <View style={homestyles.container}>
            <View style={homestyles.viewContainer}>
                <Image style={homestyles.coffeelogo} source={coffeelogo} />
                <Image style={homestyles.titleLogo} source={titleLogo} />
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={homestyles.shoppingCart} source={shoppingcart} />
                </TouchableOpacity>
            </View>

            <SectionList
                sections={coffeeSections}
                keyExtractor={(item) => item.id}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={homestyles.sectionHeader}>{title}</Text>
                )}
                renderItem={({ item }) => (
                    <View style={homestyles.productCardRow}>
                        <View style={homestyles.productDetails}>
                            <Text style={homestyles.productName}>{item.name}</Text>
                            <Text style={homestyles.productPrice}>₱{item.price}</Text>
                            <Text style={homestyles.productDescription}>{item.description}</Text>
                            <TouchableOpacity
                                style={homestyles.addToCartButton}
                                onPress={() => handleAddToCart(item)}
                            >
                                <Text style={homestyles.addToCartText}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={item.image} style={homestyles.productImageRow} />
                    </View>
                )}
                contentContainerStyle={homestyles.scrollView}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Homepage;
