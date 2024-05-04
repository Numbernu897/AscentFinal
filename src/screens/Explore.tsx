import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center } from "native-base";

const Explore = () => {
  const dispatch = useAppDispatch();
  return (
    <Center flex={1}>
      <Button onPress={() => dispatch(removeUser())}>
        Logout
      </Button>
    </Center>
  );
};

export default Explore;

const styles = StyleSheet.create({});
