import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import { AuthStackParams } from "./config";
import Library from "../screens/Library";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >

      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="SignUp" component={SignUp}  />
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
