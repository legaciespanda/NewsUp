import React, { useState, memo, useEffect, useReducer, useRef } from "react";
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
  Linking,
} from "react-native";
//importing from react native paper lib

//import CardStack from "react-native-card-stack-swiper";
import Swiper from "react-native-deck-swiper";
import categoryID from "../util/categoryId";
import getNewwsBydate from "../util/getLatestNewsByDate";

//import Card2 from "../ui-component/Card2";
import Cardz from "../ui-component/Card";

import axios from "axios";
import { latestNews, ApiKey } from "../api/News";
import { AppStyles } from "../../src/config/AppStyles";

import Toast from "react-native-simple-toast";

import HandleWebBrowserAsync from "../components/Webview";

const TechnologyActivity = () => {
  const useSwiper = useRef(null).current;

  const [loading, setLoading] = useState(false);

  const [getLatestNews, setLatestNews] = useState([]);
  const [getNewsUrl, setNewsUrl] = useState("");

      //category ID for news
  const techCategoryId = 8;

  //when the component is fully loaded/mounted
  //fetch news from digiwigi after 1 milisecends
  useEffect(() => {
    getDataUsingAsyncAwaitGetCall();
    //bhb();
  }, []);

  //displays number of unread news to the user
  const showUnreadNewsNotif = () => {
    Toast.showWithGravity(
      "Hy! You have got " +
        `${categoryID(getLatestNews, techCategoryId).length}` +
        " unread news today from Newsup",
      Toast.LONG,
      Toast.BOTTOM
    );
  };

  //function to return current date in a formated way
  //e.g 2020-11-12
  const todaysDate = () => {
    var date = new Date().toISOString().slice(0, 10);
    return date;
  };

  //asynchronous get request call to fetech latest news
  const getDataUsingAsyncAwaitGetCall = async () => {
    //show loading
    setLoading(true);
    setTimeout(async () => {
      //hide loading after the data has been fetched
      setLoading(false);
      try {
        const response = await axios.get(latestNews + ApiKey);

        setLatestNews(response.data);
        setLoading(false);
        //show unread news notification
        //showUnreadNewsNotif();

        //response.data.map((data) => setLatestNews(data));
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
        //cards={categoryID(docs, "2")}
        //get all the latest news by their category ID
        cards={categoryID(getLatestNews, techCategoryId)}
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={2}
        showSecondCard
        cardHorizontalMargin={0}
        animateCardOpacity
        disableBottomSwipe
        renderCard={(card) => (card && <Cardz card={card} />) || null}
        onSwiped={(cardIndex) => {
          //console.log("Card index " + cardIndex);
          //get the current new url by its index
          setNewsUrl(categoryID(getLatestNews, techCategoryId)[cardIndex].news_url);
          //console.log(docs[cardIndex].created_at);
        }}
        onSwipedAll={() => {
          Alert.alert(
            "End of News",
            "You have read all latest news for today " + `${todaysDate()}`,
            [
              {
                text: "Ok",
                onPress: () => {
                  return null;
                },
              },
            ],
            { cancelable: false }
          );
        }}
        onSwipedTop={() => {
          //console.log("Ernest", getLatestNews);
          //console.log(getLatestNews.map((item) => item));
          //console.log("Today's date is " + todaysDate());
          //   console.log(
          //     "converted time is " + convertISODate("2020-11-11T16:26:13.000000Z")
          //   );
          //   console.log(
          //     compareDate(
          //       todaysDate(),
          //       convertISODate("2020-12-29T16:26:13.000000Z")
          //     )
          //   );
          //   console.log(categoryID(docs, "2"));
        }}
        onSwipedBottom={() => {
          // <Toast message={success} onDismiss={() => {}} />
        }}
        onSwipedLeft={() => {
          //console.log(getNewsUrl);
          //open web browser for the news
          HandleWebBrowserAsync(getNewsUrl);
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
  activityIndicator: {
    alignItems: "center",
    height: 50,
  },
});
export default TechnologyActivity;
