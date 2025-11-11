import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SplashScreenProps {
  onNavigate: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onNavigate}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Chef's Menu</Text>
      <View style={styles.foodImageContainer}>
        <Text style={styles.foodEmoji}>🍔🍟🌮🍕</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E53935',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  closeText: {
    color: 'white',
    fontSize: 24,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    marginBottom: 40,
  },
  foodImageContainer: {
    marginTop: 20,
  },
  foodEmoji: {
    fontSize: 80,
  },
});

export default SplashScreen;
