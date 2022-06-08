import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { AppText } from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.listItem}>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 10
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 50
  },
  detailsContainer: {
    marginHorizontal: 10,
    // justifyContent: 'space-around'
  },
  title: {
    fontWeight: '500'
  },
  subTitle: {
    fontSize: 14,
    color: colors.medium
  }
})