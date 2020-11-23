import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';

import product_data from './product_data.json';
import {ProductCard, SerachBar} from './components';

const renderListItem = ({item}) => <ProductCard product={item} />;

const Main = () => {
  const [searcValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState(product_data);

  useEffect(() => {
    Alert.alert('Welcome Demo Store!');
  }, []);

  useEffect(() => {
    const filteredValue = product_data.filter((item) => {
      const serchedText = searcValue.toLowerCase();
      const productTitle = item.title.toLowerCase();

      return productTitle.indexOf(serchedText) > -1;
    });
    setDisplayList(filteredValue);
  }, [searcValue]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.safe}>
        <Text style={styles.banner}>Demo Store</Text>
        <SerachBar search={(text) => setSearchValue(text)} />
        <FlatList
          data={displayList}
          renderItem={renderListItem}
          keyExtractor={(item, _) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  banner: {
    color: 'purple',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBar: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#eceff1',
  },
  safe: {flex: 1},
});
