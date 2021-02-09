import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import styles from './Card.styles'
import { newsImage } from '../api/News';

const Cardz = ({ card }) => (
  <View activeOpacity={1} style={styles.card}>
    <Image
      style={styles.image}
      source={{
        uri:
          "https://blog.trustlancers.com/public/news_image/" +
          card.featured_image
      }}
      resizeMode="cover"
    />

    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.title}>{`${card.title}`}</Text>
      <Text style={styles.content}>{`${card.content}`}</Text>
      <Text style={styles.details}>Swipe Left to read news in details</Text>
    </View>
  </View>
);
export default Cardz
