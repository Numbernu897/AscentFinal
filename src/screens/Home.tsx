import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center, Column, Heading, Row, ScrollView } from "native-base";
import HeaderItem from "../components/Header/HeaderItem";
import { HEADER_LIST, IMG_URL, QUICKSELECT_LIST, TOPMIXES_LIST } from "../data/data";
import QuickSelectList from "../components/QuickSelect/QuickSelectList";
import QuickSelectItem from "../components/QuickSelect/QuickSelectItem";
import PlaylistItem from "../components/Playlist/PlaylistItem";
import TopMixesItem from "../components/TopMixes/TopMixesItem";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <Column bg="muted.900" flex={1}>
      <HeaderItem name="Quang Minh" avatar={HEADER_LIST[0].avatar} />

      <Column my="22">
        <Heading color="white" px="4" mb="4">
          Quick Selection
        </Heading>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Row space="4" pl="4">
            <Column space="4">
              {QUICKSELECT_LIST.map((item) => (
                <QuickSelectItem key={item.name + "0"} {...item} />
              ))}
            </Column>
            <Column space="4">
              {QUICKSELECT_LIST.map((item) => (
                <QuickSelectItem key={item.name + "1"} {...item} />
              ))}
            </Column>
            <Column space="4">
              {QUICKSELECT_LIST.map((item) => (
                <QuickSelectItem key={item.name + "2"} {...item} />
              ))}
            </Column>
          </Row>
        </ScrollView>
      </Column>

      <Column>
        <Heading color="white" px="4" mb="4">
          Your top playlists
        </Heading>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Row space="4" px="4">
            <PlaylistItem pin image={IMG_URL} length="1 hour . 1 minutes" name="Favourites" />
            <PlaylistItem image={IMG_URL} length="1 hour . 1 minutes" name="Favourites" />
            <PlaylistItem image={IMG_URL} length="1 hour . 1 minutes" name="Favourites" />
            <PlaylistItem image={IMG_URL} length="1 hour . 1 minutes" name="Favourites" />
            <PlaylistItem image={IMG_URL} length="1 hour . 1 minutes" name="Favourites" />
          </Row>
        </ScrollView>
        <Column my="22">
          <Heading color="white" px="4" mb="4">
            Quick Selection
          </Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Row space="4" pl="4">
              {TOPMIXES_LIST.map((item) => (
                <TopMixesItem key={item.name + "0"} {...item} />
              ))}
            </Row>
          </ScrollView>
        </Column>
      </Column>

    </Column>
  );
};

export default Home;

const styles = StyleSheet.create({});
