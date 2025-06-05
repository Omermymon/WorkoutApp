import { useState } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../store/excerciseSlice";
import { resetWorkout } from "../../store/workoutSlice";
import { Button, Menu, Provider, Text } from "react-native-paper";
import exercisesList from "../../utils/workoutList";
import { useCreateWorkout } from "../../hooks/useWorkouts";

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
    mutation.mutate({
      date: new Date().toISOString(),
      exercises: workoutState.exercises,
    });
    dispatch(resetWorkout());
    setSelected("");
    navigation.navigate("WorkoutList");
  };

  return (
    <Provider>
      <View style={{ padding: 20, gap: 12 }}>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Button mode="outlined" onPress={() => setVisible(true)}>
              {selected || "Select Exercise"}
            </Button>
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
          <Button mode="contained" onPress={handleCreateExercise}>
            Choose sets and reps
          </Button>
        ) : null}

        {workoutState.exercises.length > 0 && (
          <>
            <Text variant="titleMedium">Added Exercises:</Text>
            <FlatList
              data={workoutState.exercises}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({ item }) => (
                <Text>
                  {item.exercise}: {item.sets}x{item.reps} @ {item.weight}kg
                </Text>
              )}
            />
            <Button mode="contained" onPress={handleSubmitFullWorkout}>
              Save Workout
            </Button>
          </>
        )}
      </View>
    </Provider>
  );
}
