import { Button, useTheme } from "react-native-paper";

export default function AppButton({
  children,
  style,
  mode = "contained",
  ...props
}) {
  const theme = useTheme();

  return (
    <Button
      mode={mode}
      style={[{ borderRadius: 8, padding: 4 }, style]}
      labelStyle={{ color: theme.colors.onPrimary }}
      {...props}
    >
      {children}
    </Button>
  );
}
