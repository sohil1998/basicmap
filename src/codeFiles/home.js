import React, { useState, useEffect } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import Header from "../compFiles/header";
import ListComp from "../compFiles/listComp";
import API from "../globalFiles/api";
import COLORS from "../styleFiles/colors";
import globalStyle from "../styleFiles/globalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as SecureStore from "expo-secure-store";

const Home = (props) => {
  const [listData, setlistData] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    var requestOptions = {
      method: "GET",
    };
    setloading(true);
    fetch(API.getList, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setlistData(result.data);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        console.log("error", error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        navigation={props.navigation}
        headerTitle="Restaurant List"
        leftText="Logout"
        onLeftPress={() => {
          SecureStore.deleteItemAsync("loginData");
          props.navigation.replace("login");
        }}
      />

      <View style={[globalStyle.screenStyle]}>
        <FlatList
          contentContainerStyle={{
            flex: 1,
            paddingBottom: hp("10%"),
          }}
          data={listData}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              tintColor={COLORS.primaryColor4}
              onRefresh={() => {
                getList();
              }}
            />
          }
          renderItem={(item, index) => {
            return (
              <View>
                <ListComp
                  showRightImage
                  onListPress={() => {
                    alert("please put google map api key in api file if not");

                    props.navigation.navigate("map", {
                      latProps: Number(item.item.latitude),
                      longProps: Number(item.item.longitude),
                      title: item.item.title,
                      rating: item.item.rating,
                      imageUrl: item.item.images[0].url,
                    });
                  }}
                  listHeader={item.item.title}
                  imageUrl={item.item.images[0].url}
                  rating={item.item.rating}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
