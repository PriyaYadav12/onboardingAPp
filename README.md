# React Native App - Readme

This is a React Native app that includes several screens, such as the Welcome screen, Signup screen, Profile Picture capturing screen, and saving user data to Firebase. The app uses the following dependencies:

- `@react-navigation/native`: For handling navigation between screens in the app.
- `@react-navigation/stack`: To implement a stack-based navigation system.
- `react-native-reanimated`: For better performance of animations in the app.
- `react-native-gesture-handler`: To handle touch gestures in the app.
- `react-native-screens`: For improved screen navigation and performance.
- `expo-image-picker`: To capture and select profile pictures from the device gallery.
- `expo-permissions`: To request and manage permissions for accessing the device features.

## Getting Started

Follow these steps to set up and run the app locally on your development environment:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your computer.
- Expo CLI: Install Expo CLI globally using the following command in your terminal:

  ```bash
  npm install -g expo-cli
  ```

### Installation

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/react-native-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-native-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm start
   ```

2. Use the Expo Go app on your Android or iOS device to scan the QR code displayed in the terminal or Metro Bundler web page. Alternatively, you can run the app on an iOS/Android simulator using the Expo client.

## Screens

### 1. Welcome Screen

The Welcome screen is the first screen users see when they launch the app. It may contain a welcome message, app logo, and buttons to navigate to other screens.

### 2. Signup Screen

The Signup screen allows users to register for the app by providing their name, email address, and password.

### 3. Profile Picture Capturing Screen

The Profile Picture capturing screen enables users to capture a photo using the device's camera or choose an existing photo from the device gallery using `expo-image-picker`.

### 4. Saving Data with Firebase

After capturing the profile picture and providing signup details, the user's data, including the profile picture URI, will be saved to Firebase Firestore using the `@react-native-firebase/firestore` library.

## App Navigation

The app uses the `@react-navigation/native` and `@react-navigation/stack` libraries to handle navigation between screens. The stack navigator allows for a simple and intuitive navigation experience, with screens pushed onto and popped off the navigation stack.

## Dependencies

- `@react-navigation/native`
- `@react-navigation/stack`
- `react-native-reanimated`
- `react-native-gesture-handler`
- `react-native-screens`
- `expo-image-picker`
- `expo-permissions`

