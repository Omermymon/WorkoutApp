import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import WorkoutListScreen from "./src/screens/workouts/WorkoutListScreen";
import CreateWorkoutScreen from "./src/screens/workouts/CreateWorkoutScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateExcerciseScreen from "./src/screens/workouts/CreateExcerciseScreen";
import WorkoutDetailScreen from "./src/screens/workouts/WorkoutDetailScreen";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="WorkoutList"
              component={WorkoutListScreen}
              options={{ title: "Workout List" }}
            />
            <Stack.Screen
              name="WorkoutDetail"
              component={WorkoutDetailScreen}
              options={{ title: "My Workout" }}
            />
            <Stack.Screen
              name="CreateWorkout"
              component={CreateWorkoutScreen}
              options={{ title: "Create new workout" }}
            />
            <Stack.Screen
              name="CreateExcercise"
              component={CreateExcerciseScreen}
              options={{ title: "Create new exercise" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
