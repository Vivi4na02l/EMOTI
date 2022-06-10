import API_URL from './config.js'

export const QuestionService = {
    async register(question) {
        const response = await fetch(`${API_URL}/questions`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:
                JSON.stringify({
                    username_tutor: question.user,
                    text: question.text
                })
        });
        if (response.ok) {
            const data = await response.json()
            if (data.accessToken)
                localStorage.setItem('question', JSON.stringify(data));
            return data;
        } else {
            throw Error(handleResponses(response.status))
        }
    }
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