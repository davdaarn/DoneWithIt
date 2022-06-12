import { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Modal, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { AppText } from "./AppText";
import { Button } from 'react-native';
import AppSafeAreaView from './AppSafeAreaView';
import PickerItem from './PickerItem';

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          {
            selectedItem ?
              (<AppText style={styles.text}>{selectedItem}</AppText>) :
              (<AppText style={{ ...styles.text, ...styles.placeHolder }} >{placeholder}</AppText>)
          }

          {/* <AppText style={styles.text}>{selectedItem ? selectedItem : placeholder}</AppText> */}

          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType='slide'>
        <AppSafeAreaView>
          <Button title='Close' onPress={() => setModalVisible(false)}></Button>

          <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            }
          />
        </AppSafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1
  },
  placeHolder: {
    color: defaultStyles.colors.medium
  }
});

export default AppPicker;
