import { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextInput } from "react-native-paper";
import { addExercise } from "../../store/workoutSlice";

export default function CreateExcerciseScreen({ navigation }) {
  const reduxExercise = useSelector((state) => state.excercise.exercise);
  const dispatch = useDispatch();
  const [workoutData, setWorkoutData] = useState({
    reps: "",
    sets: "",
    weight: "",
  });

  const handleSubmitExercise = () => {
    dispatch(addExercise({ ...workoutData, exercise: reduxExercise }));
    navigation.navigate("CreateWorkout");
  };

  return (
    <View style={{ padding: 20 }}>
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

      <Button title="Add Exercise" onPress={handleSubmitExercise}>
        add Exercise
      </Button>
    </View>
  );
}
