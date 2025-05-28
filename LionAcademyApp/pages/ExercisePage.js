import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function ExercisePage({ navigation }) {
    const [exercises, setExercises] = useState([]);

    // Carga la pantalla y los datos simulados 
    useEffect(() => {
        const data = require('../data/exercises.json');
        setExercises(data);
    }, []);

    // Renderiza cada rutina como una tarjeta tocable
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ExerciseDetail', { routine: item })}>
            <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.duration}>Duración: {item.duration}</Text>
                <Text style={styles.description}>{item.description}</Text>
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
            {/* Título de la sección */}
            <View style={styles.header}>
                <Text style={styles.headerText}>🏋️ Rutinas de ejercicio </Text>
            </View>

            {/* Lista de rutinas */}
            <FlatList
                data={exercises}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
            />

            {/* Botón de volver */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}> Volver </Text>
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
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 5,
        alignSelf: 'center',
        width: '90%',       
        maxWidth: 600,      
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
    },
    duration: {
        fontSize: 14,
        color: '#7D06B5',
        marginBottom: 5,
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
