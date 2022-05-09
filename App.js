import { StyleSheet, View, StatusBar } from 'react-native'

import { colors } from './src/global/styles'
import Root from './src/navigation/Root'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.orange} />
      <Root />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
