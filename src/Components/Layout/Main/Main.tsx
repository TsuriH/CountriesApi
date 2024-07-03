import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import { useState } from "react";
import { CountryCard } from "../../Countries/CountryCard/CountryCard";
import countriesListJson from "../../../data.json"
export function Main(): JSX.Element {

    const [region, setRegion] = useState("Filter by Region")
    const [optionsAreOpen, setOptionsAreOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const updateInputValue = (e: any) => {
        setInputValue(prev => e.target.value)
    }

    // const filteredCountries = region === "All" || region === "Filter by Region" ?
    //     countriesListJson : countriesListJson.filter(country => country.region === region)

    const filteredCountries = countriesListJson.filter(country => {
        const matchesRegion = region === "All" || region === "Filter by Region" || country.region === region
        const matchesSearch = country.name.toLowerCase().startsWith(inputValue.toLocaleLowerCase())
        return matchesRegion && matchesSearch
    })

    const regionsNames = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]

    const handleRegionBtnClick = (regionName: string) => {
        setRegion(prevState => regionName)

    }


    return (
        <div className="Main">
            <div className="main-header">
                <div className="search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                        color: "white"
                    }} />
                    <input type="text" placeholder="Search for a country..." onChange={(e) => updateInputValue(e)} />
                </div>

                <div className="dropdown">

                    <div className="dropdown-header" onClick={() => setOptionsAreOpen(!optionsAreOpen)}>
                        <button >{region} </button>
                        <FontAwesomeIcon icon={faChevronDown} className="drop-icon" />
                    </div>

                    <div className="options-wrapper" style={{ height: optionsAreOpen ? '200px' : '0px' }}  >
                        <div className="dropdown-list">

                            {
                                regionsNames.map((regionName, index) =>
                                    (<button key={index} onClick={() => { handleRegionBtnClick(regionName) }}>{regionName}</button>))

                            }

                        </div>
                    </div>

                </div>
            </div>

            <div className="countries-container">

                {
                    filteredCountries.map((country, index) => (
                        <CountryCard
                            key={index}
                            flag={country.flags.svg}
                            countryName={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    ))
                }



            </div>

        </div >
    );
}


