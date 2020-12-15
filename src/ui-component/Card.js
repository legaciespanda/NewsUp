import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import styles from './Card.styles'
const Cardz = ({ card }) => (
  <View activeOpacity={1} style={styles.card}>
    <Image
      style={styles.image}
      source={card.featured_image}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>{`${card.title}, ${card.content}`}</Text>
    </View>
  </View>
);
export default Cardz
