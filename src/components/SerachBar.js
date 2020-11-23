import React from 'react';
import {StyleSheet, TextInput, View, Platform} from 'react-native';

const OS = Platform.OS;

const SerachBar = (props) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search products here..."
        onChangeText={(text) => props.search(text)}
      />
    </View>
  );
};

export {SerachBar};

const styles = StyleSheet.create({
  searchBar: {
    padding: OS === 'android' ? 0 : 7,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#eceff1',
  },
});
