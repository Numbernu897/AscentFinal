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

export type SearchCardItemProps = {
  name: string;
  image: string;
  color: string;
};

const SearchCardItem = (props: SearchCardItemProps) => {
  console.log("Image URL:", props.image); // Logging to check what URL is received
  return (
    <>
      <Row
        width="47%"
        backgroundColor={props.color}
        height="24"
        overflow="hidden"
        alignItems="flex-start"
        justifyContent="space-between"
        p="3"
        borderRadius="8"
      >
        <Text fontWeight="bold" fontSize="16" color="muted.50">
          {props.name}
        </Text>
        <Box
          width="16"
          height="16"
          style={{
            transform: [{ rotate: "-25deg" }],
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            marginRight: -25,
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
          }}
        >
          <Image
            source={{ uri: props.image }}
            alt="Rotated Image"
            width="100%"
            height="100%"
            borderRadius="8"
          />
        </Box>
      </Row>
    </>
  );
};

export default SearchCardItem;
