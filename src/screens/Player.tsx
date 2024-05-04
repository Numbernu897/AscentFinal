import { StyleSheet, View, Image, AppRegistry, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { loadAsync } from "expo-font";
import { Audio } from "expo-av";
import { Text } from "native-base";

export default function Player() {
  const [sound, setSound] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true; // Flag to track mounted state

    return () => {
      isMounted = false; // Cleanup sets the flag to false
    };
  }, []);

  useEffect(() => {
    // This will run when the component unmounts or sound changes
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  async function loadAndPlayAudio() {
    console.log("Loading Audio");

    if (sound) {
      console.log("Resuming Audio");
      setIsPlaying(true);
      await sound.playAsync();
    } else {
      // Load the audio for the first time
      const { sound: newSound } = await Audio.Sound.createAsync(
        require("../../assets/godzilla.mp3") // replace with your audio file's path
      );
      setSound(newSound);
      setIsPlaying(true);
      await newSound.playAsync();
    }
  }

  async function pauseAudio() {
    console.log("Pausing Audio");
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false); // Set isPlaying to false
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/close.png")} style={styles.close} />
      <Image source={require("../../assets/cover.png")} style={styles.coverImage} />

      <View>
        <Text style={[styles.song]} fontWeight="bold">
          Song name
        </Text>
        <Text style={[styles.artist]} fontWeight="medium">
          Artist name
        </Text>
      </View>
      <View style={styles.lineWithDot}>
        <View style={styles.dot} />
        <View style={styles.line} />
      </View>
      <View style={styles.navBar}>
        <View style={styles.iconContainer}>
          <Image source={require("../../assets/Modify.png")} style={styles.icon} />
          <Text style={[styles.iconName]}>Modify</Text>
        </View>

        <View style={styles.lineInbetween} />

        <View style={styles.iconContainer}>
          <Image source={require("../../assets/Lyrics.png")} style={styles.icon} />
          <Text style={[styles.iconName]} fontWeight="semibold">
            Lyrics
          </Text>
        </View>

        <View style={styles.lineInbetween} />

        <View style={styles.iconContainer}>
          <Image source={require("../../assets/Queue.png")} style={styles.icon} />
          <Text style={[styles.iconName]} fontWeight="semibold">
            Queue
          </Text>
        </View>
      </View>
      <View style={styles.player}>
        <TouchableOpacity>
          <Image source={require("../../assets/shuffle.png")} style={styles.controlIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/backwards.png")} style={styles.controlIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={isPlaying ? pauseAudio : loadAndPlayAudio}>
          <Image
            source={
              isPlaying ? require("../../assets/pause.png") : require("../../assets/play.png")
            }
            style={styles.controlIconPlay}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../../assets/forwards.png")} style={styles.controlIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/loop.png")} style={styles.controlIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#79739B",
    alignItems: "center",
  },
  close: {
    position: "absolute",
    top: "5%",
    left: "5%",
  },
  navBar: {
    backgroundColor: "#A59DD9",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 20,
    paddingBottom: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 35,
    height: 35,
    marginHorizontal: 30,
  },
  iconName: {
    marginTop: 10,
    color: "rgba(255, 255, 255, 0.5)",
  },
  lineInbetween: {
    width: 2,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 1,
    marginHorizontal: 20,
  },
  controls: {
    // backgroundColor: 'red',
    alignItems: "center",
    marginBottom: 100,
  },
  player: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: 30,
    // backgroundColor: 'red'
  },
  controlIcon: {
    width: 25,
    height: 25,
    // backgroundColor: 'red'
  },
  controlIconPlay: {
    width: 80,
    height: 80,
  },
  lineWithDot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Add this line
    width: "100%",
    paddingHorizontal: 30, // Update this line
    marginTop: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  song: {
    right: "20%",
    color: "white",
    fontSize: 30,
    marginTop: 20,
  },
  artist: {
    right: "20%",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 15,
  },
  coverImage: {
    width: "80%",
    height: "40%",
    marginTop: "20%",
  },
});
