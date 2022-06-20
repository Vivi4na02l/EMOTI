import API_URL from './config.js'

export const EmotionStatsService = {
    async getAll(id) {
        const response = await fetch(`${API_URL}/children/${id}/emotion_stats`, {
            method: "GET",
        });
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw Error(handleResponses(response.status))
        }
    },
    async changeStats(emotion,id) {
        const response = await fetch(`${API_URL}/children/${id}/emotion_stats`, {
            method: "PUT",
            body: 
                JSON.stringify({
                childUsername: emotion.childUsername,
                emotionId: emotion.emotionId,
                right: emotion.right,
                wrong: emotion.wrong
            })
        });
        if (response.ok) {
            const data = await response.json()
            return data;
        } else {
            throw Error(handleResponses(response.status))
        }
    },

}

export default EmotionStatsService

function handleResponses(code) {
    let message = "";
    switch (code) {
        case 400:
            message = "Not enough data provided.";
            break;
        case 404:
            message = "Emotion not found.";
            break;
        case 500:
            message = "An error occurred.";
            break;
        default:
            message = "Unkown message";
            break;
    }
    return message;
}