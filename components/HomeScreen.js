import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  parent: {flex: 1, padding: 10},
  components: {flexDirection: 'row'},
  horizontal: {flexDirection: 'row'},
  icons: {
    display: 'flex',
    flex: 4,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '21%',
    padding: 10,
    alignContent: 'center',
  },
  baseIcon: {
    alignSelf: 'center',
    borderRadius: 15,
    width: 30,
    height: 30,
    margin: 0,
    padding: 0,
    flexGrow: 1,
  },
  buttons: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  flexOne: {
    flex: 1,
    flexShrink: 0,
    margin: 1,
  },
  whiteBorder: {borderBottomColor: 'white', borderBottomWidth: 1},
  volumeButton: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
  },
  visualButton: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
  },
  rightIconText: {
    alignSelf: 'center',
    color: 'white',
  },
});

const HomeScreen = ({navigation}) => {
  const [colorsArray, setColorsArray] = useState(Array(8).fill(false));
  const [arrowsArray, setArrowsArray] = useState(Array(8).fill(false));
  const [numbersArray, setNumbersArray] = useState(Array(8).fill(false));
  const [selected, setSelected] = useState({});
  const colors = [
    'red',
    'blue',
    'darkred',
    'green',
    'pink',
    'black',
    'skyblue',
    'brown',
  ];

  const arrows = [
    'arrow-left',
    'arrow-top-left',
    'arrow-up',
    'arrow-top-right',
    'arrow-right',
    'arrow-bottom-right',
    'arrow-down',
    'arrow-bottom-left',
  ];

  const colorOnPress = i => {
    const cuesValue =
      colorsArray[i] === false ? {cues: {audio: true, video: true}} : null;
    setSelected({
      ...selected,
      [`${colors[i]}-color`]: cuesValue,
    });
    setColorsArray(colorsArray.map((c, index) => (index === i ? !c : c)));
  };

  const arrowOnPress = i => {
    const cuesValue =
      arrowsArray[i] === false ? {cues: {audio: true, video: true}} : null;
    setSelected({
      ...selected,
      [`${arrows[i]}-arrow`]: cuesValue,
    });
    setArrowsArray(arrowsArray.map((a, index) => (index === i ? !a : a)));
  };

  const numbersOnPress = i => {
    const digits = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
    ];
    const cuesValue =
      numbersArray[i] === false ? {cues: {audio: true, video: true}} : null;
    setSelected({
      ...selected,
      [`${digits[i]}-number`]: cuesValue,
    });

    setNumbersArray(numbersArray.map((a, index) => (index === i ? !a : a)));
  };

  const showData = () => {
    const data = {};
    for (const key in selected) {
      if (selected[key] !== null) {
        data[key] = selected[key];
      }
    }
    navigation.navigate('Data', {data});
    console.log(data);
  };

  return (
    <View style={styles.parent}>
      <Text>Colors</Text>
      <View style={styles.horizontal}>
        <View style={styles.icons}>
          {colors.map((c, i) => (
            <View key={`colors-${i}`} style={[styles.item]}>
              <Pressable onPress={() => colorOnPress(i)}>
                <Ionicons
                  name="checkmark"
                  size={31}
                  color={colorsArray[i] ? 'white' : c}
                  style={[styles.baseIcon, {backgroundColor: c}]}
                />
              </Pressable>
            </View>
          ))}
        </View>
        <View style={styles.buttons}>
          <Pressable style={[styles.flexOne, styles.whiteBorder]}>
            <MaterialIcons
              name="volume-high"
              size={25}
              style={styles.volumeButton}
              color="white"
            />
            <Text style={styles.rightIconText}>AUDIO</Text>
          </Pressable>
          <Pressable style={styles.flexOne}>
            <MaterialIcons
              name="eye-outline"
              size={25}
              style={styles.visualButton}
              color="white"
            />
            <Text style={styles.rightIconText}>VISUAL</Text>
          </Pressable>
        </View>
      </View>
      <Text>Arrows</Text>
      <View style={styles.horizontal}>
        <View style={styles.icons}>
          {arrows.map((a, i) => (
            <View key={`arrows-${i}`} style={[styles.item]}>
              <Pressable onPress={() => arrowOnPress(i)}>
                <MaterialIcons
                  name={a}
                  size={31}
                  color={arrowsArray[i] === true ? 'black' : '#a9d9e9'}
                />
              </Pressable>
            </View>
          ))}
        </View>
        <View style={styles.buttons}>
          <Pressable style={[styles.flexOne, styles.whiteBorder]}>
            <MaterialIcons
              name="volume-high"
              size={25}
              style={styles.volumeButton}
              color="white"
            />
            <Text style={styles.rightIconText}>AUDIO</Text>
          </Pressable>
          <Pressable style={styles.flexOne}>
            <MaterialIcons
              name="eye-outline"
              size={25}
              style={styles.visualButton}
              color="white"
            />
            <Text style={styles.rightIconText}>VISUAL</Text>
          </Pressable>
        </View>
      </View>
      <Text>Arrows</Text>
      <View style={styles.horizontal}>
        <View style={styles.icons}>
          {[...Array(8)].map((n, i) => (
            <View key={`numbers-${i}`} style={[styles.item]}>
              <Pressable
                style={styles.horizontal}
                onPress={() => numbersOnPress(i)}>
                <Text style={{fontSize: 25}}>{i + 1}</Text>
                <MaterialIcons
                  name={
                    numbersArray[i] === true
                      ? 'checkbox-marked-outline'
                      : 'checkbox-blank-outline'
                  }
                  size={31}
                />
              </Pressable>
            </View>
          ))}
        </View>
        <View style={styles.buttons}>
          <Pressable style={[styles.flexOne, styles.whiteBorder]}>
            <MaterialIcons
              name="volume-high"
              size={25}
              style={styles.volumeButton}
              color="white"
            />
            <Text style={styles.rightIconText}>AUDIO</Text>
          </Pressable>
          <Pressable style={styles.flexOne}>
            <MaterialIcons
              name="eye-outline"
              size={25}
              style={styles.visualButton}
              color="white"
            />
            <Text style={styles.rightIconText}>VISUAL</Text>
          </Pressable>
        </View>
      </View>
      <Button title="Show data" onPress={showData} />
    </View>
  );
};
export default HomeScreen;
