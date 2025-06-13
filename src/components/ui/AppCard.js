import { Card, useTheme, Text } from "react-native-paper";

export default function AppCard({ style, weight, sets, reps, exercise }) {
  const theme = useTheme();

  return (
    <Card
      style={[
        {
          borderRadius: 8,
          padding: 4,
          margin: 10,
          backgroundColor: theme.colors.elevation.level1,
        },
        style,
      ]}
    >
      <Card.Title title={exercise} />
      <Card.Content>
        <Text variant="bodyMedium">Weight: {weight}</Text>
        <Text variant="bodyMedium">Sets: {sets}</Text>
        <Text variant="bodyMedium">Reps: {reps}</Text>
      </Card.Content>
    </Card>
  );
}
