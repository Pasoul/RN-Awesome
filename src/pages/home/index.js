import React, {useCallback} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

export default ({navigation}) => {
  const navigationTo = useCallback(() => {
    navigation.navigate('User');
  }, []);
  const navigationToGoods = useCallback(() => {
    navigation.navigate('Goods');
  }, []);
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button onPress={navigationTo} title="go to user" />
      <Button onPress={navigationToGoods} title="go to goods" />
    </SafeAreaView>
  );
};
