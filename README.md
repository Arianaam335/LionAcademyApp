# LionAcademyApp
Este repositorio contiene una aplicación desarrollada con Expo y React Native. A continuación, se detallan los pasos para instalar y ejecutar el proyecto localmente:

Requisitos previos:
- Tener instalado Node.js

- Tener instalado Expo CLI:
npm install -g expo-cli

Pasos para iniciar:
# 1. Crear la aplicación base 
npx create-expo-app LionAcademyApp --template blank

# 2. Moverte al directorio del proyecto
cd LionAcademyApp

# 3. Instalar dependencias necesarias para web
npx expo install react-dom react-native-web @expo/metro-runtime

# 4. Instalar React Navigation y su stack nativo
npm install @react-navigation/native @react-navigation/native-stack

# 5. Instalar las dependencias adicionales para navegación
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

Ejecutar la aplicación:
npx expo start

