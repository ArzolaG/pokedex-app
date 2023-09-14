import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import "./app.scss";

function App() {
	const [pokemonNames, setPokemonNames] = useState([]);
	const [pokemonInfo, setPokemonInfo] = useState({});
	const [isFetching, setIsFetching] = useState(false);

	const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=900&offset=0";

	const getPokemonList = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		setPokemonNames(data.results);
	};

	const getPokemonInfo = async (pokeURL) => {
		const response = await fetch(pokeURL);
		const data = await response.json();
		console.log(data);
		setPokemonInfo(data);
		setIsFetching(true);
	};

	const handleClick = (pokeURL) => {
		getPokemonInfo(pokeURL);
	};

	useEffect(() => {
		getPokemonList(apiURL);
		getPokemonInfo("https://pokeapi.co/api/v2/pokemon/1/");
	}, []);

	return (
		<>
			<h1 className="main_title">Pokemon App</h1>

			<div className="main-container">
				<div className="list-container">
					{pokemonNames.map((poke, index) => {
						let formatIndex = ("000" + (index + 1)).slice(-3);
						return (
							<div key={index} onClick={() => handleClick(poke.url)}>
								<p>
									{formatIndex} {poke.name}
								</p>
							</div>
						);
					})}
				</div>
				<div className="card-container">{isFetching ? <PokemonCard pokemon={pokemonInfo} /> : ""}</div>
			</div>
		</>
	);
}

export default App;
