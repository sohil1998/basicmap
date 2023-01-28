import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

//screens
import Login from "./src/codeFiles/login";
import Home from "./src/codeFiles/home";
import MapViewScreen from "./src/codeFiles/map";

const Stack = createStackNavigator();

const App = () => {
  const [assetsLoaded, setassetsLoaded] = useState(false);

  setUpSystem = async () => {
    await Font.loadAsync({
      "font-bold": require("./assets/fonts/Manrope-Bold.ttf"),
      "font-semibold": require("./assets/fonts/Manrope-SemiBold.ttf"),
      "font-regular": require("./assets/fonts/Manrope-Regular.ttf"),
      "font-medium": require("./assets/fonts/Manrope-Medium.ttf"),
    });
  };
  if (assetsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="map" component={MapViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={setUpSystem()}
        onFinish={() => {
          if (Font.isLoaded) {
            setassetsLoaded(true);
          } else {
            setassetsLoaded(true);
          }
        }}
        onError={console.warn}
        autoHideSplash={true}
      />
    );
  }
};

export default App;
