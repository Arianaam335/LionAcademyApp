import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useState } from 'react';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      console.log('Error: campos vacíos');
      //Alert.alert('Error', 'Por favor, completa todos los campos');
    } else {
      console.log('Éxito', 'Inicio de sesión exitoso');
      //Alert.alert('Éxito', 'Inicio de sesión exitoso');
      navigation.navigate('Home');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/gradient-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Tarjeta blanca */}
      <View style={styles.card}>

        {/* Título  */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Iniciar Sesión</Text>
        </View>

        {/* Inputs */}
        <TextInput
          placeholder="Correo"
          style={styles.input}
          placeholderTextColor="#999"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          placeholderTextColor="#999"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        {/* Botones */}
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: '50%',
    minHeight: 500,
    borderRadius: 12,
    padding: 25,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  titleWrapper: {
    position: 'absolute',
    top: 40, 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 15,
    width: '70%',
  },
  button: {
    backgroundColor: '#7D06B5',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
    width: '70%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
