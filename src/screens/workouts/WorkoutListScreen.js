import { useWorkouts } from "../../hooks/useWorkouts";
import { Text, View, Button } from "react-native";
function WorkoutListScreen({ navigation }) {
  const { data, isLoading, error } = useWorkouts();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching workouts</Text>;

  return (
    <View>
      {data.map((workout) => (
        <Text key={workout.id}>{workout.reps}</Text>
      ))}
      <Button
        title="Create New Workout"
        onPress={() => navigation.navigate("CreateWorkout")}
      />
    </View>
  );
}

export default WorkoutListScreen;
