import { Icon } from '@rneui/base'
import { View, Text, StyleSheet } from 'react-native'

import { colors, parameters } from '../global/styles'

const Header = ({ title, type, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 10 }}>
        <Icon
          type='material-community'
          name={type}
          color={colors.white}
          size={30}
          onPress={() => {
            navigation.goBack()
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
})
