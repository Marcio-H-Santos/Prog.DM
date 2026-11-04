import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Parse from '../../services/back4app';

export default function Home() {
  const [perfil, setPerfil] = useState({
    nome: 'Márcio Henrique dos Santos',
    bio: 'Desenvolvedor Mobile & Software Engineer',
    email: 'marcio.00000860052@unicap.br',
    github: 'https://github.com/Marcio-H-Santos',
    linkedin: 'https://linkedin.com/in/marcio',
    fotoUrl: 'https://github.com/Marcio-H-Santos.png'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPerfil() {
      try {
        const query = new Parse.Query('Perfil');
        const results = await query.find();
        if (results && results.length > 0) {
          const data = results[0].toJSON();
          setPerfil(prev => ({
            ...prev,
            ...data,
            nome: data.nome || prev.nome,
            bio: data.bio || prev.bio,
            email: data.email || prev.email,
            github: data.github || prev.github,
            linkedin: data.linkedin || prev.linkedin,
            fotoUrl: data.fotoUrl || prev.fotoUrl,
          }));
        }
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPerfil();
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
      {perfil.fotoUrl ? (
        <Image source={{ uri: perfil.fotoUrl }} style={styles.avatarImage} />
      ) : (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{perfil.nome ? perfil.nome[0] : 'M'}</Text>
        </View>
      )}

      <Text style={styles.name}>{perfil.nome}</Text>
      <Text style={styles.bio}>{perfil.bio}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contato</Text>
        <Text style={styles.cardText}>Email: {perfil.email}</Text>
        <Text style={styles.cardText}>GitHub: {perfil.github}</Text>
        <Text style={styles.cardText}>LinkedIn: {perfil.linkedin}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center', padding: 20 },
  center: { flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' },
  avatarImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#6366f1', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  avatarText: { color: '#fff', fontSize: 36, fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#f8fafc', marginBottom: 8, textAlign: 'center' },
  bio: { fontSize: 14, color: '#94a3b8', textAlign: 'center', marginBottom: 24 },
  card: { backgroundColor: '#1e293b', width: '100%', padding: 20, borderRadius: 12 },
  cardTitle: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  cardText: { color: '#cbd5e1', fontSize: 14, marginVertical: 4 },
});