import API_URL from './config.js'

export const ChildrenService = {
    async register(child) {
        const response = await fetch(`${API_URL}/children`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:
                JSON.stringify({
                    username: child.username,
                    name: child.name,
                    password: child.password,
                    gender: child.gender,
                    birth_date: child.birth_date,
                    autism_level: child.autism_level,
                    image: child.image,
                    email_tutor: child.email_tutor
                })
        });
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw Error(handleResponses(response.status))
        }
    }
}

export default ChildrenService

function handleResponses(code) {
    let message = "";
    switch (code) {
        case 400:
            message = "Not enough data provided.";
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