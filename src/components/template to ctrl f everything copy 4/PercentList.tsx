import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PercentItem, { PercentItemProps } from "./PercentItem";

type Props = {
  data: PercentItemProps[];
};

const PercentList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <PercentItem {...item} />} />;
};

export default PercentList;

const styles = StyleSheet.create({});
