import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import IndividualSongCardItem, { IndividualSongCardItemProps } from "./IndividualSongCardItem";

type Props = {
  data: IndividualSongCardItemProps[];
};

const IndividualSongCardList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <IndividualSongCardItem {...item} />} />;
};

export default IndividualSongCardList;

const styles = StyleSheet.create({});
