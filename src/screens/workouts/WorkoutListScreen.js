import { useWorkouts } from "../../hooks/useWorkouts";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AppButton from "../../components/ui/AppButton";

function WorkoutListScreen({ navigation }) {
  const { data, isLoading, error } = useWorkouts();
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching workouts</Text>;

  return (
    <View style={{ padding: 20 }}>
      {data.map((workout) => (
        <AppButton
          lighter={true}
          key={workout.id}
          onPress={() =>
            navigation.navigate("WorkoutDetail", { id: workout.id })
          }
        >
          {workout.date}
        </AppButton>
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
