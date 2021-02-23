import React, {useCallback} from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './pages/home';
import UserScreen from './pages/user';
import GoodsScreen from './pages/goods';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon({focused}) {
          return (
            <Image
              source={
                focused
                  ? require('./assets/tabHomePre.png')
                  : require('./assets/tabHome.png')
              }
              style={{width: 26, height: 26}}
            />
          );
        },
      }),
    },
    User: {
      screen: UserScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon({focused}) {
          return (
            <Image
              source={
                focused
                  ? require('./assets/tabMinePre.png')
                  : require('./assets/tabMine.png')
              }
              style={{width: 26, height: 26}}
            />
          );
        },
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 12,
      },
    },
  },
);
// 页面路由
const MainNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({navigation}) => ({
        headerShown: null, //隐藏顶部导航栏
      }),
    },
    Goods: {
      screen: GoodsScreen,
      navigationOptions: ({navigation}) => ({
        title: '列表页',
      }),
    },
  },
  {
    // initialRouteName: 'Hello',
    headerMode: 'screen', // 翻页的时候默认内容区有动画，导航栏无动画，screen会整体翻页
    defaultNavigationOptions: {
      headerStyle: {
        //标题栏样式
        backgroundColor: '#fff',
      },
      headerTintColor: '#595867', //标题文字和按钮颜色
      headerTitleStyle: {
        //标题文字样式
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(MainNavigator);

export default () => {
  const onNavigationStateChange = useCallback((prevState, newState, action) => {
    console.log(prevState, newState, action);
  }, []);

  return <AppContainer onNavigationStateChange={onNavigationStateChange} />;
};
