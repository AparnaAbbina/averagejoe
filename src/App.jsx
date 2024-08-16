import askQuestion from './lib/fetch';

function App() {
	askQuestion('Are you working? Im looking for work at the moment. Any suggestions for someone who has completed a coding bootcamp?');
		return (
		<main className="w-full text-center m-10">
			<div className="w-full flex p-10 m-5"><h1 className="font-extrabold text-left text-4xl text-blue-800">Joe's Average Joes</h1></div>
            <div><h2 className="font-bold">"Welcome to Joe's Average Joes! Get career advice and explore job options in this friendly chat for students aged 16-18. Discover your future today!"</h2></div>
			<p>Answer Field</p>
			<input type="text" defaultValue="Ask a question..." />
			<button type="button">Submit</button>
		</main>
	);
}

export default App;
