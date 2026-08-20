import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MiniBio } from '../components/MiniBio';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>

      <MiniBio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1F2937',
    maxWidth: 280,
  },
});