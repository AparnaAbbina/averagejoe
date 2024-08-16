import askQuestion from "./lib/fetch";
import { useState } from "react";

function App() {
	const [inputVal, setInputVal] = useState("Hello World!");
	const [memory, setMemory] = useState("");

	async function dataset() {
		const response = await askQuestion(inputVal);
		// console.log(response.choices[0].message.content);
		setMemory(inputVal + response.choices[0].message.content);
	}

	return (
		<main className="w-full text-center m-10">
			<div className="w-full flex p-10 m-5">
				<h1 className="font-extrabold text-left text-4xl text-blue-800">
					Joe's Average Joes
				</h1>
			</div>
			<div>
				<h2 className="font-bold">
					"Welcome to Joe's Average Joes! Get career advice and explore job
					options in this friendly chat for students aged 16-18. Discover your
					future today!"
				</h2>
			</div>
			<p>{memory}</p>
			<input
				type="text"
				value={inputVal}
				onChange={(e) => setInputVal(e.target.value)}
			/>
			<button type="button" onClick={() => dataset()}>
				Submit
			</button>
		</main>
	);
}

export default App;
