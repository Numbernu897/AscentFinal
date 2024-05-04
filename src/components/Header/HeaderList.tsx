import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderItem, { HeaderItemProps } from "./HeaderItem";

type Props = {
  data: HeaderItemProps[];
};

const HeaderList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <HeaderItem {...item} />} />;
};

export default HeaderList;

const styles = StyleSheet.create({});
