import React, {useEffect} from 'react';

import {SafeAreaView, Text, Button} from 'react-native';

export default function ({navigation}) {
  function navigationBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView>
      <Text>这是goods页</Text>
      <Button onPress={navigationBack} title="返回上一页" />
    </SafeAreaView>
  );
}
