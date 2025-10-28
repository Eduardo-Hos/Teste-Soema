import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';


const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoBox}>
       <Image
        source={require('./img/logosoema.png')}
        style={styles.logo}
      />
      </View>

      <Text style={styles.title}>Login</Text>

      {/* Campo de e-mail */}
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#b0b0b0"
      />

      {/* Campo de senha */}
      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Digite sua senha"
          secureTextEntry
          placeholderTextColor="#b0b0b0"
        />
      </View>

      {/* Opções de lembrar/esquecer senha */}
      <View style={styles.optionsContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={rememberMe}
            onValueChange={setRememberMe}
            color={rememberMe ? '#1e50ff' : undefined}
          />
          <Text style={styles.optionText}>Lembrar minha senha</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.optionText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      {/* Botões principais */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.primaryButtonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.secondaryButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Linha divisória */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Ou continue com</Text>
        <View style={styles.line} />
      </View>

      {/* Botões de login social */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
             source={require('./img/google.png')}
             style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
         <Image
             source={require('./img/Facebook.png')}
             style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 60,
  },

  logo: {
    width: '100%',
    height: 150,
    resizeMode: 'contain', 
    alignSelf: 'center',
  },
  logoBox: {
    width: '100%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e1e1e',
  },
  label: {
    color: '#1e1e1e',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: 10,
    fontSize: 18,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#5c5c5c',
    fontSize: 13,
    marginLeft: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  primaryButton: {
    backgroundColor: '#1e50ff',
    paddingVertical: 12,
    width: windowWidth * 0.35,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  secondaryButton: {
    borderColor: '#1e50ff',
    borderWidth: 1,
    paddingVertical: 12,
    width: windowWidth * 0.35,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1e50ff',
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#5c5c5c',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius: 8,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});