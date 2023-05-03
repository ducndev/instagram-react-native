import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import SignInStack from './navigate';

export default function App() {
  return (
      // <HomeScreen />
      <SignInStack />
  );
}