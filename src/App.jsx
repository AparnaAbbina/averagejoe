import askQuestion from "./lib/fetch";
import { useState, useEffect, useRef } from "react";

function App() {
	const [inputVal, setInputVal] = useState("Introduce yourself 🤖");
	const [memory, setMemory] = useState([]);
	const memoryRef = useRef(null);

	async function dataset() {
		const response = await askQuestion(inputVal);
		const newMemory = response
			? {
					text: inputVal,
					response:
						"Apologies, I can't respond right now. Please try again later.",
				}
			: { text: inputVal, response: response.choices[0].message.content };

		setMemory((prevMemory) => [...prevMemory, newMemory]);
	}

	useEffect(() => {
		if (memoryRef.current) {
			memoryRef.current.scrollTop = memoryRef.current.scrollHeight;
		}
	}, [memory]);

	const welcomeMessage =
		"Welcome to Joe's Average Joes! Get career advice and explore job options in this friendly chat for students aged 16-18. Discover your future today!";

	return (
		<main className="w-screen h-screen grid grid-rows-auto-1fr gap-2">
			<nav className="w-full h-fit p-2 text-blue-400 font-bold text-2xl">
				<h1>Joe's Average Joes</h1>
			</nav>
			<section className="w-full p-4 flex flex-col gap-2 items-center">
				<p className="font-bold text-slate-900 w-full text-center">
					{welcomeMessage}
				</p>
				<div
					ref={memoryRef}
					className="w-full md:w-[35em] rounded-md h-[35em] whitespace-pre-line overflow-y-auto border border-blue-200 p-5"
				>
					{memory.map((mem, index) => (
						<span className="flex flex-col gap-2" key={index}>
							<br />
							<span className="font-bold">{mem.text}</span> {mem.response}
						</span>
					))}
				</div>
				<section className="flex flex-row gap-5 justify-center">
					<input
						type="text"
						value={inputVal}
						onChange={(e) => setInputVal(e.target.value)}
						onFocus={(e) => e.target.select()}
						className="border-blue-200 px-4 py-2 border-2 rounded-md"
					/>
					<button type="button" onClick={() => dataset()}>
						Submit
					</button>
				</section>
			</section>
		</main>
	);
}

export default App;
