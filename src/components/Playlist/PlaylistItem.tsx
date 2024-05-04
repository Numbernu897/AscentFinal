import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import {
  NativeBaseProvider,
  Box,
  HStack,
  Avatar,
  Icon,
  IconButton,
  Text,
  Image,
  Button,
  Center,
  VStack,
  View,
  Divider,
} from "native-base";

import { Ionicons } from "@expo/vector-icons";
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";

export type PlaylistItemProps = {
  name: string;
  length: string;
  image: string;
  pin?: boolean;
};

// Arrow Functions
const PlaylistItem = (props: PlaylistItemProps) => {
  return (
    <>
      <Box alignItems="center" justifyContent="center">
        <Box size="150" bgColor="black" borderRadius="8" overflow="hidden" position="relative">
          <Image
            source={{ uri: props.image }}
            alt="test image"
            accessibilityLabel="test image"
            width="100%"
            height="100%"
            borderRadius="8"
            opacity="0.5"
          />
          {props.pin && (
            <Box position="absolute">
              <Icon as={Ionicons} name="caret-down" size="6" color="muted.50" />
            </Box>
          )}
          <Box
            position="absolute"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="muted.50" fontWeight="bold" fontSize="16">
              {props.name}
            </Text>
          </Box>

          <Box
            position="absolute"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="flex-end"
            paddingBottom="2"
          >
            <Text color="muted.50" fontWeight="regular" fontSize="10">
              {props.length}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PlaylistItem;
