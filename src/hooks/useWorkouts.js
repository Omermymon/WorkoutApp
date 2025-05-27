import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchWorkouts, createWorkout } from "../services/workoutService";

export function useWorkouts() {
  return useQuery({
    queryKey: ["workouts"],
    queryFn: fetchWorkouts,
  });
}

export function useCreateWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createWorkout,
    onSuccess: () => {
      queryClient.invalidateQueries(["workouts"]);
    },
  });
}
