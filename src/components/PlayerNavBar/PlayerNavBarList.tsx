import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlayerNavBarItem, { PlayerNavBarItemProps } from "./PlayerNavBarItem";

type Props = {
  data: PlayerNavBarItemProps[];
};

const PlayerNavBarList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <PlayerNavBarItem {...item} />} />;
};

export default PlayerNavBarList;

const styles = StyleSheet.create({});
