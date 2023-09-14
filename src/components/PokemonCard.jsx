import React from "react";
import "../styles/card.scss";
import { useState, useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
	const { sprites, types, species, id, abilities, height, weight, stats } = pokemon;
	const [pokemonDescription, setPokemonDescription] = useState("");

	const weightKg = weight / 10;
	const heightMeters = height / 10;
	const formatId = ("000" + id).slice(-3);

	const getPokemonSpecies = async (pokeURL) => {
		const response = await fetch(pokeURL);
		const data = await response.json();
		console.log(data);
		setPokemonDescription(data.flavor_text_entries[5].flavor_text);
	};

	const description = pokemonDescription
		.replace("\f", "\n")
		.replace("\u00ad\n", "")
		.replace("\u00ad", "")
		.replace(" -\n", " - ")
		.replace("-\n", "-")
		.replace("\n", " ");

	useEffect(() => {
		getPokemonSpecies(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
	}, [pokemon]);

	return (
		<div className="card_container">
			<div className="main_info">
				<div className="number">No.{formatId}</div>
				<div className="name">{species.name}</div>
			</div>
			<div className="sprite">
				<img src={`./src/assets/sprites/${id}.gif`} alt="" />
				{/* <img src={`./src/assets/shiny/${id}.gif`} alt="" /> */}
			</div>

			<div className="description">{description}</div>
			<div className="flex_container">
				<div className="type">
					<div className="type_container">
						{types.map((type, index) => {
							return (
								<span className={`type_${type.type.name}`} key={index}>
									{type.type.name}
								</span>
							);
						})}
					</div>
				</div>
				<div className="measurements">
					<div className="weight">
						<span>Weight:</span> {weightKg}kg
					</div>
					<div className="height">
						<span>Height:</span> {heightMeters}m
					</div>
				</div>
			</div>
			<div className="box_container">
				<div className="stats_container">
					{/* STATS */}
					{stats.map((stat) => {
						const { base_stat, stat: statInfo } = stat;

						console.log(base_stat);
						console.log(statInfo.name);

						const fullStat = 255;
						const statPercentage = (base_stat * 100) / fullStat;

						let color = "";

						if (statInfo.name == "special-attack") {
							statInfo.name = "Sp. Atk";
						}
						if (statInfo.name == "special-defense") {
							statInfo.name = "Sp. Def";
						}

						if ((base_stat > 0) & (base_stat <= 29)) {
							color = "red";
						} else if ((base_stat > 29) & (base_stat <= 59)) {
							color = "orange";
						} else if ((base_stat > 59) & (base_stat <= 89)) {
							color = "yellow";
						} else if ((base_stat > 89) & (base_stat <= 119)) {
							color = "green";
						} else if ((base_stat > 119) & (base_stat <= 149)) {
							color = "dark_green";
						} else if ((base_stat > 149) & (base_stat <= 255)) {
							color = "blue";
						}

						return (
							<div className="stat">
								<div className="name">{statInfo.name}</div>
								<div>{base_stat}</div>
								<div style={{ width: statPercentage + "%" }} className={`stat_bar bar_${color}`}></div>
							</div>
						);
					})}
				</div>
				<div className="abilities">
					<div>Abilities: </div>
					<div className="abilities_container">
						{abilities.map((ability, index) => {
							return <span key={index}>{ability.ability.name}</span>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
