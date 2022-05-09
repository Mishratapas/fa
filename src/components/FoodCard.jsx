import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import { colors } from '../global/styles'
import { Icon } from '@rneui/base'

const FoodCard = ({
  onPressFoodCard,
  restaurantName,
  discount,
  screenWidth,
  images,
  distance,
  address,
  reviews,
  rating,
}) => {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          source={images}
          style={{ ...styles.image, width: screenWidth }}
        />
        <View>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.distance}>
            <Icon
              type='material-community'
              name='map-marker'
              size={22}
              iconStyle={{ marginTop: 3 }}
            />
            <Text style={styles.minute}>{distance} mins</Text>
          </View>
          <View style={{ flex: 9, flexDirection: 'row' }}>
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
      </View>

      <View style={styles.reviews}>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.review}>{reviews} reviews</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray4,
  },
  image: { borderTopLeftRadius: 5, borderTopRightRadius: 5, height: 150 },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.gray1,
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderColor: colors.gray4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  minute: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.gray3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.gray2,
    paddingHorizontal: 10,
  },
  reviews: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  rating: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  review: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 10,
  },
})
