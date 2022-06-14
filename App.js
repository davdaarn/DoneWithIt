import { StatusBar } from "expo-status-bar";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AppPicker from "./app/components/AppPicker";
import AppSafeAreaView from "./app/components/AppSafeAreaView";
import AppTextInput from "./app/components/AppTextInput";
import PickerTestScreen from "./app/screens/PickerTestScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";

export default function App() {
  useEffect(() => {
    const result = ImagePicker.re
  }, [])

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
    // <ListingEditScreen />

    // <AppSafeAreaView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
    /* </AppSafeAreaView> */
  );
}
