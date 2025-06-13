import { useWorkouts } from "../../hooks/useWorkouts";
import { View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import AppButton from "../../components/ui/AppButton";

function WorkoutListScreen({ navigation }) {
  const { data, isLoading, error } = useWorkouts();
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching workouts</Text>;

  const totalWorkouts = data.length;

  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Text variant="headlineMedium">Workout Summary</Text>
        <Text>Total Workouts: {totalWorkouts}</Text>
      </View>
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
    </ScrollView>
  );
}

export default WorkoutListScreen;
