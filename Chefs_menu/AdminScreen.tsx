import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// Local stub data for menu items to avoid "Cannot find module" compile errors.
// Replace this with an import from your real data file (../data/menuData) when available.
const menuItems = [
  { id: '1', name: 'Grilled Chicken', image: '🍗', price: 12.99, rating: 4.5 },
  { id: '2', name: 'Veggie Pasta', image: '🍝', price: 9.99, rating: 4.2 },
  { id: '3', name: 'Beef Steak', image: '🥩', price: 15.99, rating: 4.8 },
  { id: '4', name: 'Garden Salad', image: '🥗', price: 7.5, rating: 4.0 },
];

interface AdminScreenProps {
  onBack: () => void;
}

const AdminScreen: React.FC<AdminScreenProps> = ({ onBack }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Chef's Menu</Text>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Main Dish</Text>

        <View style={styles.menuGrid}>
          {menuItems.slice(0, 2).map((item) => (
            <View key={item.id} style={styles.menuItem}>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteIcon}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.itemImage}>{item.image}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <Text style={styles.itemRating}>⭐ {item.rating}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.addItemButton}>
          <Text style={styles.addItemIcon}>+</Text>
          <Text style={styles.addItemText}>Add Item</Text>
        </TouchableOpacity>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>🖼️</Text>
            <Text style={styles.actionText}>Add an Image of the dish</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Add price</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Add Description</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    fontSize: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  menuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItem: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  deleteIcon: {
    fontSize: 18,
    color: '#666',
  },
  itemImage: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  itemRating: {
    fontSize: 12,
    color: '#666',
  },
  addItemButton: {
    backgroundColor: '#E53935',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  addItemIcon: {
    color: 'white',
    fontSize: 24,
  },
  addItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  actions: {
    gap: 15,
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  actionIcon: {
    fontSize: 24,
  },
  actionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default AdminScreen;
