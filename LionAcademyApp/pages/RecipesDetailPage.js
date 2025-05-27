import { View, Text, Image, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

// Pantalla que muestra el detalle completo de una receta
export default function RecipesDetailPage({ route, navigation }) {
  const { recipe } = route.params;

  const imageMap = {
  "ensalada-quinoa.jpg": require('../assets/ensalada-quinoa.jpg'),
  "avena-frutas.jpg": require('../assets/avena-frutas.jpg'),
  "smoothie-verde.jpg": require('../assets/smoothie-verde.jpg')
};

  return (
    // Fondo morado
    <ImageBackground
      source={require('../assets/gradient-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Tarjeta blanca centrada con los datos de la receta */}
      <View style={styles.card}>
        <Image source={imageMap[recipe.image]} style={styles.image} />
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.subtitle}>Beneficio:</Text>
        <Text style={styles.description}>{recipe.description}</Text>
        
         {/* Lista de ingredientes */}
        <Text style={styles.subtitle}>Ingredientes:</Text>
        <FlatList
          data={recipe.ingredients}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.ingredient}>• {item}</Text>}
        />
      </View>

      {/* Botón de volver a la lista de recetas */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  card: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 14,
    marginVertical: 2,
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
    fontSize: 14,
  },
});
