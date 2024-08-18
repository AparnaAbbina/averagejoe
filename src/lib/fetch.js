async function askQuestion(question) {
	const url = "https://api.openai.com/v1/chat/completions";
	const headers = {
		Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
		"Content-Type": "application/json",
	};

	const body = {
		model: "gpt-4",
		messages: [
			{
				role: "system",
				content:
					"You are Powering Futures Advisor, a career advisor for 16-18 year olds in Scotland.",
			},
			{
				role: "user",
				content: question,
			},
		],
	};

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(body),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error:", error);
	}
}

export default askQuestion;
