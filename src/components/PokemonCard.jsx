import React from "react";
import "../styles/card.scss";
import { useState, useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
    const { sprites, types, species, id, abilities, height, weight, stats } = pokemon;
    const [pokemonDescription, setPokemonDescription] = useState("");
    const [isShiny, setIsShiny] = useState(false);

    const weightKg = weight / 10;
    const heightMeters = height / 10;
    const formatId = ("000" + id).slice(-3);

    const getPokemonSpecies = async (pokeURL) => {
        const response = await fetch(pokeURL);
        const data = await response.json();
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
            <div className="sprite-container">
                <div className="sprite">
                    <img src={`/assets/${isShiny ? "shiny/" : "sprites/"}${id}.gif`} alt="" />
                </div>
                <div className="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-sparkles"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        onClick={() => {
                            setIsShiny(!isShiny);
                        }}
                        className={isShiny ? "shiny-active" : ""}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                    </svg>
                </div>
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
                    {stats.map((stat, key) => {
                        const { base_stat, stat: statInfo } = stat;

                        const fullStat = 255;
                        const statPercentage = (base_stat * 100) / fullStat;

                        const statNameMap = {
                            "special-attack": "Sp. Atk",
                            "special-defense": "Sp. Def",
                        };

                        // Replace the original stat name if it exists in the map
                        const statName = statNameMap[statInfo.name] || statInfo.name;

                        const getColor = (baseStat) => {
                            if (baseStat <= 29) return "red";
                            if (baseStat <= 59) return "orange";
                            if (baseStat <= 89) return "yellow";
                            if (baseStat <= 119) return "green";
                            if (baseStat <= 149) return "dark_green";
                            return "blue";
                        };

                        const color = getColor(base_stat);

                        return (
                            <div className="stat" key={key}>
                                <div className="name">{statName}</div>
                                <div>{base_stat}</div>
                                <div style={{ width: `${statPercentage}%` }} className={`stat_bar bar_${color}`}></div>
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
