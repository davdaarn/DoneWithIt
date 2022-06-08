import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaFrameContext, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const AppSafeAreaView = (props) => {
  return (
    <SafeAreaProvider style={{}}>
      <SafeAreaView style={{}}>
        {props.children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default AppSafeAreaView

const styles = StyleSheet.create({})