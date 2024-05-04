import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SettingItem, { SettingItemProps } from "./SettingItem";

type Props = {
  data: SettingItemProps[];
};

const SettingList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <SettingItem {...item} />} />;
};

export default SettingList;

const styles = StyleSheet.create({});
