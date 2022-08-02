import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useStyles} from './styles';

const LogIn = () => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text}>LogIn</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
