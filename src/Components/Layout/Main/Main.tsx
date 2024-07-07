import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import { useState } from "react";
import { CountryCard } from "../../Countries/CountryCard/CountryCard";
import countriesListJson from "../../../data.json"

interface MainProps {
    isDarkMode: boolean;
}

export function Main(props: MainProps): JSX.Element {

    const [region, setRegion] = useState("Filter by Region")
    const [optionsAreOpen, setOptionsAreOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const updateInputValue = (e: any) => {
        setInputValue(e.target.value)
    }

    const filteredCountries = countriesListJson.filter(country => {
        const matchesRegion = region === "All" || region === "Filter by Region" || country.region === region
        const matchesSearch = country.name.toLowerCase().startsWith(inputValue.toLocaleLowerCase())
        return matchesRegion && matchesSearch
    })

    const regionsNames = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]

    const handleRegionBtnClick = (regionName: string) => {
        setRegion(regionName)
        setOptionsAreOpen(false)
    }


    return (
        <div className="Main"
            style={{ backgroundColor: props.isDarkMode ? "" : "var(--Very-Light-Gray)" }}>

            <div className="main-header">

                <div className="search-bar" style={{ background: props.isDarkMode ? "" : "white" }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                        color: props.isDarkMode ? "white" : "var(--Dark-Gray)"
                    }} />
                    <input type="text" placeholder="Search for a country..." onChange={(e) => updateInputValue(e)} className={`${props.isDarkMode ? "" : "white-mode"}`} />
                </div>

                <div className="dropdown" >

                    <div className="dropdown-header" onClick={() => setOptionsAreOpen(!optionsAreOpen)} style={{ background: props.isDarkMode ? "" : "white" }}>
                        <button style={{ color: props.isDarkMode ? "" : "var(--Very-Dark-Blue)" }}>{region}</button>
                        <FontAwesomeIcon icon={faChevronDown} className="drop-icon" style={{ color: props.isDarkMode ? "" : "var(--Very-Dark-Blue)" }} />
                    </div>

                    <div className="options-wrapper" style={{ height: optionsAreOpen ? '200px' : '0px' }}  >

                        <div className="dropdown-list" style={{ background: props.isDarkMode ? "" : "white" }}>

                            {
                                regionsNames.map((regionName, index) =>
                                    (<button key={index} style={{ color: props.isDarkMode ? "" : "var(--Very-Dark-Blue)" }} onClick={() => { handleRegionBtnClick(regionName) }}>{regionName}</button>))

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


