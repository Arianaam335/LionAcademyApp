import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    // Fondo morado 
    <ImageBackground
      source={require('../assets/gradient-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      { /* Tarjeta blanca */}
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido a Lion Academy! 🦁</Text>

        <Text style={styles.description}>
          Lion Academy es una app para mejorar el bienestar físico y mental.{"\n\n"}
          Encuentra rutinas de ejercicio, recetas saludables, audios motivacionales y mucho más.
        </Text>

        {/* Imagen*/}
        <Image
          source={require('../assets/lion-illustration.png')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Botón para pasar al inicio de sesión */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7D06B5',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
