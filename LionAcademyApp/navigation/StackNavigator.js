import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar todas las pantallas
import WelcomePage from '../pages/WelcomePage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ExercisePage from '../pages/ExercisePage'
import ExerciseDetailPage from '../pages/ExerciseDetailPage';
import RecipesPage from '../pages/RecipesPage'
import RecipesDetailPage from '../pages/RecipesDetailPage'

const Stack = createNativeStackNavigator();

// Navegación entre pantallas
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Exercise" component={ExercisePage} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetailPage} />
      <Stack.Screen name="Recipes" component={RecipesPage} />
      <Stack.Screen name="RecipesDetail" component={RecipesDetailPage} />
    </Stack.Navigator>
  );
}
