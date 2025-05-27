import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useCreateWorkout } from "../../hooks/useWorkouts";

export default function CreateWorkoutScreen() {
  const [workoutData, setWorkoutData] = useState({
    reps: "",
    sets: "",
    weight: "",
    exercise: "",
  });

  const mutation = useCreateWorkout();

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Exercise"
        value={workoutData.exercise}
        onChangeText={(text) =>
          setWorkoutData({ ...workoutData, exercise: text })
        }
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Reps"
        value={workoutData.reps}
        keyboardType="numeric"
        onChangeText={(text) => setWorkoutData({ ...workoutData, reps: text })}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Sets"
        value={workoutData.sets}
        keyboardType="numeric"
        onChangeText={(text) => setWorkoutData({ ...workoutData, sets: text })}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Weight"
        value={workoutData.weight}
        keyboardType="numeric"
        onChangeText={(text) =>
          setWorkoutData({ ...workoutData, weight: text })
        }
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />

      <Button
        title={mutation.isLoading ? "Saving..." : "Save Workout"}
        onPress={() => mutation.mutate(workoutData)}
        disabled={mutation.isLoading}
      />

      {mutation.isError && (
        <Text style={{ color: "red", marginTop: 10 }}>
          Error saving workout
        </Text>
      )}
    </View>
  );
}
