import React from 'react';
 import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

 const windowWidth = Dimensions.get('window').width;

 export default function PulseiraScreen({ navigation }) {
   return (
     <View style={styles.container}>
       <Text style={styles.title}>Pulseira Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
         onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
 }


 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#e6e6fa', // Cor de fundo da tela
  },
  title: {
    fontSize: 24,
   marginBottom: 20,
 },
 buttonContainer: {
   backgroundColor: '#ddaedd', // Cor de fundo do container do botão
   margin: 10,
   width: windowWidth * 0.5, // 50% da largura da tela
   borderRadius: 5,
 },
 });