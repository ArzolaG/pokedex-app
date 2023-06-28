import React from "react";

const PokemonList = ({ poke, index }) => {
	return (
		<div>
			<p>
				{index + 1} {poke.species.name}
			</p>
		</div>
	);
};

export default PokemonList;
