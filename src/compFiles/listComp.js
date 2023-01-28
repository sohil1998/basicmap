import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import globalStyle from "../styleFiles/globalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "../styleFiles/colors";
import IMAGES from "./images";

const ListComp = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onListPress();
      }}
      style={[
        globalStyle.rowStyleSpbtn,
        globalStyle.listViewStyle,
        globalStyle.borderStyle,
        {
          borderWidth: null,
          ...props.propsStyle,
        },
      ]}
    >
      <Image
        source={{ uri: props.imageUrl }}
        style={[
          globalStyle.imageLargeStyle,
          globalStyle.borderStyle,
          { borderWidth: null },
        ]}
      />
      <View
        style={{
          marginLeft: props.showRightImage ? wp("-4%") : 0,
          width: props.showRightImage ? wp("45%") : wp("30%"),
        }}
      >
        <Text
          style={[
            globalStyle.textStyleMid,
            {
              color: "black",
            },
          ]}
        >
          {props.listHeader}
        </Text>
        <View style={[globalStyle.rowStyle, { marginTop: hp("0.5%") }]}>
          {[...Array(Math.round(props.rating)).keys()].map((i) => {
            return (
              <Image
                source={IMAGES.fillStartImg}
                style={[
                  globalStyle.imageSmallStyle,
                  globalStyle.borderStyle,
                  { borderWidth: null, marginRight: wp("0.5%") },
                ]}
              />
            );
          })}
          {[...Array(5 - Math.round(props.rating)).keys()].map((i) => {
            return (
              <Image
                source={IMAGES.emptyStartImg}
                style={[
                  globalStyle.imageSmallStyle,
                  globalStyle.borderStyle,
                  { borderWidth: null, marginRight: wp("0.5%") },
                ]}
              />
            );
          })}
        </View>
      </View>
      {props.showRightImage && (
        <View
          style={[
            globalStyle.borderStyle,
            {
              backgroundColor: COLORS.primaryColor,
              padding: wp("3%"),
              paddingHorizontal: wp("4%"),
              borderWidth: null,
            },
          ]}
        >
          <Image source={IMAGES.mapImg} style={[globalStyle.imageMidStyle]} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ListComp;
