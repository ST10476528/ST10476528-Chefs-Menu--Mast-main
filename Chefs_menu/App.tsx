import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuScreen: React.FC<any> = ({ favorites, onToggleFavorite, onNavigateToDetail, onNavigateToAdmin }) => {
  // Simple inline placeholder menu data
  const sampleItems = [
    { id: '1', name: 'Sample Dish', description: 'Tasty sample dish', price: 9.99 },
    { id: '2', name: 'Another Dish', description: 'Delicious sample', price: 12.5 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {sampleItems.map(item => (
        <View key={item.id} style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18 }}>{item.name} - ${item.price}</Text>
          <Text style={{ marginBottom: 4 }}>{item.description}</Text>
          <Button title="Details" onPress={() => onNavigateToDetail(item)} />
          <View style={{ height: 8 }} />
          <Button
            title={favorites && favorites.has(item.id) ? 'Unfavorite' : 'Favorite'}
            onPress={() => onToggleFavorite(item.id)}
          />
        </View>
      ))}
      <View style={{ height: 12 }} />
      <Button title="Admin" onPress={onNavigateToAdmin} />
    </View>
  );
};

const DetailScreen: React.FC<any> = ({ item, quantity, setQuantity, onBack, onSuccess }) => {
  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No item selected.</Text>
        <Button title="Back" onPress={onBack} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.message}>{item.description}</Text>
      <Text style={styles.message}>Quantity: {quantity}</Text>
      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 8 }}>
        <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>
      <Button title="Place Order" onPress={onSuccess} />
      <View style={{ height: 8 }} />
      <Button title="Back" onPress={onBack} />
    </View>
  );
};

const SplashScreen: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome</Text>
    <Text style={styles.message}>Loading...</Text>
    <Button title="Enter" onPress={onNavigate} />
  </View>
);

const AdminScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Admin</Text>
    <Text style={styles.message}>Admin panel placeholder.</Text>
    <Button title="Back" onPress={onBack} />
  </View>
);

const SuccessScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Success</Text>
    <Text style={styles.message}>Your order was placed successfully.</Text>
    <Button title="Back to Menu" onPress={onBack} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  message: { fontSize: 16, marginBottom: 16, textAlign: 'center' },
});

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
};

export type ScreenType = 'splash' | 'menu' | 'detail' | 'admin' | 'success';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('splash');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [quantity, setQuantity] = useState(1);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const navigateToDetail = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setCurrentScreen('detail');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onNavigate={() => setCurrentScreen('menu')} />;
      case 'menu':
        return (
          <MenuScreen
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onNavigateToDetail={navigateToDetail}
            onNavigateToAdmin={() => setCurrentScreen('admin')}
          />
        );
      case 'detail':
        return (
          <DetailScreen
            item={selectedItem}
            quantity={quantity}
            setQuantity={setQuantity}
            onBack={() => setCurrentScreen('menu')}
            onSuccess={() => setCurrentScreen('success')}
          />
        );
      case 'admin':
        return (
          <AdminScreen
            onBack={() => setCurrentScreen('menu')}
          />
        );
      case 'success':
        return <SuccessScreen onBack={() => setCurrentScreen('menu')} />;
      default:
        return <MenuScreen
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onNavigateToDetail={navigateToDetail}
          onNavigateToAdmin={() => setCurrentScreen('admin')}
        />;
    }
  };

  return renderScreen();
};

export default App;