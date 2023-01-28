import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyle from "../styleFiles/globalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "../styleFiles/colors";

const Header = (props) => {
  return (
    <View
      style={[
        globalStyle.rowStyleSpbtn,
        {
          padding: wp("4%"),
          paddingTop: hp("8%"),
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          props.onLeftPress();
        }}
      >
        <Text
          style={[
            globalStyle.textStyleSmall,
            {
              color: COLORS.primaryColor1,
            },
          ]}
        >
          {props.leftText}
        </Text>
      </TouchableOpacity>

      <Text
        style={[
          globalStyle.textStyleLarge,
          {
            color: COLORS.primaryColor1,
          },
        ]}
      >
        {props.headerTitle}
      </Text>

      <TouchableOpacity>
        <Text>{"         "}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
