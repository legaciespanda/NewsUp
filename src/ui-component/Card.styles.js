import { StyleSheet, Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
export default StyleSheet.create({
  card: {
    /* Setting the height according to the screen height, it also could be fixed value or based on percentage. In this example, this worked well on Android and iOS. */
    height: height - 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: -60,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: "100%",
    // height: "50%",
    marginBottom: 200,
  },
  photoDescriptionContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "100%",
    position: "absolute",
    left: 10,
    right:10,
    bottom: 10,
    marginTop:600
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    // fontFamily: "Avenir",
    //marginTop:90
  },
  content: {
    textAlign: "justify",
    fontSize: 14,
    color: "black",
    marginTop:20
  },

  details: {
    textAlign: "justify",
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    marginTop:20
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
});
