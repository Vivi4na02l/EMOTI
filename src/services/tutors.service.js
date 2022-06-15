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

export const TutorService = {
    async register(tutor) {
        const response = await fetch(`${API_URL}/tutors`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:
                JSON.stringify({
                    username: tutor.username,
                    name: tutor.name,
                    password: tutor.password,
                    gender: tutor.gender,
                    dob: tutor.dob,
                    email: tutor.email
                })
        });
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw Error(handleResponses(response.status))
        }
    },
    async changePassword(user) {
        const response = await fetch(`${API_URL}/tutors`, {
            method: "PATCH",
            headers: authHeader(),
            body:
                JSON.stringify({
                    username: user.username,
                    password: user.password,
                    role: user.role
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

export default TutorService

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