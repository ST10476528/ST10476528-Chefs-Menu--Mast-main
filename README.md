# ST10476528-Chefs-Menu--Mast
# Chef’s Menu (Expo / React Native)

#Github repo
https://github.com/ST10476528/ST10476528-Chefs-Menu--Mast.git

A simple, elegant food ordering demo built with Expo. Users can explore menu items, view details, favorite dishes, add items to a cart, and simulate checkout. There’s also a lightweight “Add Item” (admin-style) flow that lets you attach an image, set a price, and provide a description—finishing with a friendly success screen.

---

## Features

- **Home & Grid menu** – browse items in a clean 2‑column grid.
- **Search** – quickly filter dishes.
- **Favorites** – tap the heart icon to save items for later.
- **Item details** – large hero image, rating, description, and a **Spicy** slider.
- **Add to cart** – adjust quantities from details or directly in the cart.
- **Cart & checkout** – see subtotal, delivery fee, and total with a single “Checkout” CTA.
- **Add Item flow** – upload a picture, define price & description, then confirm with a success modal.
- **Polished UI** – soft cards, rounded corners, subtle shadows, and friendly micro‑interactions.

---

## Menu Item Fields

The app expects a menu item object with fields like:

| Field            | Type        | Description |
|------------------|-------------|-------------|
| `id`             | string      | Unique identifier for the dish. |
| `name`           | string      | Display name (e.g., “Cheeseburger”). |
| `category`       | string      | High‑level group (e.g., “Main Dish”). |
| `restaurant`     | string      | Vendor / origin (e.g., “Wendy’s Burger”). |
| `description`    | string      | Short/long text describing the dish. |
| `price`          | number      | Price of the dish (e.g., `65.50`). |
| `currency`       | string      | Currency code / symbol for display. |
| `rating`         | number      | Average rating (e.g., `4.9`). |
| `prepTimeMins`   | number      | Estimated preparation time in minutes. |
| `image`          | string/uri  | Image asset or remote URL. |
| `isVegetarian`   | boolean     | Whether the dish is vegetarian. |
| `spiceLevel`     | number      | 0–10 slider value used on the details screen. |
| `isFavorite`     | boolean     | Local favorite state for quick access. |
| `availability`   | string      | “available”, “sold‑out”, etc. |
| `createdAt`      | ISO string  | Item creation timestamp. |
| `updatedAt`      | ISO string  | Last update timestamp. |

> You can extend this schema with add‑ons, tags, or inventory flags to fit your data layer.

---

## Getting Started (Expo)

### 1) Install dependencies
```bash
# using npm
npm install

# or using yarn
yarn
```

### 2) Run the development server
```bash
npx expo start
# then press i for iOS Simulator, a for Android, or scan the QR with Expo Go
```

### 3) (Optional) Clear cache if things look odd
```bash
npx expo start -c
```

---

## Technologies Used

- **Expo (Managed Workflow)** – fast local dev with Expo Go.
- **React Native** – cross‑platform UI.
- **JavaScript / TypeScript** – strongly recommended for types, but JS works too.
- **React Navigation / Expo Router** – stack & tabs navigation (use either based on your setup).
- **Expo Modules** – e.g., `expo-image-picker` for adding item images (optional).
- **Async Storage or server API** – for persisting favorites/cart in a real app (optional).

> This README keeps the stack intentionally flexible—pick the navigation and state tools you prefer.
---
## Yt Video
https://youtube.com/shorts/6EKlB5veV4o?si=Xd-Jkus9tCwXv4AC

---

## Screenshots

> The following images are provided and included for quick visual orientation.

### 1) **Landing / Category Teaser**
“Chef’s Menu” hero with playful food tiles.
![Chef’s Menu Teaser]
---
<img width="438" height="833" alt="Screenshot 2025-10-22 at 22 17 46" src="https://github.com/user-attachments/assets/3415e8c8-362d-4b40-b36a-0b05dbbdd041" />
---

### 2) **Main Menu (Grid)**
Two‑column grid of dishes with ratings, search bar, and favorites button.
![Main Menu Grid]
---
<img width="433" height="972" alt="Screenshot 2025-10-22 at 22 18 10" src="https://github.com/user-attachments/assets/28f4b975-c8e2-4a72-86be-8850bf17f73c" />
---

### 3) **Menu (Admin) – Category with Add Item**
Category list showing items with price, ratings, and an **Add Item** card.
![Main Dish with Add Item]
---
<img width="447" height="870" alt="Screenshot 2025-10-22 at 22 24 52" src="https://github.com/user-attachments/assets/cffa8b2d-c20d-4115-bf42-dc110ef6593b" />
---


### 4) **Add Item Form**
Upload an image, enter the price and description, and submit.
![Add Item Form]
===
<img width="448" height="887" alt="Screenshot 2025-10-22 at 22 19 16" src="https://github.com/user-attachments/assets/6afa9b52-25f5-490a-bff8-55978212e5fc" />
---


### 5) **Success Modal**
Confirmation dialog after creating a new item.
![Success Modal]
---
<img width="441" height="928" alt="Screenshot 2025-10-22 at 22 22 21" src="https://github.com/user-attachments/assets/e818bcd6-8801-4e31-b427-3ad98fb363ea" />
---


### 6) **Item Details**
Large hero image, rating, description, **Spicy** slider, and add/remove quantity.
![Item Details]
---
<img width="447" height="963" alt="Screenshot 2025-10-22 at 22 18 35" src="https://github.com/user-attachments/assets/277a4583-e2fd-41cf-843c-c5c404b640fb" />
---

### 7) **Cart**
Line‑items with quantity steppers, subtotal + delivery + total, and checkout button.
![Cart]
---
<img width="447" height="899" alt="Screenshot 2025-10-22 at 22 22 05" src="https://github.com/user-attachments/assets/c3bd5593-afe4-4ec1-b586-8ece36e2f78a" />

---

## Project Structure (example)



```
.
├── app/ or src/
│   ├── screens/
│   ├── components/
│   ├── hooks/
│   ├── navigation/
│   ├── data/
│   └── styles/
├── assets/
│   └── images/
├── package.json
└── app.json / expo.json
```

---

## Notes

- Prices shown in screenshots use **R** (South African Rand) for demo purposes—change `currency` formatting for your region.
- The **Spicy** slider is a purely client‑side preference control; wire it to your model or filters as needed.
- The **Add Item** flow can be restricted to authorized users (e.g., behind an admin route or role check).

---
Expo Documentation
Official guide for developing with Expo and React Native.
https://docs.expo.dev/

React Native Official Documentation
Core framework reference for building cross-platform apps.
https://reactnative.dev/docs/getting-started

React Navigation
Used for routing and navigation between screens.
https://reactnavigation.org/

Expo Image Picker
For selecting or capturing dish images in the Add Item flow.
https://docs.expo.dev/versions/latest/sdk/imagepicker/

React Native Elements / Paper / UI Kitten
UI inspiration and components for building card-based menus and modals.
https://reactnativeelements.com/

https://callstack.github.io/react-native-paper/

Design Inspiration

Dribbble: Minimal Food Ordering UI Concepts
https://dribbble.com/tags/food_order_app

Behance: Chef Menu App Mockups
https://www.behance.net/search/projects?search=food+ordering+app

Typography and Colors

Font style inspired by Playfair Display and similar script fonts for “Chef’s Menu” heading.

Color scheme: #E74C3C (red accent), #1C1C1C (text), #F8F8F8 (background).

Development Tools

VS Code for coding and debugging.

Expo Go for live preview on mobile.

Android Studio / Xcode Simulator for device testing.

Screenshots
All screenshots were captured from the app built on 22 October 2025 for demonstration purposes:

Screenshot 2025-10-22 at 22.17.46.png – Success Modal

Screenshot 2025-10-22 at 22.18.10.png – Add Item (Main Dish List)

Screenshot 2025-10-22 at 22.18.35.png – Item Details (Cheeseburger)

Screenshot 2025-10-22 at 22.19.16.png – Cart View

Screenshot 2025-10-22 at 22.22.05.png – Add Item Form

Screenshot 2025-10-22 at 22.22.21.png – Chef’s Menu Splash

Screenshot 2025-10-22 at 22.24.52.png – Main Menu Grid

---

## License

MIT (or add your preferred license).
