import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";

import { Button, Center, Column, Heading, Row, ScrollView, Box, HStack, Avatar, VStack, Text, IconButton, Image } from "native-base";
import { Ionicons } from '@expo/vector-icons';


import SearchCardItem from "../components/SearchCard/SearchCardItem";
import { SEARCHCARD_LIST } from "../data/data";

const Explore = () => {
  const dispatch = useAppDispatch();
  return (
    <Column bg="muted.900" flex={1}>
      <Box safeAreaTop backgroundColor="muted.900" mb="22">
        <HStack justifyContent="space-between" alignItems="center" px="4">
          <HStack alignItems="center" space="3">
            <Image
              source={require('../../assets/Logo.png')}  // Update path as needed
              alt="Logo"
              size="32px"
              borderRadius="full"
            />
            <VStack>
              <Heading color="white">Explore</Heading>
            </VStack>
          </HStack>
        </HStack>
      </Box>




      <Box px="4">
        {SEARCHCARD_LIST.map((item, index) => (
          <SearchCardItem key={item.name + String(index)} {...item} />
        ))}
      </Box>
      <Column my="22" flex={1}>
        <Heading color="white" px="4" mb="4">
          Quick Selection
        </Heading>
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <Column w="full">
            <Row w="full" background="red.200">
              {SEARCHCARD_LIST.map((item, index) => (
                <SearchCardItem key={item.name + String(index)} {...item} />
              ))}
            </Row>
          </Column>
        </ScrollView>
      </Column>
    </Column>
  );
};

export default Explore;

const styles = StyleSheet.create({});
