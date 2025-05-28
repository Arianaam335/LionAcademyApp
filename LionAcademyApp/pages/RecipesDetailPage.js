import { View, Text, Image, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

export default function RecipesDetailPage({ route, navigation }) {
  const { recipe } = route.params;

  const imageMap = {
    "ensalada-quinoa.jpg": require('../assets/ensalada-quinoa.jpg'),
    "avena-frutas.jpg": require('../assets/avena-frutas.jpg'),
    "smoothie-verde.jpg": require('../assets/smoothie-verde.jpg'),
    "barras-energeticas.jpg": require('../assets/barras-energeticas.jpg'),
    "ensalada-garbanzos.jpg": require('../assets/ensalada-garbanzos.jpg'),
    "tostadas-aguacate.jpg": require('../assets/smoothie-verde.jpg'),
    "yogur-frutas.jpg": require('../assets/yogur-frutas.jpg'),
  };

  return (
    // Fondo morado
    <ImageBackground
      source={require('../assets/gradient-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Contenedor principal */}
      <View style={styles.container}>

        {/* Tarjeta blanca con imagen y contenido de la receta */}
        <View style={styles.card}>

          {/* Imagen de la receta  */}
          <Image source={imageMap[recipe.image]} style={styles.image} />

          <View style={styles.content}>
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.subtitle}>Beneficio:</Text>
            <Text style={styles.description}>{recipe.description}</Text>

            <Text style={styles.subtitle}>Ingredientes:</Text>
            <FlatList
              data={recipe.ingredients}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.ingredient}>• {item}</Text>
              )}
            />
          </View>
        </View>

        {/* Botón para volver */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}> Volver </Text>
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
    padding: 30,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 30,
    elevation: 6,
    width: '95%',
    maxWidth: 900,
    alignItems: 'flex-start',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginRight: 30,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    marginVertical: 2,
    color: '#555',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#7D06B5',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
    elevation: 6,
  },
  backButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
