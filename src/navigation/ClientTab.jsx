import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import { colors } from '../global/styles'

import { Home, MyAccount, MyOrders, Search } from '../screens'

const Tab = createBottomTabNavigator()

const ClientTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ activeTintColor: colors.orange, headerShown: false }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material' name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material' name='search' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='My Orders'
        component={MyOrders}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material' name='search' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='My Account'
        component={MyAccount}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <Icon type='material' name='search' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default ClientTab
