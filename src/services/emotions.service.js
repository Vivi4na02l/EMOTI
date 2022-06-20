import API_URL from './config.js'

function authHeader() {
    // checks Local Storage for user item
    let user = JSON.parse(localStorage.getItem('user'));

    // if there is a logged user with accessToken (JWT)
    if (user) {
        // return HTTP authorization header for Node.js Express back-end
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user
        };
    } else  //otherwise, return just header for content type
        return { 'Content-Type': 'application/json' };
}

export const EmotionService = {
    async getAll() {
        const response = await fetch(`${API_URL}/emotions`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            const data = await response.json()
            return data.stats;
        } else {
            throw Error(handleResponses(response.status))
        }
    },
    async create(emotion) {
        const response = await fetch(`${API_URL}/emotions`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({
                name: emotion.name,
                image: emotion.image
            })
        });
        if (response.ok) {
            const data = await response.json()
            return data;
        } else {
            throw Error(handleResponses(response.status))
        }
    },
    async getOne(id) {
        const response = await fetch(`${API_URL}/emotions/${id}`, {
            method: "GET"
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw Error(handleResponses(response.status));
        }
    },
    async changeEmotion(emotion, id) {
        const response = await fetch(`${API_URL}/emotions/${id}`, {
            method: "PATCH",
            headers: authHeader(),
            body: JSON.stringify({
                name: emotion.name,
                image: emotion.image
            })
        });
        if (response.ok) {
            // console.log(response);
            const data = await response.json()
            // console.log(data);
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