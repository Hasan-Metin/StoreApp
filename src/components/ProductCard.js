import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

/*{
    "id": 0,
    "title": "Xiaomi Mi True Wireless Earbuds",
    "imgURL": "https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg",
    "price": "₺134,77",
    "inStock": true
}*/

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.productImage} />
      {product.inStock && <Text style={styles.soldOut}>SOLD OUT</Text>}
      <View style={styles.textContainer}>
        <Text>{product.title}</Text>
        <Text style={styles.priceText}>{product.price}</Text>
      </View>
    </View>
  );
};

export {ProductCard};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    flex: 1,
  },
  productImage: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  priceText: {fontWeight: 'bold'},
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  soldOut: {
    position: 'absolute',
    top: '35%',
    left: '10%',
    fontSize: 30,
    transform: [{rotate: '-45deg'}],
    color: 'tomato',
    fontWeight: 'bold',
  },
});
