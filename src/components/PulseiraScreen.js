import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Linha de cima */}
      <View style={styles.topRow}>
        <Ionicons name="menu" size={28} color="black" />
        <TextInput style={styles.search} placeholder="O que você precisa?" />
        <TouchableOpacity style={styles.loginContainer}>
          <Ionicons name="person-outline" size={22} color="black" />
          <Text style={styles.loginText}>Usuario</Text>
        </TouchableOpacity>
      </View>

      {/* Linha de baixo */}
      <View style={styles.bottomRow}>
        <Image source={require('./img/logosoema.png')} style={styles.logo} />
        <Image source={require('./img/autismo.png')} style={styles.autismoImg} />
        <TouchableOpacity style={styles.sensorButton}>
          <Image source={require('./img/pulseira.png')} style={styles.sensorImg} />
          <Text style={styles.sensorText}>Pulseira </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#16355D',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  search: {
    flex: 1,
    height: 39,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 30,
    paddingHorizontal: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  loginText: {
    color: '#0028A5',
    marginLeft: 5,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  autismoImg: {
    width: 130,
    height: 50,
    resizeMode: 'contain',
  },
  sensorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0028A5',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  sensorImg: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  sensorText: {
    color: '#0028A5',
  },
});