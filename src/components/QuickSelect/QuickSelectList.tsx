import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import QuickSelectItem, { QuickSelectItemProps } from "./QuickSelectItem";

type Props = {
  data: QuickSelectItemProps[];
};

const QuickSelectList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <QuickSelectItem {...item} />} />;
};

export default QuickSelectList;

const styles = StyleSheet.create({});
