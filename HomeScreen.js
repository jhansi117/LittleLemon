import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { init, fetchMenuItems } from '../database/db';
import MenuItem from '../components/MenuItem';

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    init()
      .then(() => {
        return fetchMenuItems();
      })
      .then(items => {
        setMenuItems(items);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleOrder = (item) => {
    navigation.navigate('Order', { item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuItem item={item} onOrder={handleOrder} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
