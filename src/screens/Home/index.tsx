import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Button from '@stryberventures/gaia-react-native.button';
import {Routes} from '../../navigation/Routes';

const Home = () => {
  const styles = useStyles();
  const {navigate} = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text}>Home</Text>
        <Button onPress={() => navigate(Routes.LogIn)}>Log in</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
