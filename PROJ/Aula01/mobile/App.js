import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();


import Tela1 from './src/pages/Tela1/index.js';
import Tela2 from './src/pages/Tela2/index.js';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tela1" activeColor="#328ECB" barStyle={{ backgroundColor: 'white' }}>
        <Tab.Screen name="Tela1" component={Tela1}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />

        <Tab.Screen name="Tela2" component={Tela2}
          options={{
            tabBarLabel: 'Tarefas',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="note-edit" color={color} size={26} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}