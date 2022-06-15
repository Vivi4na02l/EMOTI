import API_URL from './config.js'

export const AuthService = {
    async login(user) { // payload = user (username + password)
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
                role: user.role
            })
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            // data.role = user.role
            // console.log(data)
            if (data.token)
                localStorage.setItem('user', JSON.stringify(data.token));
            return {
                username: user.username,
                password: user.password,
                role: user.role
            };
        } else {
            throw Error(handleResponses(response.status));
        }
    },

    async logout() {
        localStorage.removeItem('user');
    },
}

function handleResponses(code) {
    let message = "";
    switch (code) {
        case 400:
            message = "Username already exists.";
            break;
        case 401:
            message = "Wrong credentials";
            break;
        case 404:
            message = "User not found";
            break;
        case 500:
            message = "Internal server error";
            break;
        default:
            message = "Unkown message";
            break;
    }
    return message;
}

export default AuthService;