import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type DropDownItemProps = {
  name: string;
};

// Arrow Functions
const DropDownItem = (props: DropDownItemProps) => {
  return (
    <>
      <HStack paddingLeft={"16"} space="8" alignItems={"center"}>
        <Text fontSize="sm" fontWeight="bold" color="primary.600">
          {props.name}
        </Text>
        <Icon as={Ionicons} name="swap-vertical" size="20" color="muted.500" />
      </HStack>

    </>

  );
};

export default DropDownItem;

