import API_URL from './config.js'

export const PsychologistService = {
    async register(psychologist) {
        const response = await fetch(`${API_URL}/psychologists`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:
                JSON.stringify({
                    username: psychologist.username,
                    name: psychologist.name,
                    password: psychologist.password,
                    gender: psychologist.gender,
                    dob: psychologist.dob,
                    email: psychologist.email,
                    degree: psychologist.degree
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

export default PsychologistService

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