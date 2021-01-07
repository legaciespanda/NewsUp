import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";
import styles from "./Card.styles";


const Card2 = ({ card }) => (
  <Card style={styles.card8}>
    <CardImage
      style={{
        width: 350,
        height: 300,
      }}
      title="Lighthouse"
      source={{
        uri:
          "https://blog.trustlancers.com/public/news_image/" +
          card.featured_image,
      }}
    />
    <CardTitle
      subtitleAbove={true}
      title={card.title}
      subtitle={card.title}
      //AsyncStorage.setItem("@Store:currentNewsUrl", item.news_url)
    />

    <CardContent text={card.content} />
    <CardAction separator={true} inColumn={false}>
      <CardButton onPress={() => {}} title={card.title} />
    </CardAction>
  </Card>
);
export default Card2;
