import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
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
  Column,
  PlayIcon,
} from "native-base";

import { Ionicons } from "@expo/vector-icons";
import appTheme from "../theme";
import { HEADER_LIST, DROPDOWN_LIST } from "../data/data";
import HeaderList from "../components/Header/HeaderList";
import NavbarItem from "../components/NavBar/NavbarItem";
import ArtistCardList from "../components/ArtistCard/ArtistCardList";
import { TopMixesItemProps } from "../components/TopMixes/TopMixesItem";
import TopMixesList from "../components/TopMixes/TopMixesList";
import { SearchCardItemProps } from "../components/SearchCard/SearchCardItem";
import SearchCardList from "../components/SearchCard/SearchCardList";
import LibraryChipList from "../components/LibraryChip/LibraryChipList";
import PlaylistList from "../components/Playlist/PlaylistList";
import IndividualSongCardList from "../components/IndividualSongCard/IndividualSongCardList";
import QuickSelectList from "../components/QuickSelect/QuickSelectList";
import StatsList from "../components/Stats/StatsList";
import PlayerNavBarItem from "../components/PlayerNavBar/PlayerNavBarItem";
import ModifierList from "../components/Modifier/ModifierList";
import SettingCatagoryList from "../components/SettingCatagory/SettingCatagoryList";
import SettingList from "../components/Setting/SettingList";
import DropDownList from "../components/DropDown/DropDownList";

const Library = () => {
  return (
    <>
      <Column flex="1" bg="muted.900">
        {/* Recently Played */}

        {/* <HStack paddingLeft={"16"} space="8" alignItems={"center"}>
        <Text fontSize="sm" fontWeight="bold" color="primary.600">
          Placeholder
        </Text>
        <Icon as={Ionicons} name="swap-vertical" size="20" color="muted.500" />
      </HStack> */}

        {/* QUICK SELECT CARD (PINNED) */}

        {/* <Box alignItems="center" justifyContent="space-between" flexDirection="row" height="52" width="90%" paddingLeft="16"
        paddingRight="16">
        <Box flexDirection="row" alignItems="center" height="100%" width="auto" borderRadius="8" overflow="hidden">
          <Box>
            <Image source={require('../../assets/testimg.png')} alt="test image" accessibilityLabel="test image" width="52" height="100%"
              borderRadius="8"
            />
            <Box position="absolute">
              <Icon as={Ionicons} name="caret-down" size="4" color="muted.50" />
            </Box>
          </Box>
          <VStack alignItems="flex-start" paddingLeft="12">
            <Text color="muted.50" fontSize="16" fontWeight="bold">
              Placeholder
            </Text>
            <Text fontSize="12" fontWeight="regular" color="muted.500">
              Placeholder
            </Text>
          </VStack>
        </Box>
        <Icon as={Ionicons} name="ellipsis-vertical" size="6" color="muted.500" />
      </Box> */}

        {/* Playlist Boxes (PINNED)*/}

        <Box alignItems="center" justifyContent="center">
          <Box size="150" bgColor="black" borderRadius="8" overflow="hidden" position="relative">
            <Image
              source={require("../../assets/testimg.png")}
              alt="test image"
              accessibilityLabel="test image"
              width="100%"
              height="100%"
              borderRadius="8"
              opacity="0.5"
            />
            <Box position="absolute">
              <Icon as={Ionicons} name="caret-down" size="6" color="muted.50" />
            </Box>

            <Box
              position="absolute"
              width="100%"
              height="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="muted.50" fontWeight="bold" fontSize="16">
                Pop mix
              </Text>
            </Box>

            <Box
              position="absolute"
              width="100%"
              height="100%"
              alignItems="center"
              justifyContent="flex-end"
              paddingBottom="2"
            >
              <Text color="muted.50" fontWeight="regular" fontSize="10">
                1 hour · 1 minutes
              </Text>
            </Box>
          </Box>
        </Box>

        <HeaderList data={HEADER_LIST} />
        <DropDownList data={DROPDOWN_LIST} />
        {/* <SettingCatagoryList data={SETTINGCATAGORY_LIST} /> */}
      </Column>
    </>
  );
};

export default Library;
