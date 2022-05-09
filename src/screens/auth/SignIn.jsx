import { NavigationContainer } from '@react-navigation/native'
import { Button, Icon, SocialIcon } from '@rneui/base'
import { useRef, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { AuthHeader } from '../../components'
import { colors, parameters } from '../../global/styles'

const SignIn = ({ navigation }) => {
  const [textInput2Focused, setTextInput2Focused] = useState(false)

  const textInput1 = useRef(1)
  const textInput2 = useRef(2)

  return (
    <View style={styles.container}>
      {/* Header */}
      <AuthHeader
        title='My Account'
        type='arrow-left'
        navigation={navigation}
      />

      {/* SignInText */}
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ ...parameters.styledText, color: colors.orange }}>
          SignIn
        </Text>
      </View>

      {/* please enter... */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>please enter email and password</Text>
      </View>

      {/* Inputs */}
      <View style={{ marginTop: 10 }}>
        <View style={styles.mailInput}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duraction={400}
          >
            <Icon
              type='material-community'
              name='email'
              iconStyle={{ color: colors.gray3 }}
            />
          </Animatable.View>
          <TextInput
            placeholder='email'
            style={{ paddingLeft: 5 }}
            ref={textInput1}
          />
        </View>
        <View style={styles.passwordInput}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duraction={400}
          >
            <Icon
              type='material-community'
              name='lock'
              iconStyle={{ color: colors.gray3 }}
            />
          </Animatable.View>
          <TextInput
            placeholder='password'
            style={{ width: '80%' }}
            ref={textInput2}
            onFocus={() => setTextInput2Focused(false)}
            onBlur={() => setTextInput2Focused(true)}
          />
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInRight'}
            duraction={400}
          >
            <Icon
              type='material'
              name='visibility-off'
              iconStyle={{ color: colors.gray3, marginLeft: 20 }}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <Button
          title='Sign in'
          titleStyle={{ ...parameters.styledText, color: colors.white }}
          buttonStyle={parameters.styledButton}
          onPress={() => {
            navigation.navigate('ClientTab')
          }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
        <Text style={{ ...styles.text, textDecorationLine: 'underline' }}>
          Forgot Password ?
        </Text>
        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
          OR
        </Text>
      </View>
      <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <SocialIcon
          title='Sign In With Facebook'
          type='facebook'
          button
          style={styles.socialIcon}
          onPress={() => {}}
        />
        <SocialIcon
          title='Sign In With Google'
          type='google'
          button
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginLeft: 10, marginTop: 20 }}>
        <Text style={{ ...styles.text, color: colors.gray2 }}>
          New to Food Xpress ?
        </Text>
      </View>
      <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
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
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: { flex: 1 },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: colors.gray2, fontSize: 16 },
  mailInput: {
    borderWidth: 1,
    borderColor: colors.gray3,
    borderRadius: 12,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingLeft: 15,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: colors.gray3,
    borderRadius: 12,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingLeft: 15,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  socialIcon: { height: 50, borderRadius: 12, width: '97%' },
})
