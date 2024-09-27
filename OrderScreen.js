import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrderScreen = ({ route }) => {
  const { item } = route.params;

  const handleConfirmOrder = () => {
    // Logic for confirming the order can go here
    alert(`Order confirmed for ${item.title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order for: {item.title}</Text>
      <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
      <Button title="Confirm Order" onPress={handleConfirmOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default OrderScreen;
