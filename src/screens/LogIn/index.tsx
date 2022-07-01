import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import getStyles from './styles';

const LogIn = () => {
  const styles = getStyles();

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text}>LogIn</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
