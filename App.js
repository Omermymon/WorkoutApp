import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import WorkoutListScreen from "./src/screens/workouts/WorkoutListScreen";
import CreateWorkoutScreen from "./src/screens/workouts/CreateWorkoutScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
            <Stack.Screen
              name="CreateWorkout"
              component={CreateWorkoutScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
