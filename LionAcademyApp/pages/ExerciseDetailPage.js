import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

export default function ExerciseDetailPage({ route, navigation }) {
  const { routine } = route.params;

  return (
    // Fondo morado
    <ImageBackground
      source={require('../assets/gradient-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Tarjeta blanca */}
        <View style={styles.card}>
          <Text style={styles.title}>{routine.title}</Text>
          <Text style={styles.subtitle}>Duración: {routine.duration}</Text>
          <Text style={styles.subtitle}>Tipo: {routine.type}</Text>
          <Text style={styles.subtitle}>Nivel: {routine.level}</Text>
          <Text style={styles.description}>{routine.description}</Text>

          <Text style={styles.stepTitle}>Ejercicios:</Text>
          <FlatList
            data={routine.steps}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.stepItem}>• {item.name} - {item.time}</Text>
            )}
          />
        </View>

        {/* Botón para volver */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',    
    alignItems: 'center',      
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    width: '95%',
    maxWidth: 700,
    minHeight: 600,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#7D06B5',
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    color: '#333',
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  stepItem: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#7D06B5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    elevation: 6,
    },
  backButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
