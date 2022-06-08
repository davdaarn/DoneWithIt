import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
import { AppText } from '../components/AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ListItemSeparator from '../components/ListItemSeparator'

const SettingItem = ({ color, icon, title }) => {
  return (
    <View style={{ ...styles.accountInfo, height: 60 }}>
      <View style={{
        borderRadius: 20,
        backgroundColor: color,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      }}>
        <MaterialCommunityIcons name={icon} size={20} color={colors.white} />
      </View>

      <AppText style={styles.title}>{title}</AppText>
    </View>
  )
}

const AccountScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.light }}>
      <AppSafeAreaView>
        <View style={styles.accountInfo}>
          <Image source={require('../assets/mosh.jpg')} style={styles.image} />

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>David Long</AppText>

            <AppText style={styles.subTitle}>davdaarn@live.com</AppText>
          </View>
        </View>

        <View style={{ height: 40 }} />

        <SettingItem icon={'format-list-bulleted'} color={colors.primary} title='My Listings' />

        <ListItemSeparator />

        <SettingItem icon={'email'} color={colors.secondary} title='My Messages' />

        <View style={{ height: 20 }} />

        <SettingItem icon={'logout'} color={colors.warn} title='Log Out' />
      </AppSafeAreaView>

    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  accountInfo: {
    width: '100%',
    height: 80,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
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