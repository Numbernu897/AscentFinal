import React from "react";
import { Box, HStack, Icon, Text, VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export type NavbarItemProps = {
  activeScreen: 'home' | 'explore' | 'library';
};

const NavbarItem = ({ activeScreen }: NavbarItemProps) => {
  return (
    <Box bg="muted.800" p="3" safeAreaBottom width="100%" left={0} right={0} bottom={0}         
    >
      <HStack justifyContent="space-evenly" alignItems="center">
        
        <VStack space="1" alignItems="center">
          <Icon as={<Ionicons name="home" />} color={activeScreen === 'home' ? "primary.600" : "white"} size="lg" />
          <Text color={activeScreen === 'home' ? "primary.600" : "white"} fontSize="2xs" bold>
            Home
          </Text>
        </VStack>

        <VStack space="1" alignItems="center">
          <Icon as={<Ionicons name="search" />} color={activeScreen === 'explore' ? "primary.600" : "white"} size="lg" />
          <Text color={activeScreen === 'explore' ? "primary.600" : "white"} fontSize="2xs">
            Explore
          </Text>
        </VStack>

        <VStack space="1" alignItems="center">
          <Icon as={<Ionicons name="list" />} color={activeScreen === 'library' ? "primary.600" : "white"} size="lg" />
          <Text color={activeScreen === 'library' ? "primary.600" : "white"} fontSize="2xs">
            Library
          </Text>
        </VStack>

      </HStack>
    </Box>
  );
};

export default NavbarItem;
