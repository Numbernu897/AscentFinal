import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type SettingCatagoryItemProps = {
  name: string;
  icon: string;
};

// Arrow Functions
const SettingCatagoryItem = (props: SettingCatagoryItemProps) => {
  return (
<>
  <Box
    alignItems="center"
    justifyContent="space-between"
    flexDirection="row"
    height="auto"
    width="100%"
    p="4"
    backgroundColor="muted.900"
  >
    <Box
      flexDirection="row"
      alignItems="center"
      height="100%"
      borderRadius="8"
      overflow="hidden"
      paddingRight="3"
    >
      <Icon as={Ionicons} name={props.icon} size="6" color="muted.50" />
      <Text
        color="muted.50"
        fontSize="md"
        fontWeight="bold"
        paddingLeft="3"
      >
        {props.name}
      </Text>
    </Box>
    <Icon as={Ionicons} name="chevron-forward" size="6" color="muted.50" />
  </Box>
</>


  );
};

export default SettingCatagoryItem;

// CTRL F REPLACE "SettingCatagory"