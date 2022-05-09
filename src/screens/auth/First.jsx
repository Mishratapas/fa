import { Button } from '@rneui/base'
import { View, Text, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'

import { colors, parameters } from '../../global/styles'

const First = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>DISCOVER RESTAURANT</Text>
        <Text style={styles.text}>IN YOUR AREA</Text>
      </View>
      <View style={{ flex: 4, justifyContent: 'center' }}>
        <Swiper autoplay={true}>
          <View style={styles.slider1}>
            <Image
              source={require('../../global/images/food1.png')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slider2}>
            <Image
              source={require('../../global/images/food2.png')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slider3}>
            <Image
              source={require('../../global/images/food3.png')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slider3}>
            <Image
              source={require('../../global/images/food4.png')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </Swiper>
      </View>
      <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 40 }}>
        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          <Button
            title='SIGN IN'
            titleStyle={{ ...parameters.styledText, color: colors.white }}
            buttonStyle={parameters.styledButton}
            onPress={() => {
              navigation.navigate('SignIn')
            }}
          />
          <View style={{ marginTop: 20 }}>
            <Button
              title='Create an account'
              titleStyle={{
                ...parameters.styledText,
                color: colors.orange,
                fontSize: 18,
              }}
              buttonStyle={{
                ...parameters.styledButton,
                backgroundColor: colors.white,
              }}
            />
          </View>
        </View>
      </View>
    </>
  )
}

export default First

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  text: { fontSize: 26, color: colors.orange, fontWeight: 'bold' },
  slider1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slider2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slider3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
})
