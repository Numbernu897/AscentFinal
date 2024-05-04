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

export type HeaderItemProps = {
  name: string;
  avatar: string;
};

// Arrow Function
const HeaderItem = (props: HeaderItemProps) => {
  return (
    <Box safeAreaTop backgroundColor="muted.900">
      <HStack justifyContent="space-between" alignItems="center" px="4">
        <HStack alignItems="center" space="3">
          <Avatar size="md" source={{ uri: props.avatar }} />
          <VStack>
            <Text fontSize="lg" fontWeight="bold" color="text.50">
              {props.name}
            </Text>
            <Text fontSize="sm" fontWeight="medium" color="text.500">
              Welcome back!
            </Text>
          </VStack>
        </HStack>
        <HStack space="2">
          <IconButton icon={<Ionicons name="stats-chart-outline" size={24} color="white" />} />
          <IconButton icon={<Ionicons name="settings-outline" size={24} color="white" />} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default HeaderItem;
