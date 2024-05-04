import { Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/user.reducer";
import { Button, Column, Text } from "native-base";
import ErrorOverlay from "../../components/ErrorOverlay";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase";

type Props = {} & NativeStackScreenProps<AuthStackParams, "Login">;

const Login = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  function onSignUp() {
    navigation.navigate("SignUp");
  }
  function onLoggedIn() {
    dispatch(setUser());
  }
  function Player() {
    navigation.navigate("Player");
  }
  function Explore() {
    navigation.navigate("Explore");
  }
  function Library() {
    navigation.navigate("Library");
  }

  useEffect(() => {
    async function loadData() {
      const citiesRef = collection(firebaseDB, "cities");
      const querySnapshot = await getDocs(citiesRef);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }

    loadData(); // Fetch Data
  }, []);

  return (
    <Column safeAreaTop>
      <ErrorOverlay />
      <Text fontWeight="bold">Anything Goes</Text>
      <Button onPress={onSignUp}>Sign Up</Button>
      <Button onPress={onLoggedIn}>Login</Button>
      <Button onPress={Player}>Player</Button>
      <Button onPress={Explore}>Explore</Button>
      <Button onPress={Library}>component lab (library)</Button>
    </Column>
  );
};

export default Login;

const styles = StyleSheet.create({});
