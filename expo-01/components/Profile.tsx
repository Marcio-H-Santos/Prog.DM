import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function Profile() {
  return (
    <View style={styles.container}>
      <Image
        // Coloque a URL da sua foto real ou mantenha essa de exemplo
        source={{ uri: 'https://github.com/github.png' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Márcio Henrique dos Santos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
});