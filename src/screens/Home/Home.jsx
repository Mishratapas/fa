import { Icon } from '@rneui/base'
import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CountDown from 'react-native-countdown-component'

import { FoodCard, HomeHeader } from '../../components'
import { categoryImage, restaurantDetails } from '../../global/data'
import { colors } from '../../global/styles'

const SCREEN_WIDTH = Dimensions.get('window').width

const Home = () => {
  const [clicked, setClicked] = useState(true)
  const [indexCheck, setIndexCheck] = useState(1)

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView showVerticalScrollIndicator={true}>
        <View
          style={{ backgroundColor: colors.cardBackground, paddingBottom: 5 }}
        >
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setClicked(true)
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: clicked ? colors.orange : colors.gray5,
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setClicked(false)}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: clicked ? colors.gray5 : colors.orange,
                }}
              >
                <Text style={styles.deliveryText}>Pick up</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginTop: 10,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.gray5,
                borderRadius: 15,
                paddingHorizontal: 10,
                height: 45,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 20,
                  }}
                >
                  <Icon
                    type='material-community'
                    name='map-marker'
                    color={colors.gray1}
                    size={26}
                  />
                  <Text style={{ marginLeft: 5 }}>Sompur, Odisha</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 50,
                    marginRight: 30,
                    marginHorizontal: 50,
                    backgroundColor: colors.cardBackground,
                    borderRadius: 15,
                    paddingHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 5,
                    }}
                  >
                    <Icon
                      type='material-community'
                      name='clock'
                      size={26}
                      color={colors.gray1}
                    />
                    <Text>Now</Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Icon type='material-community' name='tune' size={28} />
            </View>
          </View>
          <View style={{ marginHorizontal: 10, paddingVertical: 3 }}>
            <Text style={styles.categoryText}>Categories</Text>
          </View>
          <View>
            <FlatList
              data={categoryImage}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              extraData={indexCheck}
              renderItem={({ item, index }) => (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id)
                  }}
                >
                  <View
                    style={
                      indexCheck === item.id
                        ? { ...styles.categoryCardSelected }
                        : { ...styles.categoryCard }
                    }
                  >
                    <Image
                      source={item.image}
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                      }}
                    />
                    <View>
                      <Text
                        style={
                          indexCheck === item.id
                            ? { ...styles.cardTextSelected }
                            : { ...styles.cardText }
                        }
                      >
                        {item.name}{' '}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 15,
            }}
          >
            <Text style={styles.categoryText}>Free Delivery Now</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 10,
                  marginTop: -10,
                  marginRight: 5,
                  fontWeight: 'bold',
                }}
              >
                Offers Changing in
              </Text>
              <CountDown
                until={360}
                size={14}
                digitStyle={{ backgroundColor: colors.lightGreen }}
                digitTxtStyle={{ color: colors.cardBackground }}
                timeToShow={['M', 'S']}
                timeLabels={{ m: 'Min', s: 'Sec' }}
              />
            </View>
            <FlatList
              style={{ marginTop: 10, marginBottom: 10 }}
              data={restaurantDetails}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item }) => (
                <View style={{ marginRight: 5 }}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.image}
                    restaurantName={item.restaurantName}
                    distance={item.distance}
                    address={item.address}
                    reviews={item.reviews}
                    rating={item.rating}
                  />
                </View>
              )}
            />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 15,
            }}
          >
            <Text style={styles.categoryText}>Promotions Available</Text>
          </View>
          <View>
            <FlatList
              style={{ marginTop: 10, marginBottom: 10 }}
              data={restaurantDetails}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item }) => (
                <View style={{ marginRight: 5 }}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.image}
                    restaurantName={item.restaurantName}
                    distance={item.distance}
                    address={item.address}
                    reviews={item.reviews}
                    rating={item.rating}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { flex: 1 },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: { marginLeft: 5, fontSize: 16 },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gray1,
    backgroundColor: colors.gray5,
  },
  categoryCard: {
    borderRadius: 30,
    backgroundColor: colors.gray5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  categoryCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  cardText: {
    fontWeight: 'bold',
    color: colors.black,
  },
  cardTextSelected: { fontWeight: 'bold', color: colors.white },
})
