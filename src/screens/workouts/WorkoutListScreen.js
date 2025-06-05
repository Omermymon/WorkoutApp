import { useWorkouts } from "../../hooks/useWorkouts";
import { View } from "react-native";
import { Button, Menu, Provider, Text } from "react-native-paper";
function WorkoutListScreen({ navigation }) {
  const { data, isLoading, error } = useWorkouts();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching workouts</Text>;

  return (
    <View style={{ padding: 20 }}>
      {data.map((workout) => (
        <Text key={workout.id}>{workout.exercise}</Text>
      ))}
      <Button
        title="Create New Workout"
        onPress={() => navigation.navigate("CreateWorkout")}
        mode="outlined"
      >
        Create New Workout
      </Button>
    </View>
  );
}

export default WorkoutListScreen;
