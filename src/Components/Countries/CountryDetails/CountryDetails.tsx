import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CountryDetails.css";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom"
import countriesListJson from "../../../data.json"


export function CountryDetails(): JSX.Element {

    const { name } = useParams()
    const chosenCountry = countriesListJson.filter(country => country.name === name)[0]

    const borderCountryName = (borderalpha3CodeName: string) => {
        const countryAlpha3code = borderalpha3CodeName
        const countryBorder = countriesListJson.find(c => c.alpha3Code === countryAlpha3code)
        return countryBorder?.name
    }




    return (
        <div className="CountryDetails">

            <NavLink to={"/"}><button className="back-btn"><FontAwesomeIcon icon={faArrowLeftLong} />Back</button></NavLink>

            <div className="flag-img-con">
                <img src={chosenCountry.flag} alt="" />
            </div>{ }

            <div className="main-details">
                <h2>{chosenCountry.name}</h2>
                <p><span>Native Name:</span> {chosenCountry.nativeName}</p>
                <p><span>Population:</span> {chosenCountry.population}</p>
                <p><span>Region:</span> {chosenCountry.region}</p>
                <p><span>Sub Region:</span> {chosenCountry.subregion}</p>
                <p><span>Capital:</span> {chosenCountry.capital}</p>
            </div>

            <div className="extra-details">
                <p><span>Top Level Domain:</span> {chosenCountry.topLevelDomain}</p>
                <p><span>Currencies:</span>
                    {chosenCountry.currencies?.map(c => <p>{c.name}</p>)}
                </p>

                <p><span>Languages:</span> {chosenCountry.languages?.map(l => <p>{l.name}</p>)}</p>
            </div>

            <div className="border-countries">
                <h3>Border Countries:</h3>
                <div className="bordered-countries-con">
                    {chosenCountry.borders?.map(b => (
                        <button className="bordered-country-btn">{borderCountryName(b)}</button>
                    ))
                    }


                </div>

            </div>

        </div>
    );
}
