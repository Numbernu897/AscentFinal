import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopMixesItem, { TopMixesItemProps } from "./TopMixesItem";

type Props = {
  data: TopMixesItemProps[];
};

const TopMixesList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <TopMixesItem {...item} />} />;
};

export default TopMixesList;

const styles = StyleSheet.create({});
