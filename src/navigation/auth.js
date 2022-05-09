import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import { First, SignIn } from '../screens'
import ClientTab from './ClientTab'

const Stack = createStackNavigator()

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName='First'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='First'
        component={First}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name='ClientTab'
        component={ClientTab}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  )
}

export default Auth
