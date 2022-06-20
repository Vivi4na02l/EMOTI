import API_URL from './config.js'

export const QuestionService = {
    async getAll() {
        const response = await fetch(`${API_URL}/questions`, {
            method: "GET" // requires NO authorization header
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch WELCOMING MESSAGE")
            // console.log(data) // data = "Welcome to the TUTORIALS api"
            // console.log(data.questions);
            return data.questions;
        }
        else
            throw Error(handleResponses(response.status));
    },

    async create(question) {
        const response = await fetch(`${API_URL}/questions`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:
                JSON.stringify({
                    username_tutor: question.username,
                    text: question.text
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
        const response = await fetch(`${API_URL}/questions/${id}`, {
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

    async answer(answer, id) {
        const response = await fetch(`${API_URL}/questions/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body:
                JSON.stringify({
                    username_psychologist: answer.username,
                    answer: answer.text
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
    },
}

export default QuestionService

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