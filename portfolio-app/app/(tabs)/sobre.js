import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Sobre o App</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
        <Text style={styles.item}>• <Text style={styles.bold}>React Native / Expo:</Text> Framework base do aplicativo mobile.</Text>
        <Text style={styles.item}>• <Text style={styles.bold}>Expo Router:</Text> Navegação baseada em rotas com abas (Tabs).</Text>
        <Text style={styles.item}>• <Text style={styles.bold}>Back4App (Parse SDK):</Text> Backend BaaS para armazenamento de dados.</Text>
        <Text style={styles.item}>• <Text style={styles.bold}>AsyncStorage:</Text> Suporte para armazenamento local.</Text>
        <Text style={styles.item}>• <Text style={styles.bold}>Expo Vector Icons:</Text> Ícones da interface gráfica.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Funcionalidade Extra</Text>
        <Text style={styles.desc}>
          <Text style={styles.bold}>Curtidas em Tempo Real:</Text> Permite aos visitantes darem "likes" nos projetos, registando a alteração instantaneamente na interface e sincronizando com o banco de dados Back4App.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20, paddingTop: 60 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#f8fafc', marginBottom: 20 },
  card: { backgroundColor: '#1e293b', padding: 16, borderRadius: 12, marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#6366f1', marginBottom: 12 },
  item: { fontSize: 13, color: '#94a3b8', marginVertical: 4, lineHeight: 20 },
  desc: { fontSize: 13, color: '#94a3b8', lineHeight: 20 },
  bold: { color: '#f8fafc', fontWeight: 'bold' }
});