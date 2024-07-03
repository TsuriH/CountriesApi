import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import { useState } from "react";
import { CountryCard } from "../../Countries/CountryCard/CountryCard";
import countriesListJson from "../../../data.json"
export function Main(): JSX.Element {

    const [region, setRegion] = useState("Filter by Region")
    const [optionsAreOpen, setOptionsAreOpen] = useState(false)



    return (
        <div className="Main">
            <div className="main-header">
                <div className="search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                        color: "white"
                    }} />
                    <input type="text" placeholder="Search for a country..." />
                </div>

                <div className="dropdown">

                    <div className="dropdown-header" onClick={() => setOptionsAreOpen(!optionsAreOpen)}>
                        <button >{region} </button>
                        <FontAwesomeIcon icon={faChevronDown} className="drop-icon" />
                    </div>

                    <div className="options-wrapper" style={{ height: optionsAreOpen ? '200px' : '0px' }}  >
                        <div className="dropdown-list">

                            <button onClick={() => {
                                setRegion(prevState => "All")
                                setOptionsAreOpen(prevState => false)

                            }}>All</button>

                            <button onClick={() => {
                                setRegion(prevState => "Africa")
                                setOptionsAreOpen(prevState => false)

                            }}>Africa</button>

                            <button onClick={() => {
                                setRegion(prevState => "Americas")
                                setOptionsAreOpen(prevState => false)
                            }}>America</button>

                            <button onClick={() => {
                                setRegion(prevState => "Asia")
                                setOptionsAreOpen(prevState => false)
                            }}>Asia</button>

                            <button onClick={() => {
                                setRegion(prevState => "Europe")
                                setOptionsAreOpen(prevState => false)
                            }}>Europe</button>

                            <button onClick={() => {
                                setRegion(prevState => "Oceania")
                                setOptionsAreOpen(prevState => false)
                            }}>Oceania</button>

                        </div>

                    </div>

                </div>
            </div>

            <div className="countries-container">

                {countriesListJson &&
                    (region === "All" || region === "Filter by Region") ?
                    (countriesListJson.map((country, index) =>
                        <CountryCard key={index}
                            flag={country.flags.svg}
                            countryName={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital} />
                    )) :
                    <>
                        {region === "Africa" && (countriesListJson.map((country, index) =>
                            country.region === "Africa" ?
                                <CountryCard key={index}
                                    flag={country.flags.svg}
                                    countryName={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital} /> : ""
                        ))}

                        {region === "Asia" && (countriesListJson.map((country, index) =>
                            country.region === "Asia" ?
                                <CountryCard key={index}
                                    flag={country.flags.svg}
                                    countryName={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital} /> : ""
                        ))}

                        {region === "Europe" && (countriesListJson.map((country, index) =>
                            country.region === "Europe" ?
                                <CountryCard key={index}
                                    flag={country.flags.svg}
                                    countryName={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital} /> : ""
                        ))}


                        {region === "Oceania" && (countriesListJson.map((country, index) =>
                            country.region === "Oceania" ?
                                <CountryCard key={index}
                                    flag={country.flags.svg}
                                    countryName={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital} /> : ""
                        ))}

                        {region === "Americas" && (countriesListJson.map((country, index) =>
                            country.region === "Americas" ?
                                <CountryCard key={index}
                                    flag={country.flags.svg}
                                    countryName={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital} /> : ""
                        ))}













                    </>
                }



            </div>

        </div>
    );
}


