import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// Local MenuItem type because ../types module is missing
interface MenuItem {
  id?: string;
  name: string;
  image?: string;
  rating?: number;
  description?: string;
  price: number;
}

interface DetailScreenProps {
  item: MenuItem | null;
  quantity: number;
  setQuantity: (quantity: number) => void;
  onBack: () => void;
  onSuccess: () => void;
}

const DetailScreen: React.FC<DetailScreenProps> = ({
  item,
  quantity,
  setQuantity,
  onBack,
  onSuccess,
}) => {
  if (!item) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.imageContainer}>
          <Text style={styles.image}>{item.image}</Text>
        </View>

        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.rating}>⭐ {item.rating} (1k+ reviews)</Text>

        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.quantityButtonText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={onSuccess}>
          <Text style={styles.addToCartText}>
            Add ${(item.price * quantity).toFixed(2)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderNowButton}>
          <Text style={styles.orderNowText}>ORDER NOW</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    fontSize: 24,
  },
  searchIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  image: {
    fontSize: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    padding: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E53935',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '300',
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    gap: 10,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#E53935',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  orderNowButton: {
    flex: 1,
    backgroundColor: '#424242',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  orderNowText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailScreen;
