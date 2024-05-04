import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type StatsItemProps = {
  top: number;
  name: string;
  artist: string;
  image: string;

};

// Arrow Functions
const StatsItem = (props: StatsItemProps) => {
  return (
    <>

      <Box
        width="100%"
        paddingLeft={"16"}  // Explicitly setting left margin
        paddingRight={"16"}  // Explicitly setting right margin
        backgroundColor="muted.900"
        alignSelf="center"
        justifyContent="center"
        height="auto"
      >
        <HStack width="100%" mx="16" bgColor={"muted.800"} alignSelf={"center"} alignItems="center" px="24" py="8"
          borderRadius="8">

          <Text color="muted.50" fontWeight="bold" fontSize="20" paddingRight="24" >
            #{props.top}
          </Text>
          <Image source={{ uri: props.image }} alt="test image" accessibilityLabel="test image" width="52" height="52"
            borderRadius="8"
          />
          <VStack alignItems="flex-start" paddingLeft="24">
            <Text color="muted.50" fontSize="16" fontWeight="bold">
              {props.name}
            </Text>
            <Text fontSize="12" fontWeight="regular" color="muted.500">
              {props.artist}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>

  );
};

export default StatsItem;

