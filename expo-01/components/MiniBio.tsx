import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Profile } from './Profile';

export function MiniBio() {
  return (
    <View style={styles.card}>
      <Profile />
      <Text style={styles.phrase}>
        "Sou estudande da UNICAP. Estou no quarto período, cursando Sistemas para Internet."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    width: '90%',
    maxWidth: 320,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  phrase: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 20,
  },
});