import { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../../store/workoutSlice";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";

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
      <AppInput
        placeholder="Reps"
        value={workoutData.reps}
        keyboardType="numeric"
        onChangeText={(text) => setWorkoutData({ ...workoutData, reps: text })}
      />
      <AppInput
        placeholder="Sets"
        value={workoutData.sets}
        keyboardType="numeric"
        onChangeText={(text) => setWorkoutData({ ...workoutData, sets: text })}
      />
      <AppInput
        placeholder="Weight"
        value={workoutData.weight}
        keyboardType="numeric"
        onChangeText={(text) =>
          setWorkoutData({ ...workoutData, weight: text })
        }
      />

      <AppButton title="Add Exercise" onPress={handleSubmitExercise}>
        add Exercise
      </AppButton>
    </View>
  );
}
