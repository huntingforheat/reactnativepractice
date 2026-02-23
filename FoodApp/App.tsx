import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootStackParamList } from './types/navigation';
import FoodInfo from './screens/FoodInfo';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen name="FoodInfo" component={FoodInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
