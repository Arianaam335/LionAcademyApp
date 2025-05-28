import { View, Text, Image, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function RecipesPage({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const data = require('../data/recipes.json');
    setRecipes(data);
  }, []);

  const imageMap = {
    "ensalada-quinoa.jpg": require('../assets/ensalada-quinoa.jpg'),
    "avena-frutas.jpg": require('../assets/avena-frutas.jpg'),
    "smoothie-verde.jpg": require('../assets/smoothie-verde.jpg'),
    "barras-energeticas.jpg": require('../assets/barras-energeticas.jpg'),
    "ensalada-garbanzos.jpg": require('../assets/ensalada-garbanzos.jpg'),
    "tostadas-aguacate.jpg": require('../assets/smoothie-verde.jpg'),
    "yogur-frutas.jpg": require('../assets/yogur-frutas.jpg'),
  };

  // Renderiza las card
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RecipesDetail', { recipe: item })}>
      <View style={styles.card}>
        <Image source={imageMap[item.image]} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    // Fondo morado
    <ImageBackground
      source={require('../assets/gradient-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>🥗 Recetas saludables</Text>
      </View>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 5,
    alignSelf: 'center',
    width: '90%',
    maxWidth: 600,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
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
