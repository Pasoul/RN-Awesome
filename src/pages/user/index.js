import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';

const User = ({CountModel: {count}}) => (
  <SafeAreaView>
    <Text>User</Text>
    <Text>{count}</Text>
  </SafeAreaView>
);

export default connect(({CountModel}) => ({
  CountModel,
}))(User);
