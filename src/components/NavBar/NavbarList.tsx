import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavbarItem, { NavbarItemProps } from "./NavbarItem";

type Props = {
  data: NavbarItemProps[];
};

const NavbarList = (props: Props) => {
  return <FlatList data={props.data} renderItem={({ item }) => <NavbarItem {...item} />} />;
};

export default NavbarList;

const styles = StyleSheet.create({});
