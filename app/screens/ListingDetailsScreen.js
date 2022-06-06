import { Image, StyleSheet, Text, View } from 'react-native'
import { AppText } from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image source={require('../assets/jacket.jpg')} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Jacket for sale!</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    marginVertical: 10,
    fontWeight: '500',
    fontSize: 24
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20
  },
  userContainer: {
    marginTop: 40
  }
})