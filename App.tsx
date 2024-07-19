import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import YesNoScreen from './components/YesNoScreen';
import QuestionScreen from './components/QuestionScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const themeColor = '#f5f5f5';
const Tab = createBottomTabNavigator();


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={themeColor} barStyle="dark-content" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName: string;

              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'YesNo':
                  iconName = 'help-circle';
                  break;
                case 'Question':
                  iconName = 'help-outline';
                  break;
                default:
                  iconName = 'home';
                  break;
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="YesNo" component={YesNoScreen} />
          <Tab.Screen name="Question" component={QuestionScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
});

export default App;
