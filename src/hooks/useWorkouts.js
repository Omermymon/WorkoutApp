import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchWorkouts,
  createWorkout,
  fetchWorkoutId,
} from "../services/workoutService";

export function useWorkouts() {
  return useQuery({
    queryKey: ["workouts"],
    queryFn: fetchWorkouts,
  });
}

export function useWorkoutsById(id) {
  return useQuery({
    queryKey: ["workouts_id", id],
    queryFn: () => fetchWorkoutId(id),
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
