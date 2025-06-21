import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SavedScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Saved Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SavedScreen;