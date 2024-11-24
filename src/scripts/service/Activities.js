import { baseUrl, userActivity } from "../variables.js";

async function getActivities(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${userActivity}`)
    return await response.json()
};

export { getActivities };