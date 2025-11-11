import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
}
const menuItems: MenuItem[] = [
  { id: '1', name: 'Margherita Pizza', price: 8.99, rating: 4.5, image: '🍕' },
  { id: '2', name: 'Spaghetti Bolognese', price: 10.5, rating: 4.7, image: '🍝' },
  { id: '3', name: 'Caesar Salad', price: 7.0, rating: 4.2, image: '🥗' },
  { id: '4', name: 'Chocolate Cake', price: 5.5, rating: 4.8, image: '🍰' },
];

interface MenuScreenProps {
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
  onNavigateToDetail: (item: MenuItem) => void;
  onNavigateToAdmin: () => void;
}

const MenuScreen: React.FC<MenuScreenProps> = ({
  favorites,
  onToggleFavorite,
  onNavigateToDetail,
  onNavigateToAdmin,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chef's Menu</Text>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.menuList}>
        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuCard}
              onPress={() => onNavigateToDetail(item)}
            >
              <Text style={styles.menuItemImage}>{item.image}</Text>
              <Text style={styles.menuItemName}>{item.name}</Text>
              <View style={styles.menuItemFooter}>
                <Text style={styles.menuItemPrice}>${item.price}</Text>
                <TouchableOpacity onPress={() => onToggleFavorite(item.id)}>
                  <Text style={styles.favoriteIcon}>
                    {favorites.has(item.id) ? '❤️' : '🤍'}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.menuItemRating}>⭐ {item.rating}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButtonCenter} onPress={onNavigateToAdmin}>
          <Text style={styles.navIconCenter}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>❤️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  menuButton: {
    backgroundColor: '#E53935',
    width: 35,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonText: {
    color: 'white',
    fontSize: 20,
  },
  menuList: {
    flex: 1,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  menuCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    margin: '1%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItemImage: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 10,
  },
  menuItemName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  menuItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteIcon: {
    fontSize: 20,
  },
  menuItemRating: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navButton: {
    padding: 10,
  },
  navIcon: {
    fontSize: 24,
  },
  navButtonCenter: {
    backgroundColor: '#E53935',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  navIconCenter: {
    fontSize: 32,
    color: 'white',
    fontWeight: '300',
  },
});

export default MenuScreen;