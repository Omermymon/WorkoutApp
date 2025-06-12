import { useWorkoutsById } from "../../hooks/useWorkouts";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AppText from "../../components/ui/AppText";

function WorkoutDetailScreen({ navigation, route }) {
  const { id } = route.params;
  const { data, isLoading, error } = useWorkoutsById(id);
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching workouts</Text>;
  const { exercises } = data;

  return (
    <View style={{ padding: 20 }}>
      {exercises.map((excercise) => (
        <AppText key={excercise.exercise}>{excercise.exercise}</AppText>
      ))}
    </View>
  );
}

export default WorkoutDetailScreen;
