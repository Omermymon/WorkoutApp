import { useWorkouts } from "../../hooks/useWorkouts";
import { Text } from "react-native";
function WorkoutListScreen() {
  const { data, isLoading, error } = useWorkouts();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching workouts</Text>;

  return (
    <View>
      {data.map((workout) => (
        <Text key={workout.id}>{workout.name}</Text>
      ))}
    </View>
  );
}

export default WorkoutListScreen;
