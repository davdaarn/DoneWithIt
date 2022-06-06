import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ViewImageScreen } from './app/screens/ViewImageScreen';
import { WelcomeScreen } from './app/screens/WelcomeScreen';
import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
export default function App() {
  return (
    // <WelcomeScreen />
    <ViewImageScreen />
    // <ListingDetailsScreen />
  );
}

