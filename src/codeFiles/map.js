import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import Header from "../compFiles/header";
import ListComp from "../compFiles/listComp";
import MapView, { Marker } from "react-native-maps";
import IMAGES from "../compFiles/images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "../styleFiles/colors";
import MapViewDirections from "react-native-maps-directions";
import API from "../globalFiles/api";

const MapViewScreen = (props) => {
  const [region, setRegion] = useState({
    latitude: props.route.params.latProps,
    longitude: props.route.params.longProps,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <Header
        navigation={props.navigation}
        headerTitle="Map View"
        leftText="Back"
        onLeftPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={{ flex: 1 }}>
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}
          style={{ flex: 1 }}
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}
        >
          <Marker
            coordinate={{
              latitude: props.route.params.latProps,
              longitude: props.route.params.longProps,
            }}
          >
            <Image
              source={IMAGES.shopImg}
              style={{
                height: hp("8%"),
                width: wp("8%"),
                resizeMode: "contain",
              }}
            />

            <ListComp
              imageUrl={props.route.params.imageUrl}
              rating={props.route.params.rating}
              propsStyle={{ width: wp("60%") }}
              listHeader={props.route.params.title}
            />
          </Marker>

          <MapViewDirections
            origin={{
              latitude: 18.579,
              longitude: 73.786,
            }}
            destination={{
              latitude: props.route.params.latProps,
              longitude: props.route.params.longProps,
            }}
            apikey={API.GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor={COLORS.primaryColor}
            optimizeWaypoints={true}
          />
        </MapView>
      </View>
    </View>
  );
};

export default MapViewScreen;
