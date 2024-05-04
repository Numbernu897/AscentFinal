import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import DropDownItem, { DropDownItemProps } from "./DropDownItem";

type Props = {
  data: DropDownItemProps[];
};

const DropDownList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <DropDownItem {...item} />} />;
};

export default DropDownList;

const styles = StyleSheet.create({});
