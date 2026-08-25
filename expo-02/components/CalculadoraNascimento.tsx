import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export function CalculadoraNascimento() {
  const [idade, setIdade] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');

  const calcularAnoNascimento = () => {
    const idadeNum = parseInt(idade, 10);
    const diaNum = parseInt(dia, 10);
    const mesNum = parseInt(mes, 10);

    // Validações básicas de preenchimento
    if (
      !idade ||
      !dia ||
      !mes ||
      isNaN(idadeNum) ||
      isNaN(diaNum) ||
      isNaN(mesNum) ||
      diaNum < 1 ||
      diaNum > 31 ||
      mesNum < 1 ||
      mesNum > 12 ||
      idadeNum < 0 ||
      idadeNum > 130
    ) {
      return '';
    }

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() + 1; // getMonth() retorna 0 a 11
    const diaAtual = hoje.getDate();

    // Verifica se a pessoa já fez aniversário no ano atual
    let jaFezAniversario = false;
    if (mesAtual > mesNum || (mesAtual === mesNum && diaAtual >= diaNum)) {
      jaFezAniversario = true;
    }

    const anoNascimento = jaFezAniversario
      ? anoAtual - idadeNum
      : anoAtual - idadeNum - 1;

    return anoNascimento.toString();
  };

  return (
    <View style={styles.form}>
      {/* Bloco de Inputs */}
      <View style={styles.inputGroup}>
        <View style={styles.row}>
          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={3}
            placeholder="Ex: 20"
            placeholderTextColor="#9CA3AF"
            value={idade}
            onChangeText={setIdade}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Dia:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Ex: 15"
            placeholderTextColor="#9CA3AF"
            value={dia}
            onChangeText={setDia}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Mês:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Ex: 8"
            placeholderTextColor="#9CA3AF"
            value={mes}
            onChangeText={setMes}
          />
        </View>
      </View>

      {/* Bloco de Output (Automático e Bloqueado) */}
      <View style={styles.outputGroup}>
        <View style={styles.row}>
          <Text style={styles.label}>Ano de nascimento:</Text>
          <TextInput
            style={[styles.input, styles.disabledInput]}
            value={calcularAnoNascimento()}
            editable={false}
            placeholder="Automático"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    maxWidth: 360,
    gap: 24,
  },
  inputGroup: {
    gap: 14,
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  outputGroup: {
    backgroundColor: '#F3F4F6',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    flex: 1,
  },
  input: {
    width: 130,
    height: 46,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
  disabledInput: {
    backgroundColor: '#E5E7EB',
    color: '#1F2937',
    borderColor: '#9CA3AF',
    fontWeight: 'bold',
  },
});