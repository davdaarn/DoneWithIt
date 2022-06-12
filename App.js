import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ViewImageScreen } from './app/screens/ViewImageScreen';
import { WelcomeScreen } from './app/screens/WelcomeScreen';
import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import AppPicker from './app/components/AppPicker';
import AppSafeAreaView from './app/components/AppSafeAreaView';
import AppTextInput from './app/components/AppTextInput';
import PickerTestScreen from './app/screens/PickerTestScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    // <MessagesScreen />
    // <AccountScreen />
    // <ListingsScreen />
    // <LoginScreen />
    // <PickerTestScreen />
    // <RegisterScreen />
    <ListingEditScreen />
  );
}

