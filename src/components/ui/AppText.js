import { Text, useTheme } from "react-native-paper";

export default function AppText({
  children,
  style,
  variant = "bodyMedium",
  ...props
}) {
  const theme = useTheme();

  return (
    <Text
      variant={variant}
      style={[{ color: theme.colors.onSurface }, style]}
      {...props}
    >
      {children}
    </Text>
  );
}
