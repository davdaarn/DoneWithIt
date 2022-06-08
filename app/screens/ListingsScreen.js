import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppCard from '../components/AppCard'
import colors from '../config/colors'

const listings = [
  {
    id: 1,
    source: require('../assets/jacket.jpg'),
    title: 'Man with jacket for sale',
    subTitle: '$100'
  },
  {
    id: 2,
    source: require('../assets/couch.jpg'),
    title: 'Fancy couch',
    subTitle: '$1000'
  },
  {
    id: 3,
    source: require('../assets/chair.jpg'),
    title: 'Just a chair',
    subTitle: '$50'
  },
]

const ListingsScreen = () => {
  return (
    <View style={{ backgroundColor: colors.light, flex: 1, padding: 20 }}>
      <AppSafeAreaView>
        <FlatList
          style={{ height: '100%' }}
          data={listings}
          keyExtractor={x => x.id.toString()}
          renderItem={({ item }) =>
            <AppCard
              source={item.source}
              title={item.title}
              subTitle={item.subTitle}
            />
          }
        />

      </AppSafeAreaView>
    </View>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({})