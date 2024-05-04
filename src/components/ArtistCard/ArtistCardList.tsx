import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ArtistCardItem, { ArtistCardItemProps } from "./ArtistCardItem";

type Props = {
  data: ArtistCardItemProps[];
};

const ArtistCardList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <ArtistCardItem {...item} />} />;
};

export default ArtistCardList;

const styles = StyleSheet.create({});
