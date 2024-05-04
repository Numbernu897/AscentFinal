import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import LibraryChipItem, { LibraryChipItemProps } from "./LibraryChipItem";

type Props = {
  data: LibraryChipItemProps[];
};

const LibraryChipList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <LibraryChipItem {...item} />} />;
};

export default LibraryChipList;

const styles = StyleSheet.create({});
