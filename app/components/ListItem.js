import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppText } from './AppText'
import colors from '../config/colors'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    // alignItems: 'center',
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