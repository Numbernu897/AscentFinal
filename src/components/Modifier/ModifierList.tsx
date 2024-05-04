import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ModifierItem, { ModifierItemProps } from "./ModifierItem";

type Props = {
  data: ModifierItemProps[];
};

const ModifierList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <ModifierItem {...item} />} />;
};

export default ModifierList;

const styles = StyleSheet.create({});
