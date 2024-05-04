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

export type ArtistCardItemProps = {
  name: string;
  avatar: string;
  SongAmount: number;
};

// Arrow Functions
const ArtistCardItem = (props: ArtistCardItemProps) => {
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        height="8%"
        width="100%"
        paddingLeft="16"
        paddingRight="16"
        backgroundColor={"muted.900"}
      >
        <Box backgroundColor="muted.900">
          <HStack alignItems="center" space="16">
            <Avatar size="md" source={{ uri: props.avatar }} />
            <VStack>
              <Text fontSize="20" fontWeight="bold" color="muted.50">
                {props.name}
              </Text>
              <Text fontSize="14" fontWeight="regular" color="muted.500">
                {props.SongAmount}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default ArtistCardItem;
