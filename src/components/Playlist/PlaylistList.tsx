import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaylistItem, { PlaylistItemProps } from "./PlaylistItem";

type Props = {
  data: PlaylistItemProps[];
};

const PlaylistList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <PlaylistItem {...item} />} />;
};

export default PlaylistList;

const styles = StyleSheet.create({});
