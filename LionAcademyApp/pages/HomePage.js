import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// Pantalla principal de navegación entre secciones
export default function HomePage({ navigation }) {
  return (
    // Fondo morado
    <ImageBackground
      source={require('../assets/gradient-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Tarjeta blanca */}
      <View style={styles.card}>
        <Text style={styles.title}>¿Qué deseas ver?</Text>

        {/* Botón para ir a la sección de rutinas */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Exercise')}>
          <Text style={styles.buttonText}>🏋️ Rutinas de ejercicio</Text>
        </TouchableOpacity>

      {/* Botón para ir a la sección de recetas */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recipes')}>
          <Text style={styles.buttonText}>🥗 Recetas saludables</Text>
        </TouchableOpacity>

      {/* Botón para ir a la sección de contenido audiovisual */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Media')}>
          <Text style={styles.buttonText}>🎧 Contenido audiovisual</Text>
        </TouchableOpacity>

        {/* Botón para regresar a la pantalla anterior */}
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
    width: '70%',
    borderRadius: 12,
    padding: 25,
    elevation: 10,
    alignItems: 'center',
    minHeight: 400, 
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7D06B5',
    paddingVertical: 12,
    borderRadius: 6,
    width: '65%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
