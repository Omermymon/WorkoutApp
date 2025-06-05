import { useState } from "react";
import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { start } from "../../store/excerciseSlice";
import { Button, Menu, Provider, Text } from "react-native-paper";
import exercises from "../../utils/workoutList";

export default function CreateWorkoutScreen({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={{ padding: 20 }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button mode="outlined" onPress={openMenu}>
              {selected || "Select Exercise"}
            </Button>
          }
        >
          {exercises.map((item, index) => (
            <Menu.Item
              key={index}
              onPress={() => {
                setSelected(item);
                closeMenu();
              }}
              title={item}
            />
          ))}
        </Menu>
        {selected ? (
          <Text style={{ marginTop: 10 }}>Selected: {selected}</Text>
        ) : null}
      </View>
    </Provider>
  );
}

//   const [selectedExercise, setSelectedExercise] = useState("");
//   const dispatch = useDispatch();

//   const handleCreateExcercise = () => {
//     dispatch(start(selectedExercise));
//     navigation.navigate("CreateExcercise");
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Picker
//         selectedValue={selectedExercise}
//         onValueChange={(itemValue) => setSelectedExercise(itemValue)}
//       >
//         <Picker.Item label="Choose an exercise..." value="" />
//         {exercises.map((type, index) => (
//           <Picker.Item key={index} label={type} value={type} />
//         ))}
//       </Picker>
//       <Button
//         title="Choose sets and reps"
//         onPress={handleCreateExcercise}
//       ></Button>
//     </View>
//   );
// }
