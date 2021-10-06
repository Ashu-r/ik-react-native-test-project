import React from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Me = () => {
  return <Text>This is information about me </Text>;
};
const Projects = () => {
  return <Text>This is space for my projects</Text>;
};
const Drawer = createDrawerNavigator();

const AboutScreen = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Me" component={Me} />
      <Drawer.Screen name="Projects" component={Projects} />
    </Drawer.Navigator>
  );
};

export default AboutScreen;
