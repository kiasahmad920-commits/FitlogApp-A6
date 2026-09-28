export const getWorkOutData = async () => {
  try {
    const response = await fetch(
      "https://api.abcz.workers.dev/api/fitlog"
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch workout data:", error);
  }
};