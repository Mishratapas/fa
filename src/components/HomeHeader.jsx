import { Badge, Icon, withBadge } from '@rneui/base'
import { View, Text, StyleSheet } from 'react-native'

import { colors, parameters } from '../global/styles'

const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon)

  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <Icon
          type='material-community'
          name='menu'
          color={colors.white}
          size={32}
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ ...parameters.styledText, fontSize: 26 }}>
          Food_Xpress
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BadgeIcon
          type='material-community'
          name='cart'
          size={32}
          color={colors.white}
          marginRight={10}
        />
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.orange,
    height: parameters.headerHeight,
  },
  icon: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
