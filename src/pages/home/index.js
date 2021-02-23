import React, {useCallback} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';
import {connect} from 'react-redux';

function Home({navigation, dispatch, CountModel}) {
  const {count} = CountModel;
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
      <View>
        <Text>{count}</Text>
        <Button
          title={'+'}
          key="add"
          onPress={() => {
            dispatch({type: 'CountModel/add'});
          }}>
          +
        </Button>
        <Button
          title={'-'}
          key="minus"
          onPress={() => {
            dispatch({type: 'CountModel/minus'});
          }}>
          -
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default connect(({CountModel}) => ({
  CountModel,
}))(Home);
