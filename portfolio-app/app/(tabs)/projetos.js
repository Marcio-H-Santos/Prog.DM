import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Parse from '../../services/back4app';

export default function Projetos() {
  const [projetos, setProjetos] = useState([
    { id: '1', titulo: 'CapituLando', descricao: 'Plataforma para escritores gerenciarem histórias e cenários com Java e PostgreSQL/Supabase.', curtidas: 5 },
    { id: '2', titulo: 'Portfólio App', descricao: 'Aplicação Mobile desenvolvida com React Native, Expo Router e Back4App.', curtidas: 12 }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        const query = new Parse.Query('Projeto');
        const results = await query.find();
        if (results && results.length > 0) {
          setProjetos(results.map(item => ({
            id: item.id,
            titulo: item.get('titulo') || 'Projeto',
            descricao: item.get('descricao') || '',
            curtidas: item.get('curtidas') || 0,
            parseObject: item
          })));
        }
      } catch (err) {
        console.error('Erro ao buscar projetos:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjetos();
  }, []);

  async function handleLike(index) {
    const novosProjetos = [...projetos];
    novosProjetos[index].curtidas += 1;
    setProjetos(novosProjetos);

    const item = novosProjetos[index];
    if (item.parseObject) {
      try {
        item.parseObject.increment('curtidas');
        await item.parseObject.save();
      } catch (error) {
        console.error('Erro ao salvar curtida no Back4App:', error);
      }
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Projetos</Text>
      <FlatList
        data={projetos}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.desc}>{item.descricao}</Text>
            <TouchableOpacity style={styles.likeButton} onPress={() => handleLike(index)}>
              <Ionicons name="heart" size={20} color="#ef4444" />
              <Text style={styles.likeText}>{item.curtidas}</Text>
            </TouchableOpacity>
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
  desc: { fontSize: 13, color: '#94a3b8', marginTop: 6, marginBottom: 12 },
  likeButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#334155', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, selfAlign: 'flex-start' },
  likeText: { color: '#f8fafc', marginLeft: 6, fontWeight: 'bold' }
});