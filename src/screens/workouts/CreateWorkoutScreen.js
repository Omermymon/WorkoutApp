import { useState } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../store/excerciseSlice";
import { resetWorkout } from "../../store/workoutSlice";
import { Menu, Provider, Text } from "react-native-paper";
import exercisesList from "../../utils/workoutList";
import { useCreateWorkout } from "../../hooks/useWorkouts";
import AppButton from "../../components/ui/AppButton";
import AppText from "../../components/ui/AppText";

export default function CreateWorkoutScreen({ navigation }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("");

  const workoutState = useSelector((state) => state.workout);
  const mutation = useCreateWorkout();

  const handleCreateExercise = () => {
    dispatch(start(selected));
    navigation.navigate("CreateExcercise");
  };

  const handleSubmitFullWorkout = () => {
    if (workoutState.exercises.length === 0) return;
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date());
    mutation.mutate({
      date: formattedDate,
      exercises: workoutState.exercises,
    });
    dispatch(resetWorkout());
    setSelected("");
    navigation.navigate("WorkoutList");
  };

  return (
    <Provider>
      <View style={{ padding: 20 }}>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <AppButton mode="contained" onPress={() => setVisible(true)}>
              {selected || "Select Exercise"}
            </AppButton>
          }
        >
          {exercisesList.map((item, index) => (
            <Menu.Item
              key={index}
              onPress={() => {
                setSelected(item);
                setVisible(false);
              }}
              title={item}
            />
          ))}
        </Menu>

        {selected ? (
          <AppButton mode="contained" onPress={handleCreateExercise}>
            Choose sets and reps
          </AppButton>
        ) : null}

        {workoutState.exercises.length > 0 && (
          <>
            <AppText variant="titleMedium">Added Exercises:</AppText>
            <FlatList
              data={workoutState.exercises}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({ item }) => (
                <AppText>
                  {item.exercise}: {item.sets}x{item.reps} @ {item.weight}kg
                </AppText>
              )}
            />
            <AppButton mode="contained" onPress={handleSubmitFullWorkout}>
              Save Workout
            </AppButton>
          </>
        )}
      </View>
    </Provider>
  );
}
