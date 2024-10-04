import React, { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import "./App.css";

const getRandomQuote = () => {
	return quotes[Math.floor(Math.random() * quotes.length)];
};

const colors = [
	"#16a085",
	"#27ae60",
	"#2c3e50",
	"#f39c12",
	"#e74c3c",
	"#9b59b6",
	"#FB6964",
	"#342224",
	"#472E32",
	"#BDBB99",
	"#77B1A9",
	"#73A857",
];

const getRandomColor = () => {
	const color = Math.floor(Math.random() * colors.length);
	return colors[color];
};

const transition = "all 1s";

function App() {
	const [quote, setQuote] = useState(getRandomQuote());
	const [randomColor, setRandomColor] = useState(getRandomColor());

	const changeQuote = () => {
		setQuote(getRandomQuote());
		setRandomColor(getRandomColor());
	};

	return (
		<div
			id="root"
			className="background"
			style={{ backgroundColor: randomColor, transition }}
		>
			<div id="quote-box">
				<div
					className="quote-content"
					style={{ color: randomColor, transition }}
				>
					<h2 id="text">
						<FaQuoteLeft className="quote-icon" />
						{quote.quote}
					</h2>
					<p id="author">- {quote.author}</p>
				</div>
				<div className="buttons">
					<a
						href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
						id="tweet-quote"
						style={{
							backgroundColor: randomColor,
							transition,
						}}
					>
						<FaTwitter color="#fff" />
					</a>
					<button
						id="new-quote"
						onClick={changeQuote}
						style={{ backgroundColor: randomColor, transition }}
					>
						New Quote
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
