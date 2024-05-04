import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type IndividualSongCardItemProps = {
  name: string;
  image: string;
  artist: string;
};

// Arrow Functions
const IndividualSongCardItem = (props: IndividualSongCardItemProps) => {
  return (
    <>
      <Box alignItems="center" justifyContent="space-between" flexDirection="row" height="52" width="100%" paddingLeft="16"
        paddingRight="16">
        <Box flexDirection="row" alignItems="center" height="100%" width="auto" borderRadius="8" overflow="hidden">
          <Image source={{ uri: props.image }} alt="test image" accessibilityLabel="test image" width="52" height="100%"
            borderRadius="8"
          />
          <VStack alignItems="flex-start" paddingLeft="12">
            <Text color="muted.50" fontSize="16" fontWeight="bold">
              {props.name}
            </Text>
            <Text fontSize="12" fontWeight="regular" color="muted.500">
              {props.artist}
            </Text>
          </VStack>
        </Box>
        <Icon as={Ionicons} name="ellipsis-vertical" size="8" color="muted.500" />
      </Box>
    </>

  );
};

export default IndividualSongCardItem;

