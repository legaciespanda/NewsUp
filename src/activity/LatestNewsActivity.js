import React, { useState, useEffect, useReducer, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
//importing from react native paper lib
import {
  Avatar,
  Title,
  Paragraph,
  Button,
} from "react-native-paper";

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";

//import CardStack from "react-native-card-stack-swiper";
import Swiper from "react-native-deck-swiper";

import Cardz from "../ui-component/Card"

import axios from "axios";
import { latestNews, ApiKey } from "../api/News"
import { AppStyles } from "../../src/config/AppStyles";


const initialState = "";

const LatestActivity = ({ navigation }) => {
    const useSwiper = useRef(null).current;

  const [currentCardIndex, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cardsState, updateState] = useState({
    news: [],
    swipedAllCards: false,
    swipeDirection: "",
    cardIndex: 0,
    pageNumber: 1,
  });
const [getLatestNews, setLatestNews] = useState([]);
    


    //when the component is fukky loaded/mounted
    //fetch news from digiwigi after 1 milisecends
    useEffect(() => {
      getDataUsingAsyncAwaitGetCall();
    }, []);


      //asynchronous get request call to fetech latest news
    const getDataUsingAsyncAwaitGetCall = async () => {

        //show loading
        setLoading(true);
        setTimeout(async () => {
          //hide loading after the data has been fetched
        setLoading(false);
        try {
          const response = await axios.get(latestNews+ApiKey);
        //   const result = Object.entries(response.data).map(([key, val]) => ({
        //     [key]: val,
        //   }));
          setLatestNews(JSON.stringify(response.data));
                    // updateState({
                    //   ...cardsState,
                    //   cards: [...cardsState.news, ...response.data],
                    // });
                    setLoading(false);
            console.log(getLatestNews);
        } catch (error) {
          // handle error
          alert(error.message);
          }
        }, 5000);
    };
    
    
  return loading ? (
    <ActivityIndicator
      animating={loading}
      color={AppStyles.color.main}
      size="large"
      style={styles.activityIndicator}
    />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Swiper
          cards={getLatestNews}
                      renderCard={(card) => {
            //   <Cardz style={styles.card8} card={card} />
            return (
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
          }}
          onSwiped={(cardIndex) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log("onSwipedAll");
          }}
          onSwipedTop={() => {
            console.log(getLatestNews);
          }}
          cardIndex={0}
          backgroundColor="white"
          stackSize={2}
          infinite
          showSecondCard
        ></Swiper>
      </View>
    </SafeAreaView>
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
    borderRadius: 4,
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
  activityIndicator: {
    alignItems: "center",
    height: 50,
  },
});
export default LatestActivity;
