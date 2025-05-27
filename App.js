import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WorkoutListScreen from "./src/screens/workouts/WorkoutListScreen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <WorkoutListScreen />
          <StatusBar style="auto" />
        </View>
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
