import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import { useState } from "react";
import { CountryCard } from "../../Countries/CountryCard/CountryCard";

export function Main(): JSX.Element {

    const [dropdownHeader, setDropdownHeader] = useState("Filter by Region")
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
                        <button >{dropdownHeader} </button>
                        <FontAwesomeIcon icon={faChevronDown} className="drop-icon" />
                    </div>

                    <div className="options-wrapper" style={{ height: optionsAreOpen ? '200px' : '0px' }}  >
                        <div className="dropdown-list">

                            <button onClick={() => {
                                setDropdownHeader(prevState => "Africa")
                                setOptionsAreOpen(prevState => false)

                            }}>Africa</button>
                            <button onClick={() => {
                                setDropdownHeader(prevState => "America")
                                setOptionsAreOpen(prevState => false)
                            }}>America</button>

                            <button onClick={() => {
                                setDropdownHeader(prevState => "Asia")
                                setOptionsAreOpen(prevState => false)
                            }}>Asia</button>

                            <button onClick={() => {
                                setDropdownHeader(prevState => "Europe")
                                setOptionsAreOpen(prevState => false)
                            }}>Europe</button>

                            <button onClick={() => {
                                setDropdownHeader(prevState => "Oceania")
                                setOptionsAreOpen(prevState => false)
                            }}>Oceania</button>

                        </div>

                    </div>

                </div>
            </div>

            <div className="countries-container">

                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />

            </div>

        </div>
    );
}
