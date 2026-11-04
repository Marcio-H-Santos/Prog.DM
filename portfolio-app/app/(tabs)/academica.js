import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Parse from '../../services/back4app';

export default function Academica() {
  const [dados, setDados] = useState([
    { id: '1', curso: 'Sistemas para Internet', instituicao: 'UNICAP', ano: '2025 - Cursando' }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = new Parse.Query('Academica');
        const results = await query.find();
        if (results && results.length > 0) {
          setDados(results.map(item => ({ id: item.id, ...item.toJSON() })));
        }
      } catch (err) {
        console.error('Erro ao buscar dados acadêmicos:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Formação Acadêmica</Text>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.curso}</Text>
            <Text style={styles.subtitle}>{item.instituicao}</Text>
            <Text style={styles.year}>{item.ano}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20, paddingTop: 60 },
  center: { flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#f8fafc', marginBottom: 20 },
  card: { backgroundColor: '#1e293b', padding: 16, borderRadius: 12, marginBottom: 12 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#f8fafc' },
  subtitle: { fontSize: 14, color: '#94a3b8', marginTop: 4 },
  year: { fontSize: 12, color: '#6366f1', marginTop: 8 },
});