import React from "react";
import { Box, Text, Image } from "native-base";

export type TopMixesItemProps = {
  name: string;
  image: string;
};

// Arrow Functions
const TopMixesItem = (props: TopMixesItemProps) => {
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
          <Text
            position="absolute"
            top="12%"
            left="12%"
            color="muted.50"
            fontWeight="bold"
            fontSize="16"
          >
            {props.name}
          </Text>

          <Box
            position="absolute"
            width="50"
            height="50"
            bgColor="white"
            rounded="full"
            opacity="0.5"
            top="50%"
            right="-15%"
          ></Box>

          <Box
            position="absolute"
            width="30"
            height="30"
            bgColor="white"
            rounded="full"
            opacity="0.5"
            top="10%"
            left="-5%"
          ></Box>

          <Box width="100%" height="5%" bgColor="primary.500" position="absolute" bottom="0"></Box>
        </Box>
      </Box>
    </>
  );
};

export default TopMixesItem;
