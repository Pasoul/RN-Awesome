import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

export default function ({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1000);
  }, []);
  return (
    <SafeAreaView>
      <Text>这是闪屏页</Text>
    </SafeAreaView>
  );
}
