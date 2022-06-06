import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { AppText } from './AppText'


const AppCard = (props) => {
  return (
    <View style={styles.appCard}>
      <Image style={{ ...styles.image }} source={props.source}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
      </View>
    </View>
  )
}

export default AppCard

const styles = StyleSheet.create({
  appCard: {
    marginTop: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
})