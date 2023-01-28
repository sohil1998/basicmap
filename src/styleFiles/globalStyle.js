import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "./colors";

const globalStyle = StyleSheet.create({
  textInputStyle: {
    width: wp("90%"),
    backgroundColor: COLORS.primaryColor1,
    padding: wp("4%"),
    fontFamily: "font-medium",
  },
  borderStyle: {
    borderColor: COLORS.primaryColor2,
    borderWidth: wp("0.5%"),
    borderRadius: wp("2.5%"),
  },
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.primaryColor3,
    marginHorizontal: wp("4%"),
  },
  centerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  marginTopLevel1: {
    marginVertical: hp("2%"),
  },
  buttonStyle: {
    width: wp("90%"),
    backgroundColor: COLORS.primaryColor,
    padding: wp("4.5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  rowStyleSpbtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primaryColor,
  },
  textStyleSmall: {
    fontSize: wp("3.5%"),
    fontFamily: "font-medium",
  },
  textStyleMid: {
    fontSize: wp("4.5%"),
    fontFamily: "font-medium",
  },
  textStyleLarge: {
    fontSize: wp("5.5%"),
    fontFamily: "font-bold",
  },
  imageSmallStyle: {
    width: wp("4%"),
    height: hp("2%"),
    resizeMode: "contain",
  },
  imageMidStyle: {
    width: wp("4%"),
    height: hp("3%"),
    resizeMode: "contain",
  },
  imageLargeStyle: {
    width: wp("16%"),
    height: hp("7%"),
    resizeMode: "cover",
  },
  listViewStyle: {
    width: wp("90%"),
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
    backgroundColor: COLORS.primaryColor1,
    elevation: 5,
    marginTop: hp("2%"),
    marginHorizontal: wp("1%"),
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default globalStyle;
