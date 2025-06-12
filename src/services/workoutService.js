const FETCH_WO_URL = "http://127.0.0.1:5000/workouts";

async function fetchWorkouts() {
  const response = await fetch(FETCH_WO_URL);
  if (!response.ok) {
    console.log("failed to fetch workouts");
  }
  return response.json();
}

async function fetchWorkoutId(id) {
  const response = await fetch(FETCH_WO_URL + "/" + id);
  if (!response.ok) {
    console.log("failed to fetch workout");
  }
  return response.json();
}

async function createWorkout(data) {
  const response = await fetch(FETCH_WO_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log("failed to post new workout");
  }
  return response.json();
}

export { fetchWorkouts, createWorkout, fetchWorkoutId };
