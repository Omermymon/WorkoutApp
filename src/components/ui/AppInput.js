import { TextInput, useTheme } from "react-native-paper";

export default function AppInput({ style, ...props }) {
  const theme = useTheme();

  return (
    <TextInput
      mode="outlined"
      style={[{ marginBottom: 12 }, style]}
      outlineColor={theme.colors.outline}
      activeOutlineColor={theme.colors.primary}
      {...props}
    />
  );
}
