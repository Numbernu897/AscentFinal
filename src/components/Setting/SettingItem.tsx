import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type SettingItemProps = {
  name: string;
  nameDescription: string;
  info: string;
};

// Arrow Functions
const SettingItem = (props: SettingItemProps) => {
  return (
    <>
      <Box alignItems="center" justifyContent="space-between" flexDirection="row" height="auto" width="100%" paddingLeft="16"
        paddingRight="16" backgroundColor={"muted.900"} borderTopColor="muted.800" borderBottomColor={"muted.800"}
        borderTopWidth={"1"} borderBottomWidth={"1"}>
        <VStack justifyContent={"center"} py="18">
          <Text color="muted.50" fontSize="md" fontWeight="Regular">
            {props.name}
          </Text>
          <Text fontSize="2xs" fontWeight="regular" color="muted.500">
            {props.nameDescription}
          </Text>
        </VStack>
        <Text color="muted.500" fontSize="16" fontWeight="Regular" >
          {props.info}
        </Text>
      </Box>

    </>


  );
};

export default SettingItem;

