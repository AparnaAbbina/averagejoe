import askQuestion from "./lib/fetch";
import { useState, useEffect, useRef } from "react";

function App() {
	// The inputVal is storing our users input which we can then send to the API.
	const [inputVal, setInputVal] = useState("Hey, what's your name?");
	// This is storing our memory, allowing us a list of the questions and responses.
	const [memory, setMemory] = useState([]);
	// If this is set to true, our Button will display "Thinking..." instead of "Submit".
	const [loading, setLoading] = useState(false);
	// This is referencing the memoryRef so we can scroll to the bottom of the memory.
	const memoryRef = useRef(null);

	async function dataset() {
		// When the dataset function is called, setLoading is set to true, the API is called, and then setLoading is set to false.
		setLoading(true);
		const response = await askQuestion(inputVal);
		setLoading(false);
		console.log(response);
		// If the response is undefined, we set the response to "Apologies, I can't respond right now. Please try again later."
		const newMemory =
			response.choices[0].message.content === undefined
				? {
						text: inputVal,
						response:
							"Apologies, I can't respond right now. Please try again later.",
					}
				: // Otherwise, we set the response to the response from the API.
					{ text: inputVal, response: response.choices[0].message.content };
		// We then add the newMemory to the memory array.
		setMemory((prevMemory) => [...prevMemory, newMemory]);
	}

	function sanitizeInput(input) {
		const sanitized = input.replace(/<script.*?>.*?<\/script>/g, "");
		return sanitized;
	}

	function handleChange(e) {
		const sanitizedInput = sanitizeInput(e.target.value);
		setInputVal(sanitizedInput);
	}

	// This useEffect is used to scroll to the bottom of the memoryRef when the memory changes.
	// biome-ignore lint/correctness/useExhaustiveDependencies: Needs to run on memory change
	useEffect(() => {
		if (memoryRef.current) {
			memoryRef.current.scrollTop = memoryRef.current.scrollHeight;
		}
	}, [memory]);

	// This is the welcome message that is displayed when the user first loads the page.
	const welcomeMessage =
		"Welcome to Joe's Average Joes! Get career advice and explore job options in this friendly chat for students aged 16-18. Discover your future today!";

	return (
		<main className="w-screen h-screen grid grid-rows-auto-1fr gap-2">
			<nav className="w-full h-fit p-4 text-blue-400 font-bold text-4xl">
				<h1>Joe's Average Joes</h1>
			</nav>
			<section className="w-full p-4 flex flex-col gap-2 items-center">
				<p className="font-bold text-slate-900 w-full text-center">
					{welcomeMessage}
				</p>
				<br />
				{/* This is the memoryRef that stores the questions and responses. */}
				<div
					ref={memoryRef}
					className="w-full md:w-[35em] rounded-md h-[35em] whitespace-pre-line overflow-y-auto border border-blue-200 p-5"
				>
					{/* This maps over the memory array and displays the questions and responses. */}
					{memory.map((memory, index) => {
						const key = Math.random() * index + 1;
						return (
							<span className="flex flex-col gap-2" key={key}>
								<br />
								<span className="font-bold">{memory.text}</span>{" "}
								{memory.response}
							</span>
						);
					})}
				</div>
				<br />
				<section className="flex flex-row gap-5 justify-center">
					<input
						type="text"
						value={inputVal}
						// When the inputVal changes, we set the inputVal to the value of the input.
						onChange={handleChange}
						// When the input is clicked, we select the text.
						onFocus={(e) => e.target.select()}
						className="border-blue-200 px-4 py-2 border-2 rounded-md"
					/>
					<button
						className="text-slate-200 hover:text-slate-50 bg-blue-400 hover:bg-blue-900 transition-all duration-1000 px-4 py-2 rounded-md"
						type="button"
						// When the button is clicked, we call the dataset function.
						onClick={() => dataset()}
					>
						{/* If loading is true, we display "Thinking...", otherwise we display "Submit". */}
						{loading ? "Thinking..." : "Submit"}
					</button>
				</section>
			</section>
		</main>
	);
}

export default App;
