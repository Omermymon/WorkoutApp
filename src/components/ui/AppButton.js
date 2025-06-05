import { Button, useTheme } from "react-native-paper";

export default function AppButton({
  children,
  style,
  mode = "contained",
  lighter,
  labelColor,
  ...props
}) {
  const theme = useTheme();

  return (
    <Button
      mode={mode}
      style={[{ borderRadius: 8, padding: 4, margin: 10 }, style]}
      buttonColor={
        lighter ? theme.colors.primaryContainer : theme.colors.primary
      }
      labelStyle={{ color: labelColor || theme.colors.onPrimary }}
      {...props}
    >
      {children}
    </Button>
  );
}
