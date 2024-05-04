import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchCardItem, { SearchCardItemProps } from "./SearchCardItem";

type Props = {
  data: SearchCardItemProps[];
};

const SearchCardList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <SearchCardItem {...item} />} />;
};

export default SearchCardList;

const styles = StyleSheet.create({});
