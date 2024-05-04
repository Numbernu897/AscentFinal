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
  Row,
} from "native-base";

import { Ionicons } from "@expo/vector-icons";
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";

export type QuickSelectItemProps = {
  name: string;
  image: string;
  artist: string;
};

// Arrow Functions
const QuickSelectItem = (props: QuickSelectItemProps) => {
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        height="52"
        width="64"
      >
        <Row
          space="4"
          alignItems="center"
          height="100%"
          width="auto"
          borderRadius="8"
          overflow="hidden"
        >
          <Image
            source={{ uri: props.image }}
            alt="test image"
            accessibilityLabel="test image"
            width="52"
            height="100%"
            borderRadius="8"
          />
          <VStack alignItems="flex-start">
            <Text color="muted.50" fontSize="16" fontWeight="bold">
              {props.name}
            </Text>
            <Text fontSize="12" fontWeight="regular" color="muted.500">
              {props.artist}
            </Text>
          </VStack>
        </Row>
        <Icon as={Ionicons} name="ellipsis-vertical" size="8" color="muted.500" />
      </Box>
    </>
  );
};

export default QuickSelectItem;
