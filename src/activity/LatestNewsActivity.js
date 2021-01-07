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
    AsyncStorage,
  Linking
} from "react-native";
//importing from react native paper lib
import {
  Avatar,
  Title,
  Paragraph,
  Button,
  Snackbar
} from "react-native-paper";

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";


//import WebView from "react-native-webview";

//import CardStack from "react-native-card-stack-swiper";
import Swiper from "react-native-deck-swiper";
import categoryID from "../util/categoryId";
import getNewwsBydate from "../util/getLatestNewsByDate";


//import Card2 from "../ui-component/Card2";
import Cardz from "../ui-component/Card";

import axios from "axios";
import { latestNews, ApiKey } from "../api/News";
import { AppStyles } from "../../src/config/AppStyles";

import docs from "../api/docs";
import Toast from "react-native-simple-toast";

import HandleWebBrowserAsync from "../components/Webview";



const LatestActivity = ({ navigation }) => {
    const useSwiper = useRef(null).current;
    //const swiperRef = React.createRef();

  //const [currentCardIndex, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

    const [getLatestNews, setLatestNews] = useState("");
    const [getNewsUrl, setNewsUrl] = useState("");

    //when the component is fully loaded/mounted
    //fetch news from digiwigi after 1 milisecends
    useEffect(() => {
      //getDataUsingAsyncAwaitGetCall();
        bhb();
        showUnreadNewsNotif();
    }, []);

    //displays number of unread news to the user
    const showUnreadNewsNotif = () => {
        Toast.showWithGravity(
            "Hy! You have got " +
            `${categoryID(docs, "2").length}` +
            " unread news today from Digi Wigi",
            Toast.LONG,
            Toast.BOTTOM
        );
    }

    //function to convert ISODate  value e.g 2020-11-11T16:26:13.000000Z
    //to date e.g 2020-11-11
    const convertISODate = (dateString) => {
        var dd = new Date(dateString)
            .toISOString()
            .substring(0, 10);
      //date2
      //.split("T")[0];
      return dd; // "2020-11-12"
    };

    //function to return current date in a formated way
    //e.g 2020-11-12
    const todaysDate = () => {
        var date = new Date().toISOString().slice(0, 10);
        return date;
    }
    //COMPARING TWO DATES
    const compareDate = (dateVal1, dateVal2) => {
        if (dateVal1.valueOf() === dateVal2.valueOf()){
            return true;
        }
        else { return false;}
    }

    const bhb = () => {
     fetch(latestNews+ApiKey)
       .then((response) => response.json())
       .then((responseJson) => {
         // set the state of the output here
           console.log(responseJson);
        setLatestNews(responseJson.text());
       })
       .catch((error) => {
         console.error(error);
       });
    }

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
          setLatestNews(response.data);
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
      {/* <View style={{ flex: 1, padding: 16 }}> */}
      <Swiper
        ref={useSwiper}
        cards={categoryID(docs, "2")}
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={2}
        showSecondCard
        cardHorizontalMargin={0}
        animateCardOpacity
        disableBottomSwipe
        renderCard={(card) => <Cardz card={card} />}
        onSwiped={(cardIndex) => {
            console.log("Card index " + cardIndex);
            setNewsUrl(categoryID(docs, "2")[cardIndex].news_url);
          console.log(docs[cardIndex].created_at);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        onSwipedTop={() => {
          console.log(getLatestNews);
          console.log("Today's date is " + todaysDate());
          console.log(
            "converted time is " + convertISODate("2020-11-11T16:26:13.000000Z")
          );
          console.log(
            compareDate(
              todaysDate(),
              convertISODate("2020-12-29T16:26:13.000000Z")
            )
          );
          console.log(categoryID(docs, "2"));
        }}
        onSwipedBottom={() => {
          // <Toast message={success} onDismiss={() => {}} />
        }}
        onSwipedLeft={() => {
          console.log(getNewsUrl);
          HandleWebBrowserAsync(getNewsUrl);
          //Alert.alert(cardIndex);
        }}
      ></Swiper>
      {/* </View> */}
    </SafeAreaView>
  );
};

//stylesheet
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
