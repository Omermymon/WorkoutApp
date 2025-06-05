import { useWorkouts } from "../../hooks/useWorkouts";
import { View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import AppText from "../../components/ui/AppText";
import AppButton from "../../components/ui/AppButton";
function WorkoutListScreen({ navigation }) {
  const { data, isLoading, error } = useWorkouts();
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching workouts</Text>;

  return (
    <View style={{ padding: 20 }}>
      {data.map((workout) => (
        <AppText key={workout.id}>{workout.date}</AppText>
      ))}
      <AppButton
        title="Create New Workout"
        onPress={() => navigation.navigate("CreateWorkout")}
        mode="contained"
      >
        Create New Workout
      </AppButton>
    </View>
  );
}

export default WorkoutListScreen;
