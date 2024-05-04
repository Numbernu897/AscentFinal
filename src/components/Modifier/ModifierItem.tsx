import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { NativeBaseProvider, Box, HStack, Avatar, Icon, IconButton, Text, Image, Button, Center, VStack, View, Divider } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import appTheme from "../../theme";
import { ImageSourcePropType } from "react-native";


export type ModifierItemProps = {
  name: string;
};

// Arrow Functions
const ModifierItem = (props: ModifierItemProps) => {
  return (
    <>
 <Box width="100%" p="4" bgColor="muted.900" height="auto"
        alignSelf="center" justifyContent="space-between" flexDirection="row" alignItems="center">

        <VStack alignItems="center" justifyContent="center" flex={1} space="4">
          <Text color="muted.50" fontWeight="bold" fontSize="30">
            {props.name}
          </Text>
          <HStack space="3" alignItems="center" justifyContent="space-between">
            <Icon as={Ionicons} name="remove-circle-outline" size="10" color="muted.50" />
            <Box flex={1} height="7" alignSelf="center" justifyContent="center"
              borderRadius="full" overflow="hidden">
              <Box height="full" width="50%" bgColor="muted.50" position="absolute" />
              <Box height="full" width="full" bgColor="muted.50" borderRadius="full" position="absolute" opacity={0.2}/>
            </Box>
            <Icon as={Ionicons} name="add-circle-outline" size="10" color="muted.50" />
          </HStack>
          <HStack space="10" alignItems="center" justifyContent="center">
            <Button variant="outline" colorScheme="primary" size="sm" borderRadius="full">
              Reset
            </Button>
            <Button variant="outline" colorScheme="primary" size="sm" borderRadius="full">
              100%
            </Button>
          </HStack>
        </VStack>
    </Box>
    </>

  );
};

export default ModifierItem;

