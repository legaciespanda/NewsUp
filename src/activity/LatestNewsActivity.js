import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import CardStack from "react-native-card-stack-swiper";
import axios from "axios";
import { latestNews, ApiKey } from "../api/News"

const LatestActivity = ({ navigation }) => {
    const [getLatestNews, setLatestNews] = useState([]);
     useEffect(() => {
         getDataUsingAsyncAwaitGetCall();
     },[]);

    
      const getDataUsingSimpleGetCall = () => {
        axios
          .get(latestNews + ApiKey)
          .then(function (response) {
            // handle success
            setLatestNews(JSON.stringify(response.data));
            console.log(getLatestNews);
          })
          .catch(function (error) {
            // handle error
            alert("APi Called Error" + error.message);
          })
          .finally(function () {
            // always executed
            alert("Finally called");
          });
      };

      const getDataUsingAsyncAwaitGetCall = async () => {
        try {
          const response = await axios.get(latestNews+ApiKey);
            setLatestNews(response.data);
            console.log(getLatestNews);
        } catch (error) {
          // handle error
          alert(error.message);
          }
    };
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <CardStack
          style={styles.content}
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          renderNoMoreCards={() => (
            <Text style={{ fontWeight: "700", fontSize: 18, color: "gray" }}>
              No more News :(
            </Text>
          )}
          onSwiped={() => getDataUsingSimpleGetCall}
          onSwipedLeft={() => {}}
          disableRightSwipe={true}
          disableBottomSwipe={true}
        >
          {getLatestNews.map(ItemView)}
        </CardStack>
      </View>
    </SafeAreaView>
  );
};

  const ItemView = (item, key) => {
    return (
      <Card style={styles.card8} key={key}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.content}</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri:
              "https://blog.trustlancers.com/public/news_image/" +
              item.featured_image,
          }}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },

  card8: {
    width: 330,
    height: 550,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: "#FE474C",
  },
  card2: {
    backgroundColor: "#FEB12C",
  },
  label: {
    lineHeight: 400,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 220,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: "rgb(246,190,66)",
    borderRadius: 55,
    marginTop: -15,
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#01df8a",
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#fd267d",
  },
});
export default LatestActivity;
