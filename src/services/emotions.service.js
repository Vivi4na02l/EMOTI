import API_URL from './config.js'

export const EmotionService = {
    async register(emotion) {
        const response = await fetch(`${API_URL}/emotions`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:
                JSON.stringify({
                    name: emotion.name,
                    image: emotion.image
                })
        });
        if (response.ok) {
            const data = await response.json()
            if (data.accessToken)
                localStorage.setItem('emotion', JSON.stringify(data));
            return data;
        } else {
            throw Error(handleResponses(response.status))
        }
    }
}

export default EmotionService

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