import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Parse from '../../services/back4app';

export default function Profissional() {
  const [dados, setDados] = useState([
    { 
      id: '1', 
      cargo: 'Desenvolvedor Mobile & Backend', 
      empresa: 'Projetos Acadêmicos & CapituLando', 
      descricao: 'Desenvolvimento de aplicações mobile em React Native (Expo) e arquitetura de APIs/bancos de dados para plataformas web e mobile.' 
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = new Parse.Query('Profissional');
        const results = await query.find();
        if (results && results.length > 0) {
          setDados(results.map(item => ({ id: item.id, ...item.toJSON() })));
        }
      } catch (err) {
        console.error('Erro ao buscar dados profissionais:', err);
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
      <Text style={styles.headerTitle}>Experiência Profissional</Text>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.cargo}</Text>
            <Text style={styles.subtitle}>{item.empresa}</Text>
            <Text style={styles.desc}>{item.descricao}</Text>
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
  subtitle: { fontSize: 14, color: '#6366f1', marginTop: 4 },
  desc: { fontSize: 13, color: '#94a3b8', marginTop: 8 },
});