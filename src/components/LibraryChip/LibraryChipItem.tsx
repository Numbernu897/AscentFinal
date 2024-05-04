import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type LibraryChipItemProps = {
  name: string;
};

// Arrow Functions
const LibraryChipItem = (props: LibraryChipItemProps) => {
  return (
    <>
      <Box
        borderWidth={1}
        borderRadius="full"
        height="100%"
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        borderColor="muted.50"
        px="12"
      >
        <Text
          fontSize="12"
          fontWeight="normal"
          color="muted.50"
        >
          {props.name}
        </Text>
      </Box>

      {/* <Text>CHIP IS MUTED 50 BTW</Text> */}
    </>

  );
};

export default LibraryChipItem;

