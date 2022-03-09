import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ComplistItem from './reactApp/Components/complistitem';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Quantidade de Veículos</Text> 
      <ScrollView>
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
        <ComplistItem/>    
      </ScrollView>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  title: {
    color: '#fff'
  },
  listcard:{
    backgroundColor:'#FFF',
    padding: 12,
    borderRadius: 7,
    marginVertical: 5,
  },
  cardTitle: {
      fontSize: 12,
      fontWeight: 'bold',
  },
  cardSubTitle: {
      fontSize: 10,
      color: '#999',
  },
});
