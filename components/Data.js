import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    margin: 10,
  },
});
const Data = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <View>
      {Object.keys(data).length === 0 ? (
        <View>
          <Text style={styles.text}>No items selected</Text>
        </View>
      ) : (
        <View>
          {Object.keys(data).map(k => (
            <Text
              style={styles.text}
              key={
                k
              }>{`${k}: (Cues: Audio ${data[k].cues.audio}, Video ${data[k].cues.video})`}</Text>
          ))}
        </View>
      )}

      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Data;
