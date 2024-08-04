# PantryBuddy

PantryBuddy is your ultimate kitchen companion, designed to streamline the way you manage your pantry. This user-friendly web application helps you keep track of your pantry inventory with ease, ensuring you never run out of essential ingredients. With PantryBuddy, you can add new items, remove items, and update the quantities of items in your pantry with just a few clicks. The intuitive search functionality allows you to quickly find what you need, while the integrated recipe suggestion feature offers creative meal ideas based on the ingredients you already have on hand.

Built with modern web technologies such as Next.js, Firebase, and Material-UI, PantryBuddy provides a seamless, responsive experience across all devices. Whether you're on your phone, tablet, or desktop, managing your pantry has never been more convenient.

## Features

- Add, remove, and update pantry items
- Search functionality to quickly find items
- Integrated recipe suggestion feature based on available ingredients
- Responsive design for seamless use across devices
- Built with Next.js, Firebase, and Material-UI

## Installation

To get started with PantryBuddy, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/pantrybuddy.git
    cd pantrybuddy
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up Firebase:**
    - Create a new project in Firebase
    - Add a Firestore database to your project
    - Get your Firebase config object from your Firebase project settings and add it to a `.env.local` file in the root of your project:
    ```plaintext
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. **Open the app in your browser:**
    ```plaintext
    http://localhost:3000
    ```

## Usage

- **Add Item:** Click the "Add New Item" button, enter the item name, and click "Add".
- **Remove Item:** Click the "Remove" button next to the item you wish to remove.
- **Search Item:** Use the search bar to find items quickly.
- **Update Item Quantity:** Use the plus and minus buttons to increase or decrease the quantity of an item.
- **Recipe Suggestions:** Based on your current pantry items, click on the recipe suggestion button to get meal ideas.

## Tech Stack

- **Next.js:** A React framework for server-rendered or statically-exported React apps.
- **Firebase:** A platform developed by Google for creating mobile and web applications, used for the database and authentication.
- **Material-UI:** A popular React UI framework for building responsive web applications.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes or enhancements.

## License

This project is licensed under the MIT License.

---

Thank you for using PantryBuddy! If you have any questions or feedback, please feel free to open an issue or contact us directly.
