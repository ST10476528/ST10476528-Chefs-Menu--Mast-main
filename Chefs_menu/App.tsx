import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuScreen: React.FC<any> = ({ favorites, onToggleFavorite, onNavigateToDetail, onNavigateToAdmin }) => {
  // Friendly sample menu data
  const sampleItems = [
    { id: '1', name: "Chef's Special: Herb-Roasted Chicken 🍗", description: 'Juicy chicken roasted with fresh herbs and lemon. Served with seasonal veggies.', price: 14.5 },
    { id: '2', name: 'Garden Pasta 🌿', description: 'Penne tossed with roasted cherry tomatoes, garlic, and basil. Light and satisfying.', price: 11.25 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Chef’s Menu</Text>
      <Text style={styles.message}>Browse our dishes below — tap Details to learn more.</Text>

      {sampleItems.map(item => (
        <View key={item.id} style={{ marginBottom: 14, width: '100%' }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            {item.name} — ${item.price.toFixed(2)}
          </Text>
          <Text style={{ marginBottom: 6 }}>{item.description}</Text>

          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 6 }}>
            <Button title="View details" onPress={() => onNavigateToDetail(item)} />
            <Button
              title={favorites && favorites.has(item.id) ? '♥ Remove' : '♡ Favorite'}
              onPress={() => onToggleFavorite(item.id)}
            />
          </View>
        </View>
      ))}

      <View style={{ height: 12 }} />
      <Button title="Admin (staff only)" onPress={onNavigateToAdmin} />
    </View>
  );
};

const DetailScreen: React.FC<any> = ({ item, quantity, setQuantity, onBack, onSuccess }) => {
  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No item selected. Try returning to the menu.</Text>
        <Button title="Back to Menu" onPress={onBack} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.message}>{item.description}</Text>
      <Text style={styles.message}>Price: ${item.price.toFixed(2)}</Text>
      <Text style={styles.message}>How many would you like?</Text>

      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 12 }}>
        <Button title="−" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
        <View style={{ justifyContent: 'center', paddingHorizontal: 12 }}>
          <Text style={{ fontSize: 16 }}>Qty: {quantity}</Text>
        </View>
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>

      <Button title="Place my order" onPress={onSuccess} />
      <View style={{ height: 8 }} />
      <Button title="Back to Menu" onPress={onBack} />
    </View>
  );
};

const SplashScreen: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Hey there 👋</Text>
    <Text style={styles.message}>Welcome to the app — ready to explore Chef’s favorites?</Text>
    <Button title="Let’s go" onPress={onNavigate} />
  </View>
);

const AdminScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Admin Panel</Text>
    <Text style={styles.message}>This is a placeholder for staff actions. Be careful — changes affect the menu.</Text>
    <Button title="Return to Menu" onPress={onBack} />
  </View>
);

const SuccessScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Thanks — order placed!</Text>
    <Text style={styles.message}>We’re preparing your meal. You’ll receive a confirmation shortly.</Text>
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