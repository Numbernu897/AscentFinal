import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import StatsItem, { StatsItemProps } from "./StatsItem";

type Props = {
  data: StatsItemProps[];
};

const StatsList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <StatsItem {...item} />} />;
};

export default StatsList;

const styles = StyleSheet.create({});
