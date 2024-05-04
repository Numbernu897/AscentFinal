import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SettingCatagoryItem, { SettingCatagoryItemProps } from "./SettingCatagoryItem";

type Props = {
  data: SettingCatagoryItemProps[];
};

const SettingCatagoryList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <SettingCatagoryItem {...item} />} />;
};

export default SettingCatagoryList;

const styles = StyleSheet.create({});
