async function fetchWorkouts() {
  const response = await fetch(FETCH_WO_URL);
  if (!response.ok) {
    console.log("failed to fetch workouts");
  }
  return response.json();
}

async function createWorkout(data) {
  const response = await fetch(CREATE_WO_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log("failed to post new workout");
  }
  return response.json();
}

export { fetchWorkouts, createWorkout };
