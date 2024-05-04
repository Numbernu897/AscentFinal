import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type PlayerNavBarItemProps = {
  activeScreen: 'modify' | 'lyrics' | 'queue';
};

// Arrow Functions
const PlayerNavBarItem = ({ activeScreen }: PlayerNavBarItemProps) => {
  return (
    <>
      <Box bg="muted.900" position="absolute" bottom="0" left="0" right="0" pt="4" pb="3" flexDirection="row" justifyContent="space-between" alignItems="center" zIndex="3">
        <Box alignItems="center" flex={1} justifyContent="center">
          <Icon as={Ionicons} name="color-wand" size="6" color={activeScreen === 'modify' ? "primary.600" : "muted.50"} />
          <Text color={activeScreen === 'modify' ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.5)"} fontWeight="Regular" fontSize="12">Modify</Text>
        </Box>

        <Divider orientation="vertical" bg="rgba(255, 255, 255, 0.15)" thickness="2" h="10" rounded="1" />

        <Box alignItems="center" flex={1} justifyContent="center">
          <Icon as={Ionicons} name="musical-notes" size="6" color={activeScreen === 'lyrics' ? "primary.600" : "muted.50"} />
          <Text color={activeScreen === 'lyrics' ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.5)"} fontWeight="Regular" fontSize="12">Lyrics</Text>
        </Box>

        <Divider orientation="vertical" bg="rgba(255, 255, 255, 0.15)" thickness="2" h="10" rounded="1" />

        <Box alignItems="center" flex={1} justifyContent="center">
          <Icon as={Ionicons} name="list" size="8" color={activeScreen === 'queue' ? "primary.600" : "muted.50"} />
          <Text color={activeScreen === 'queue' ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.5)"} fontWeight="Regular" fontSize="12">Queue</Text>
        </Box>
      </Box>
    </>

  );
};

export default PlayerNavBarItem;
