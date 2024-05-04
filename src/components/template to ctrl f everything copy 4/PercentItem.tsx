import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type PercentItemProps = {
  thing: string;
};

// Arrow Functions
const PercentItem = (props: PercentItemProps) => {
  return (
    <>
     
    </>

  );
};

export default PercentItem;

// CTRL F REPLACE "Percent"